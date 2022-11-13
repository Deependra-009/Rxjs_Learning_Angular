import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private _du:DesignUtilityService
  ) { }

  getData(data:String){
    return of(data+' Video Uploaded');
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

    // Ex-02 | Map+Merge

    source.pipe(
      map(res=>this.getData(res)),
      mergeAll()
    ).subscribe(res=>{
      this._du.print(res,"elContainer1");
      
    })

    // Ex-03 | MapMerge

    source.pipe(
      mergeMap(res=>this.getData(res)),
      // mergeAll()
    ).subscribe(res=>{
      this._du.print(res,"elContainer2");
      
    })


    


  }

}
