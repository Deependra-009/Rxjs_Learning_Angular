import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {

  data:any;
  data2:any;

  constructor() { }

  users=[
    {
      name:"Deependra",
      skill:"Angular+springboot",
      job:{
        title:"Full Stack",
        exp:"1 Years"
      }
    },
    {
      name:"Divyansh",
      skill:"ReactJS",
      job:{
        title:"React Developer",
        exp:"1.5 Years"
      }
    },
    {
      name:"Abhijeet",
      skill:"Javascript",
      job:{
        title:"Javascript Developer",
        exp:"4 Years"
      }
    },
    {
      name:"Naman",
      skill:"SAP/ABAP",
      job:{
        title:"Sap Developer",
        exp:"1 Years"
      }
    }
  ]

  ngOnInit(): void {


    //ex-01

    from(this.users).pipe(
      // map(data=>data.name),
      pluck('name'),
      toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data=res;
      
    })


    //ex-02

    from(this.users).pipe(
      // map(data=>data.name),
      pluck('job','title'),
      toArray()
    ).subscribe((res)=>{
      console.log(res);
      this.data2=res;
      
    })

 


  }


}
