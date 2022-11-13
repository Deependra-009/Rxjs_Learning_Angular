import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time-distinct-until-change',
  templateUrl: './debounce-time-distinct-until-change.component.html',
  styleUrls: ['./debounce-time-distinct-until-change.component.css']
})
export class DebounceTimeDistinctUntilChangeComponent implements OnInit,AfterViewInit {

  @ViewChild('myInput')
  myInput!:ElementRef;

  reqData=null;

  @ViewChild('myInput2')
  myInput2!:ElementRef;

  reqData2=null;

  constructor(
    private loadingBar:LoadingBarService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    //ex-01

    const searchTerm=fromEvent(this.myInput.nativeElement,'keyup')
    .pipe(
      map((event:any)=>(event.target.value)),
      debounceTime(500)
    );

    searchTerm
    .subscribe((res)=>{
      console.log(res);
      this.reqData=res;
      this.loadingBar.start();
      setTimeout(()=>{
        this.reqData=null;
        this.loadingBar.stop();
      },1000)
      
    })

    //ex-02

    const searchTerm2=fromEvent(this.myInput2.nativeElement,'keyup')
    .pipe(
      map((event:any)=>(event.target.value)),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2
    .subscribe((res)=>{
      console.log(res);
      this.reqData2=res;
      this.loadingBar.start();
      setTimeout(()=>{
        this.reqData2=null;
        this.loadingBar.stop();
      },1000)
      
    });

    
  }

}
