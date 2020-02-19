import { VehiclesService } from '../services/vehicles.service';
export class Coches {
    Country:string;
    CreatedOn:string
    DateAvailableToPublic:string
    Id:string
    Name:string
    UpdateOn:string
    VehicleType:string
    WMI:string
    constructor(Country="", CreatedOn="",
        DateAvailableToPublic="",
        Id="",Name="",UpdateOn="",
        VehicleType="",WMI=""){
            this.CreatedOn=CreatedOn;
            this.Country=Country;
            this.DateAvailableToPublic=DateAvailableToPublic;
            this.Id=Id;
            this.Name=Name;
            this.UpdateOn=UpdateOn;
            this.VehicleType=VehicleType;
            this.WMI=WMI;
        }    
}
