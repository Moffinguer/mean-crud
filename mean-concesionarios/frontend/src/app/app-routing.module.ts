import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { BuyersComponent } from "./components/buyers/buyers.component";
import { SellersComponent } from "./components/sellers/sellers.component";
import { VehiclesComponent } from "./components/vehicles/vehicles.component";
import { CarsComponent } from "./components/cars/cars.component";
import { MotocyclesComponent } from "./components/motocycles/motocycles.component";
//Las rutas de nuestra aplicación, accesibles desde cualquier archivo, usados en menu.component
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "home", component: HomeComponent },
  { path: "buyers", component: BuyersComponent },
  { path: "sellers", component: SellersComponent },
  { path: "vehicles", component: VehiclesComponent },
  { path: "cars", component: CarsComponent },
  { path: "motocycles", component: MotocyclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
