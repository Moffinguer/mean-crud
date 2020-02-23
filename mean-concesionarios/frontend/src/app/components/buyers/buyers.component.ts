import { Component, OnInit } from "@angular/core";
import { BuyersService } from "../../services/buyers.service";
import { Buyers } from "../../models/buyers";
import { NgForm } from "@angular/forms";
declare var M: any;
@Component({
  selector: "app-buyers",
  templateUrl: "./buyers.component.html",
  styleUrls: ["./buyers.component.css"],
  providers: [BuyersService]
})
export class BuyersComponent implements OnInit {
  constructor(private buyerService: BuyersService) {}

  ngOnInit() {
    this.getBuyers();
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.buyerService.selectedBuyer = new Buyers();
    }
  }
  getBuyers() {
    this.buyerService.getBuyers().subscribe(res => {
      this.buyerService.buyers = res as Buyers[];
    });
  }
  editBuyer(buyer: Buyers) {
    this.buyerService.selectedBuyer = buyer;
  }
  addBuyer(form: NgForm) {
    if (form.value._id) {
      this.buyerService.editBuyer(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Buyer edited correctly" });
        this.getBuyers();
      });
    } else {
      this.buyerService.createBuyer(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "Buyer saved correctly" });
        this.getBuyers();
      });
    }
  }
  deleteBuyer(_id: string) {
    if (confirm("Are u sure u wanna delete this buyer")) {
      this.buyerService.deleteBuyer(_id).subscribe(res => {
        M.toast({ html: "Buyer deleted succesfully" });
        this.getBuyers();
      });
    }
  }
}
