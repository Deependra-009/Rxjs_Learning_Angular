import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
