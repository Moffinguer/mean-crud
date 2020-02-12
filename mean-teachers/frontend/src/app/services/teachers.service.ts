import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{Teacher} from '../models/teacher';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  readonly URI_API="http://localhost:3000/api/teachers";
  selectedTeacher:Teacher;
  teachers:Teacher[];
  constructor(private http:HttpClient) {
   this.selectedTeacher=new Teacher();
   }
  getTeachers(){
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" ,
    "Authorization":localStorage.getItem("token")})
    };
    return this.http.get(this.URI_API,httpOptions);
  }
  createTeacher(teacher:Teacher){
    return this.http.post(this.URI_API,teacher);
  }
  editTeacher(teacher:Teacher){
    return this.http.put(this.URI_API+`/${teacher._id}`,teacher);
  }
  deleteTeacher(_id:string){
    return this.http.delete(this.URI_API+`/${_id}`);
  }
}
