import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit,AfterViewInit {

  @ViewChild("addBtn")
  addBtn!: ElementRef;

  constructor(
    private _designUtility:DesignUtilityService
  ) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(
      (res)=>{
        let countVal="Video"+(count++);
        this._designUtility.print(countVal,"elContainer");
        this._designUtility.print(countVal,"elContainer2");
      })
  }

  print(data:any,containerId:any){
    let el=document.createElement('li');
    el.innerText=data;
    document.getElementById(containerId)?.appendChild(el);

  }
}
