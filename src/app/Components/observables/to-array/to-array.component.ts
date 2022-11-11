import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users=[
    {name:'Deependra',skill:'SpringBoot'},
    {name:'Ayush',skill:'React'},
    {name:'Vineet',skill:'Angular'},
    {name:'Naman',skill:'Java'}

  ]

  sourceSub: Subscription = new Subscription;

  constructor(
    private _designUtility:DesignUtilityService
  ) { }

  ngOnInit(): void {


    // example 1
    const source = interval(100);

    this.sourceSub = source
    .pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      // console.log(res);
      this._designUtility.print(res,"elContainer")
    })

    // example 2

    const source2=from(this.users);
    
    source2
    .pipe(toArray()).subscribe(res=>{
      console.log(res);   
      this._designUtility.print(res,"elContainer2")
    })

    // example 3

    const source3=of('Red','Green','Blue');

    source3
    .pipe(toArray())
    .subscribe(res=>{
      console.log(res);
      this._designUtility.print(res,"elContainer3")
      
    })

  }

}
