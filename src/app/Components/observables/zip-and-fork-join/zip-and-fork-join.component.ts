import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, map, pluck, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-zip-and-fork-join',
  templateUrl: './zip-and-fork-join.component.html',
  styleUrls: ['./zip-and-fork-join.component.css']
})
export class ZipAndForkJoinComponent implements OnInit {

  @ViewChild("name") name!: ElementRef;
  @ViewChild("color") color!: ElementRef;

  Names = ['1', '2', '3', '4', '5']
  Color = ['red', 'blue', 'green', 'purple', 'grey']

  targetName="";
  targetcolor="";

  targetName1="";
  targetcolor1="";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const nameObs = fromEvent(this.name.nativeElement, 'change')
      .pipe(
        // map((event:any)=>event.target.value)
        take(4),
        pluck('target', 'value')
      )


    const colorObs = fromEvent(this.color.nativeElement, 'change')
      .pipe(
        take(3),
        map((event: any) => event.target.value)
      )

      // ex-01

      zip(nameObs,colorObs).subscribe(([name,color]:any)=>{
        this.targetName=name;
        this.targetcolor=color;
        
        
      })

      // ex-02

      forkJoin(nameObs,colorObs).subscribe(([name,color]:any)=>{
        this.targetName1=name;
        this.targetcolor1=color;
        
        
      })




  }



}
