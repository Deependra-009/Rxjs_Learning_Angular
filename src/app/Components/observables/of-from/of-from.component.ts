import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg: any;

  constructor(
    private _designUtility: DesignUtilityService
  ) { }

  ngOnInit(): void {

    // of example 
    // of is used to convert data into observable

    const obs1 = of('Deependra', 'Trivedi', 'Angular Learning');

    obs1.subscribe(res => {
      this._designUtility.print(res, "elContainer");
    })

    const obs2 = of({
      firstName: 'Deependra',
      lastName: 'Trivedi',
      topic: 'Angular Learning'
    });

    obs2.subscribe(res => {
      this.obsMsg = res;
      // console.log(this.obsMsg);

    })

    // from example
    // it is used to convert array data or object into stream

    const obs3 = from(['Red', 'Blue', 'Green']);

    obs3.subscribe(res => {
      this._designUtility.print(res, "elContainer2");

    })

    // from -promise

    const promise=new Promise(resolve=>{
      setTimeout(()=>{
        resolve("Promise Resolve")
      },3000)
    })

    const obs4 = from(promise);

    obs4.subscribe(res => {
      console.log(res);
      
      this._designUtility.print(res, "elContainer3");

    })

    // from string

    const obs5 = from("Green Blue Red Color");

    obs5.subscribe(res => {
      // console.log(res);
      this._designUtility.print(res, "elContainer4");

    })

    



  }





}
