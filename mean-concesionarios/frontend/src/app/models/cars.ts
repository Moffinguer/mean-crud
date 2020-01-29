export class Cars {
    _id:string;
    idCar:string;
    doors:number;
    constructor(_id="",idCar="",doors=0){
        this._id=_id;
        this.idCar=idCar;
        this.doors=doors;
    }
}
