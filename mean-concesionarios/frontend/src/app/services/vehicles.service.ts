import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vehicles } from "../models/vehicles";
@Injectable({
  providedIn: "root"
})
export class VehiclesService {
  readonly URI_API = "http://localhost:3000/api/vehicles";
  selectedVehicle: Vehicles;
  vehicle: Vehicles[];
  constructor(private http: HttpClient) {
    this.selectedVehicle = new Vehicles();
  }
  getVehicles() {
    return this.http.get(this.URI_API);
  }
  createVehicle(vehicle: Vehicles) {
    return this.http.post(this.URI_API, vehicle);
  }
  editVehicle(vehicle: Vehicles) {
    return this.http.put(this.URI_API + `/${vehicle._id}`, vehicle);
  }
  deleteVehicle(_id: string) {
    return this.http.delete(this.URI_API + `/${_id}`);
  }
}
