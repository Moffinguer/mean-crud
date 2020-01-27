import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Buyers } from '../models/buyers';
@Injectable({
  providedIn: 'root'
})
export class BuyersService {
  readonly URI_API="http://localhost:3000/api/buyer";
  selectedBuyer:Buyers;
  buyers:Buyers[];
  constructor(private http:HttpClient) { 
    this.selectedBuyer=new Buyers();
  }
  getBuyers(){
    return this.http.get(this.URI_API);
  }
  createBuyer(buyer:Buyers){
    return this.http.post(this.URI_API,buyer);    
  }
  editBuyer(buyer:Buyers){
    return this.http.put(this.URI_API+`/${buyer._id}`,buyer);
  }
  deleteBuyer(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);
  }
}
