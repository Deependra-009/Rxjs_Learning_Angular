import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  sub1 = new Subscription();
  sub2 = new Subscription();

  msg1:any;
  msg2:any;
  

  constructor(
    private _designUtility:DesignUtilityService
  ) { }

  ngOnInit(): void {

    // ex-01

    const broadCastVideos = interval(1000);


    //example 1

    this.sub1 = broadCastVideos
      .pipe(
        map(data =>('Video ' + data)
      )
    ).subscribe(res => {
         this.msg1=res;

        })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000)

    // example 2

    this.sub2=broadCastVideos.pipe(
      map(data=>(data*10))
    ).subscribe((res:any)=>{
      this.msg2=res;
      
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000)

    //ex-03

    const members=from([
      {id:'1',name:'Deependra'},
      {id:'2',name:'Ayush'},
      {id:'3',name:'Vineet'},
      {id:'4',name:'Ayush Kishore'},
      {id:'5',name:'Naman'}
    ]);

   members.pipe(
    map(data=>data.name)
   ).subscribe(res=>{
    this._designUtility.print(res,"elContainer");
    
   })


  }

}
