import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor(
    private _du:DesignUtilityService
  ) { }

  randomName=['Anup','Shekhar','John','Robert','Ravi'];

  ngOnInit(): void {

    const nameSource=from(this.randomName);

    // ex-01 | take

    nameSource
    .pipe(
      take(4)
    )
    .subscribe(res=>{
      this._du.print(res,"elContainer");
    })

    //ex-02 take last
    nameSource
    .pipe(
      takeLast(4)
    )
    .subscribe(res=>{
      this._du.print(res,"elContainer2");
    })

    //ex-02 take Until
    let condition1=timer(5000);
    let condition2=fromEvent(document,'click');
    const source=interval(1000);
    source
    .pipe(
      takeUntil(condition2)
    )
    .subscribe(res=>{
      this._du.print(res,"elContainer3");
    })

  }

}
