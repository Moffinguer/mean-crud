import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class UserService{
    public url:String;
    constructor(private http:HttpClient){
        this.url=GLOBAL.url;
    }
    signUp(params){
        const httpOptions={
            headers:new HttpHeaders({"Content-Type":"application/json"}),
        };
        return this.http.post(this.url+`users/login`,params,httpOptions);

    }
}