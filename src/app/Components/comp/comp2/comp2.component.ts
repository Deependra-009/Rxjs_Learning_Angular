import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
