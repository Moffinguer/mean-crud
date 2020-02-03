import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { BuyersComponent } from "./views/buyers/buyers.component";
import { CarsComponent } from "./views/cars/cars.component";
import { VehiclesComponent } from "./views/vehicles/vehicles.component";
import { MotocyclesComponent } from "./views/motocycles/motocycles.component";
import { SellersComponent } from "./views/sellers/sellers.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "home", component: HomeComponent },
  { path: "Buyers", component: BuyersComponent },
  { path: "Sellers", component: SellersComponent },
  { path: "Vehicles", component: VehiclesComponent },
  { path: "Cars", component: CarsComponent },
  { path: "Motocycles", component: MotocyclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
