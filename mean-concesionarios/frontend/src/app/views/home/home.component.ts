import { Component, OnInit } from '@angular/core';
import { externalApiService } from '../../services/externalApi.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[externalApiService]
})
export class HomeComponent implements OnInit {

  constructor(private apiExt:externalApiService) { }

  ngOnInit() {
    this.getApi();
  }
  getApi(){
    //console.log(this.apiExt.getCarsExt());
   const myObserver={
     next:x => {
                const paramHome=JSON.parse(JSON.stringify(x));
                console.log(paramHome);                      

    },
     error:err=>{},
     complete:()=>{}
   }
   this.apiExt.getCarsExt().subscribe(myObserver);
  }

}
