import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../models/vehicles';
import { VehiclesService } from '../../services/vehicles.service';
import { NgForm } from '@angular/forms';
declare var M:any;
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  constructor(private vehicleService:VehiclesService) { }

  ngOnInit() {
    this.getVehicles();
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
