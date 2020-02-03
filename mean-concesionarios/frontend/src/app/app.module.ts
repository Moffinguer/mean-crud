import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SellersComponent } from './components/sellers/sellers.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CarsComponent } from './components/cars/cars.component';
import { MotocyclesComponent } from './components/motocycles/motocycles.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyersComponent,
    VehiclesComponent,
    SellersComponent,
    CarsComponent,
    MotocyclesComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
