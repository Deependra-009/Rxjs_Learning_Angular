import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  obsMessage:any;
  videoSubscription: Subscription = new Subscription;

  constructor(
    private _designUtility:DesignUtilityService
  ) { }

  ngOnInit(): void {

    // const broadcastVideo=interval(1000);
    //timer(delay,interval)
    const broadcastVideo=timer(5000,1000);

    this.videoSubscription=broadcastVideo.subscribe((res)=>{
      console.log(res);
      this.obsMessage="Video "+(res);
      this._designUtility.print(this.obsMessage,"elContainer");
      this._designUtility.print(this.obsMessage,"elContainer2");
      this._designUtility.print(this.obsMessage,"elContainer3");

      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
      
    })

  }

}
