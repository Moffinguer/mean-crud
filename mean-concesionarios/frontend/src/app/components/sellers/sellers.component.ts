import { Component, OnInit } from "@angular/core";
import { Sellers } from "../../models/sellers";
import { SellersService } from "../../services/sellers.service";
import { NgForm, FormGroup } from "@angular/forms";
declare var M: any;
@Component({
  selector: "app-sellers",
  templateUrl: "./sellers.component.html",
  styleUrls: ["./sellers.component.css"]
})
export class SellersComponent implements OnInit {
  form: FormGroup;
  constructor(private sellerService: SellersService) {}

  ngOnInit() {
    this.getSellers();
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
    });
  }
  editSeller(seller: Sellers) {
    this.sellerService.selectedSeller = seller;
  }
  addSeller(form: NgForm) {
    if (form.value._id) {
      this.sellerService.editSeller(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Seller edited correctly" });
        this.getSellers();
      });
    } else {
      this.sellerService.createSeller(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Seller saved correctly" });
        this.getSellers();
      });
    }
  }
  deleteSeller(_id: string) {
    if (confirm("Are u sure u wanna delete this buyer")) {
      this.sellerService.deleteSeller(_id).subscribe(res => {
        M.toast({ html: "Seller deleted succesfully" });
        this.getSellers();
      });
    }
  }
}
