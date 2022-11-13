import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  exclusive=new Subject<boolean>();

  username=new BehaviorSubject<String>("Deependra");

  videoEmit=new ReplaySubject<String>(3,5000);

  asyncvideoEmit=new AsyncSubject<String>();

  constructor() { }

  print(data:any,containerId:any){
    let el=document.createElement('li');
    el.innerText=data;
    document.getElementById(containerId)?.appendChild(el);

  }
}
