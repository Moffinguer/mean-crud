export class Motocycles {
    _id:string;
    idMoto:string;
    wheels:number;
    constructor(_id="",idMoto="",wheels=0){
        this._id=_id;
        this.idMoto=idMoto;
        this.wheels=wheels;
    }
}
