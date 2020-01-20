import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormModule} from '@angular/core';
import {HttpModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeachersComponent } from './components/teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
