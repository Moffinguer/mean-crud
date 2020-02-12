import { Component, OnInit } from '@angular/core';
import { Motocycles } from '../../models/motocycles';
import { MotocyclesService } from '../../services/motocycles.service';
import { NgForm, FormGroup } from '@angular/forms';
import {FormBuilder, Validators } from "@angular/forms";
declare var M:any;
@Component({
  selector: 'app-motocycles',
  templateUrl: './motocycles.component.html',
  styleUrls: ['./motocycles.component.css']
})
export class MotocyclesComponent implements OnInit {
  form: FormGroup;
  constructor(private motocyclesService:MotocyclesService,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getMotocycles();
    this.form=this.formBuilder.group({
      idMoto:["",[Validators.required]],
      wheels:["",[Validators.pattern("\d+"),Validators.required]]
    })
  }
  get errorControl() {
    return this.form.controls;
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.motocyclesService.selectedMotocycle = new Motocycles();
    }
  }
  getMotocycles() {
    this.motocyclesService.getMoto().subscribe(res => {
      this.motocyclesService.moto = res as Motocycles[];
    })
  }
  editMotocycle(seller: Motocycles) {
    this.motocyclesService.selectedMotocycle = seller;
  }
  addMotocycle(form: NgForm) {
    if (!this.form.valid) {
      M.toast({ html: "Fields empty" });
      return false;
    }
    if(form.value._id){
      this.motocyclesService.editMoto(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Moto edited correctly" });
        this.getMotocycles();
      })
    }else{
      this.motocyclesService.createMoto(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Moto saved correctly" });
        this.getMotocycles();
    })
  }
}
  deleteMotocycle(_id:string){
    if(confirm("Are u sure u wanna delete this buyer")){
      this.motocyclesService.deleteMoto(_id).subscribe(res=>{
        M.toast({html:"Moto deleted succesfully"});
        this.getMotocycles();
      })
    }
  }

}
