import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sellers } from '../models/sellers';
@Injectable({
  providedIn: 'root'
})
export class SellersService {
  readonly URI_API="http://localhost:3000/api/seller";
  selectedSeller:Sellers;
  seller:Sellers[];
  constructor(private http:HttpClient) { 
    this.selectedSeller=new Sellers();
  }
  getSellers(){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization":localStorage.getItem("token")})
    };
    return this.http.get(this.URI_API,httpOptions);
  }
  createSeller(seller:Sellers){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization":localStorage.getItem("token")})
    };
    return this.http.post(this.URI_API,seller,httpOptions);    
  }
  editSeller(seller:Sellers){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization":localStorage.getItem("token")})
    };
    return this.http.put(this.URI_API+`/${seller._id}`,seller,httpOptions);
  }
  deleteSeller(_id:string){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization":localStorage.getItem("token")})
    };
    return this.http.delete(this.URI_API+`/${_id}`,httpOptions);
  }
}
