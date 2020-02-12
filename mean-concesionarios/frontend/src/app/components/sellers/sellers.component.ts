import { Component, OnInit } from '@angular/core';
import { Sellers } from '../../models/sellers';
import { SellersService } from '../../services/sellers.service';
import { NgForm, FormGroup } from '@angular/forms';
import {FormBuilder, Validators } from "@angular/forms";
declare var M: any;
@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {
  form: FormGroup;
  constructor(private sellerService:SellersService,public formBuilder:FormBuilder) { }

  ngOnInit() {
    this.getSellers();
    this.form=this.formBuilder.group({
      name:["",[Validators.required, Validators.minLength(2),Validators.pattern("[a-z]+/i")]],
      surname:["",[Validators.required, Validators.minLength(2),Validators.pattern("[a-z]+/i")]],
      email:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      rank:["",[Validators.required]],
      phoneNumber:["",[Validators.required,Validators.maxLength(9),Validators.pattern("\d{9}")]]
    })
  }
  get errorControl() {
    return this.form.controls;
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.sellerService.selectedSeller = new Sellers();
    }
  }
  getSellers() {
    this.sellerService.getSellers().subscribe(res => {
      this.sellerService.seller = res as Sellers[];
    })
  }
  editSeller(seller: Sellers) {
    this.sellerService.selectedSeller = seller;
  }
  addSeller(form: NgForm) {
    if (!this.form.valid) {
      M.toast({ html: "Fields empty" });
      return false;
    }
    if(form.value._id){
      this.sellerService.editSeller(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Seller edited correctly" });
        this.getSellers();
      })
    }else{
      this.sellerService.createSeller(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Seller saved correctly" });
        this.getSellers();
    })
  }
}
  deleteSeller(_id:string){
    if(confirm("Are u sure u wanna delete this buyer")){
      this.sellerService.deleteSeller(_id).subscribe(res=>{
        M.toast({html:"Seller deleted succesfully"});
        this.getSellers();
      })
    }
  }
}
