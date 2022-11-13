import { Component, OnInit } from '@angular/core';
import { concat, concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  getData(data:String){
    return of(data+" Video Uploaded").pipe(delay(3000));
  }

  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {

    const source=from(['Tech','Comedy','News']);

    // Ex-01

    source.pipe(
      map(res=>this.getData(res))
    ).subscribe(res=>res.subscribe(res2=>{
      this._du.print(res2,"elContainer");
      
    }))

    // Ex-02

    source.pipe(
      mergeMap(res=>this.getData(res)),
    ).subscribe(res=>{
      this._du.print(res,"elContainer1");
    })

    // Ex-03

    source.pipe(
      concatMap(res=>this.getData(res)),
    ).subscribe(res=>{
      this._du.print(res,"elContainer2");
    })


  }

}
