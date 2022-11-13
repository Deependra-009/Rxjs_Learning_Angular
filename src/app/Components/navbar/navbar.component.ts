import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  exclusive:boolean=false;

  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {
    this._du.exclusive.subscribe(res=>{
      this.exclusive=res;
    })
  }

}
