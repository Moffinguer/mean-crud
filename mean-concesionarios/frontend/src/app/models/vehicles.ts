export class Vehicles {
    _id:string;
    marc:string;
    brand:string;
    model:string;
    color:string;
    type:string;
    constructor(_id="",marc="",brand="",model="",color="",type=""){
        this._id=_id;
        this.marc=marc;
        this.brand=brand;
        this.model=model;
        this.color=color;
        this.type=type;
    }
}
