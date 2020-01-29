import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get(this.URI_API);
  }
  createSeller(seller:Sellers){
    return this.http.post(this.URI_API,seller);    
  }
  editSeller(seller:Sellers){
    return this.http.put(this.URI_API+`/${seller._id}`,seller);
  }
  deleteSeller(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);
  }
}
