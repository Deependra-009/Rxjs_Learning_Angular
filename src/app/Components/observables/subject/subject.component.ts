import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy {

  username:String="";

  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {
    this._du.exclusive.next(true)
    this._du.username.subscribe((res)=>{
      this.username=res;
    })
  }

  ngOnDestroy(): void {
    this._du.exclusive.next(false);
  }

}
