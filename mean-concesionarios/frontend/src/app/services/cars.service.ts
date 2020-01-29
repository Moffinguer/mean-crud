import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from '../models/cars';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  readonly URI_API="http://localhost:3000/api/cars";
  selectedCars:Cars;
  car:Cars[];
  constructor(private http:HttpClient) { 
    this.selectedCars=new Cars();
  }
  getCar(){
    return this.http.get(this.URI_API);
  }
  createCar(cars:Cars){
    return this.http.post(this.URI_API,cars);    
  }
  editCar(cars:Cars){
    return this.http.put(this.URI_API+`/${cars._id}`,cars);
  }
  deleteCar(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);
  }
}
