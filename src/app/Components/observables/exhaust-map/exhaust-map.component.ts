import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {

  @ViewChild("btnClick")
  btnClick!:ElementRef

  num=0;

  constructor() { }

  ngOnInit(): void {
  }

  viewData(data:any){
    return of(data).pipe(delay(2000));
    
  }

  ngAfterViewInit(): void {
    fromEvent(this.btnClick.nativeElement,"click")
    .pipe(
      exhaustMap(()=>this.viewData(this.num++))
    )
    .subscribe(res=>{
      console.log(res);
      
    })
  }

  
}
