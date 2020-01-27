export class Sellers {
    _id:string;
    name:string;
    surname:string;
    rank:string;
    phoneNumber:string;
    email:string;
    constructor(_id="",name="",surname="",rank="",phoneNumber="",email=""){
        this._id=_id;
        this.name=name;
        this.surname=surname;
        this.rank=rank;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }
}
