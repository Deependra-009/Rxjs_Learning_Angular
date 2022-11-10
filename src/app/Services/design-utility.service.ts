import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(data:any,containerId:any){
    let el=document.createElement('li');
    el.innerText=data;
    document.getElementById(containerId)?.appendChild(el);

  }
}
