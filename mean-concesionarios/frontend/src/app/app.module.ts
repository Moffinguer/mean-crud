import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyersComponent } from './components/buyers/buyers.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SellersComponent } from './components/sellers/sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyersComponent,
    VehiclesComponent,
    SellersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
