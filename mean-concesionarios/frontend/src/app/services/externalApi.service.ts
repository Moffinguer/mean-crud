import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class externalApiService {
  readonly URI_API = "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json";
  constructor(private http: HttpClient) {
  }
  getCarsExt() {
    console.log(this.URI_API);
    return this.http.get(this.URI_API);
  }
}
