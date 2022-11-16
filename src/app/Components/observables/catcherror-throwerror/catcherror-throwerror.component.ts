import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catcherror-throwerror',
  templateUrl: './catcherror-throwerror.component.html',
  styleUrls: ['./catcherror-throwerror.component.css']
})
export class CatcherrorThrowerrorComponent implements OnInit {

  error=null;
  ShoppingData:any=[]
  loadData=false;

  url="https://deependra-009.github.io/db.json";

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    

  }

  getData(){
    this.http.get(this.url).subscribe(
      (res:any)=>{
        console.log(res.ShoppingData.mobile);
        this.ShoppingData=res.ShoppingData.mobile;
        this.loadData=true;
      },
      (error)=>{
        console.log(error);
        this.error=error.message;
 
        
        
      }
    )
  }

}
