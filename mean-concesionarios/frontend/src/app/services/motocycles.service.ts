import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motocycles } from '../models/motocycles';
@Injectable({
  providedIn: 'root'
})
export class MotocyclesService {
  readonly URI_API="http://localhost:3000/api/motocycles";
  selectedMotocycle:Motocycles;
  moto:Motocycles[];
  constructor(private http:HttpClient) { 
    this.selectedMotocycle=new Motocycles();
  }
  getMoto(){
    return this.http.get(this.URI_API);
  }
  createMoto(motocycles:Motocycles){
    return this.http.post(this.URI_API,motocycles);    
  }
  editMoto(motocycles:Motocycles){
    return this.http.put(this.URI_API+`/${motocycles._id}`,motocycles);
  }
  deleteMoto(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);
  }
}
