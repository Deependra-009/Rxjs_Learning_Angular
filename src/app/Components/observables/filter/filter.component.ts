import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataArr=[
    {id:1,name:"Deependra",gender:"Male"},
    {id:2,name:"Priyanka",gender:"Female"},
    {id:3,name:"Ashish",gender:"Male"},
    {id:4,name:"Vivek",gender:"Male"},
    {id:5,name:"Janet",gender:"Female"},
    {id:6,name:"Monika",gender:"Female"},
    {id:7,name:"Rajesh",gender:"Male"},
    {id:8,name:"Sanjana",gender:"Female"},
    {id:9,name:"Neha",gender:"Female"},
    {id:10,name:"Sakshi",gender:"Female"},
    {id:11,name:"Neeraj",gender:"Male"},
    {id:12,name:"Pradeep",gender:"Male"}
  ]

  data:any;
  data2:any;
  data3:any;



  constructor() { }

  ngOnInit(): void {

    const source=from(this.dataArr);


    // ex-01 filter by length

    source
    .pipe(
      filter(member=>member.name.length>6),
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
      this.data=res;
      
    })


    // ex-02 filter by gender

    source
    .pipe(
      filter(member=>member.gender=="Male"),
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
      this.data2=res;
      
    })

    // ex-02 filter by gender

    source
    .pipe(
      filter(member=>member.id<=6),
      toArray()
    )
    .subscribe(res=>{
      console.log(res);
      this.data3=res;
      
    })






  }

}
