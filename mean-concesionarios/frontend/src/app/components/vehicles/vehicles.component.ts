import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../models/vehicles';
import { VehiclesService } from '../../services/vehicles.service';
import { NgForm, FormGroup } from '@angular/forms';
import {FormBuilder, Validators } from "@angular/forms";

declare var M:any;
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  form: FormGroup;
  constructor(private vehicleService:VehiclesService,public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getVehicles();
    this.form=this.formBuilder.group({
      marc:["",[Validators.required,Validators.minLength(2)]],
      brand:["",[Validators.required]],
      model:["",Validators.required],
      type:["",Validators.required],
      color:["",Validators.required]
    })
  }
  get errorControl(){
    return this.form.controls;
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.vehicleService.selectedVehicle = new Vehicles();
    }
  }
  getVehicles() {
    this.vehicleService.getVehicles().subscribe(res => {
      this.vehicleService.vehicle = res as Vehicles[];
    })
  }
  editVehicle(Vehicle: Vehicles) {
    this.vehicleService.selectedVehicle = Vehicle;
  }
  addVehicle(form: NgForm) {
    if(!this.form.valid){
      M.toast({ html: "There is some field empty" });
      return false;
    }
    if(form.value._id){
      this.vehicleService.editVehicle(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Vehicle edited correctly" });
        this.getVehicles();
      })
    }else{
      this.vehicleService.createVehicle(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Vehicle saved correctly" });
        this.getVehicles();
    })
  }
}
  deleteVehicle(_id:string){
    if(confirm("Are u sure u wanna delete this vehicle")){
      this.vehicleService.deleteVehicle(_id).subscribe(res=>{
        M.toast({html:"Vehicle deleted succesfully"});
        this.getVehicles();
      })
    }
  }
  
}
