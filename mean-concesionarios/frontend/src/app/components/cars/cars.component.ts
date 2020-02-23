import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Cars } from "../../models/cars";
import { CarsService } from "../../services/cars.service";
declare var M: any;
@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.getCars();
  }
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.carsService.selectedCars = new Cars();
    }
  }
  getCars() {
    this.carsService.getCar().subscribe(res => {
      this.carsService.car = res as Cars[];
    });
  }
  editCar(car: Cars) {
    this.carsService.selectedCars = car;
  }
  addCar(form: NgForm) {
    if (form.value._id) {
      this.carsService.editCar(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "car edited correctly" });
        this.getCars();
      });
    } else {
      this.carsService.createCar(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: "car saved correctly" });
        this.getCars();
      });
    }
  }
  deleteCar(_id: string) {
    if (confirm("Are u sure u wanna delete this buyer")) {
      this.carsService.deleteCar(_id).subscribe(res => {
        M.toast({ html: "Car deleted succesfully" });
        this.getCars();
      });
    }
  }
}
