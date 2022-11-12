import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit,OnDestroy {

  techStatus:any;
  techStatus1:any;
  techStatus2:any;
  name:any;

  subs2=new Subscription;

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


    // example 2 custom interval
    const arr2=["Angular","Typescript","React","HTML/CSS"];
    const cusObs2=Observable.create((observer:any)=>{
      let count=0;
      setInterval(()=>{
        observer.next(arr2[count]);
        if(count==2){
          // observer.error("error limit");          
        }
        else if(count==3){
          // observer.complete();
          observer.error();
        }
        count++;
      },1000);
      
    })
    this.subs2=cusObs2.subscribe((res:any)=>{
      // console.log(res);
      this._designUtility.print(res,"elContainer2");
    },
    ()=>{
      this.techStatus1="error";
    },
    ()=>{
      this.techStatus1="completed";
    })


    // example 3 randome names
    const arr3=['Angular','React','Java','Html','CSS'];
    const cusObs3=Observable.create((observer:any)=>{
      let count=0;
      setInterval(()=>{
        observer.next(arr3[count++]);
        if(count==2){
          // observer.error("error limit");          
        }
        else if(count==arr3.length){
          observer.complete();
          // observer.error();
        }
        
      },1000);

    })

    cusObs3.subscribe((res:any)=>{
      console.log(res);
      this.name=res;
      
    },
    ()=>{
      this.techStatus2="error";
    },
    ()=>{
      this.techStatus2="completed";
    })



  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }

}
