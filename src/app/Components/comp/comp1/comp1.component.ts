import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username:String="";



  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {
  }

  onChange(uname:any){
    this.username=uname.value;
    console.log(uname.value);
    this._du.username.next(uname.value);
    
  }

}
