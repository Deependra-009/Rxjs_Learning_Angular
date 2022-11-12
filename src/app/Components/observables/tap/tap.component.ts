import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  obsSubs=new Subscription();
  obsSubs2=new Subscription();

  color:String='';

  

  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {

    //ex-01
    const Arr=['Anup','Shekhar','UxTrendx','John','Alex'];
    const source=interval(1500);

    this.obsSubs=source
    .pipe(
      tap(res=>{
        if(res==4) this.obsSubs.unsubscribe();
      }),
      map(res=>Arr[res])
    )
    .subscribe(res=>{
      this._du.print(res,"elContainer");
    })

    //ex-02

    const colors=['Red','Blue','Green','cyan','Violet'];

    this.obsSubs2=source
    .pipe(
      tap(res=>{
        if(res==5) this.obsSubs2.unsubscribe();
        
      }),
      map(res=>colors[res])
    )
    .subscribe(res=>{
      this.color=res;
      this._du.print(res,"elContainer2");
    })






  }

}
