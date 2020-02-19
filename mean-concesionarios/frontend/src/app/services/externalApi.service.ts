import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coches } from '../models/Coches';
@Injectable({
  providedIn: "root"
})
export class externalApiService {
  selectedApiRet: Coches;
  apiret: Coches[];
  readonly URI_API = "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json";
  constructor(private http: HttpClient) {
    this.selectedApiRet= new Coches();
    this.apiret= [];
  }
  getCarsExt() {
    return this.http.get(this.URI_API);
  }
  pushing(element){
    this.apiret.push(element);
  }
}
