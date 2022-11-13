import { Component, OnInit } from '@angular/core';
import { delay, from, map, mergeAll, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(
    private _du:DesignUtilityService
  ) { }

  getData(data:String){
    return of(data+' Video Uploaded').pipe(delay(1000));
  }

  ngOnInit(): void {

    const source=from(['Tech','Comedy','News']);

    // Ex-01| map

    // source.pipe(
    //   map(res=>this.getData(res))
    // ).subscribe(res=>res.subscribe(res2=>{
    //   this._du.print(res2,"elContainer");
      
    // }))

    source.pipe(
      map(res=>this.getData(res))
    ).subscribe(res=>{
      this._du.print(res,"elContainer");
      
    })

    // Ex-02 | Map+SwitchAll

    source.pipe(
      map(res=>this.getData(res)),
      switchAll()
    ).subscribe(res=>{
      this._du.print(res,"elContainer1");
      
    })

    // Ex-03 | SwitchMap

    source.pipe(
      switchMap(res=>this.getData(res)),
      // mergeAll()
    ).subscribe(res=>{
      this._du.print(res,"elContainer2");
      
    })


    


  }

}
