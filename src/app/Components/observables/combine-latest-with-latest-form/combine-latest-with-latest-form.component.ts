import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-latest-with-latest-form',
  templateUrl: './combine-latest-with-latest-form.component.html',
  styleUrls: ['./combine-latest-with-latest-form.component.css']
})
export class CombineLatestWithLatestFormComponent implements OnInit, AfterViewInit {

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
        pluck('target', 'value')
      )


    const colorObs = fromEvent(this.color.nativeElement, 'change')
      .pipe(
        map((event: any) => event.target.value)
      )

      // ex-01 combine latest

      combineLatest(nameObs,colorObs)
      .subscribe(([name,color]:any)=>{
        this.targetName=name;
        this.targetcolor=color;
        
      })

      // ex-02 with latest from
      //master obs

      nameObs.pipe(
        withLatestFrom(colorObs)
      ).subscribe(([name,color]:any)=>{
        this.targetName1=name;
        this.targetcolor1=color;
        
      })




  }



}
