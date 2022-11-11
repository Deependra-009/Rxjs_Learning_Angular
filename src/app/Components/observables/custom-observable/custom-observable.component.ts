import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  techStatus:any;

  constructor(
    private _designUtility:DesignUtilityService
  ) { }

  ngOnInit(): void {

    // example 1 (Manual)

    const cusObs1=Observable.create((observer:any)=>{

      setTimeout(()=>{
        observer.next('Angular');
      },1000)
      setTimeout(()=>{
        observer.next('TypeScript');
      },2000)
      setTimeout(()=>{
        observer.next('React');
        
        // observer.error("limit exceed");
      },3000)
      setTimeout(()=>{
        observer.next('HTML/CSS');
        observer.complete();
      },4000)
      
    })

    cusObs1.subscribe((res:any)=>{
      this._designUtility.print(res,"elContainer")
      
    },
    ()=>{
      this.techStatus="error";
    },()=>{
      this.techStatus="completed";
    })

    // subscribe(data,error,completion)


  }

}
