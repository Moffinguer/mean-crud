import { Component, OnInit } from '@angular/core';
import { externalApiService } from '../../services/externalApi.service';
import { Coches } from '../../models/Coches';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[externalApiService]
})
export class HomeComponent implements OnInit {

  constructor(public apiExt:externalApiService) {
   }

  ngOnInit() {
    this.getApi(this.apiExt);
  }
  getApi(apiExt){
   const myObserver={
     next:function(x){
                  console.log(this.apiExt);
                  const coches=JSON.parse(JSON.stringify(x)).Results;
                  coches.forEach(element => {
                  apiExt.pushing(element);
                });
    },
     error:err=>{},
     complete:()=>{}
   }
   this.apiExt.getCarsExt().subscribe(myObserver);
  }

}
