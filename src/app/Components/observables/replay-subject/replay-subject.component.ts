import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  // user data
  user1List:Array<String>=['Angular']
  user2List:Array<String>=[]
  user3List:Array<String>=[]

  // sucribe mode
  subscribeModeUser2:boolean=false;
  subscribeModeUser3:boolean=false;

  // subscription

  user2Subscritption=new Subscription();
  user3Subscritption=new Subscription();

  // Toggle Properties
  methodInterval:boolean=false;
  toggleSubscription=new Subscription();


  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {

    this._du.videoEmit.subscribe((res)=>{
      console.log(res);
      this.user1List.push(res)
      
    })
  }

  addVideo(video:any){
    // console.log(video.value);

    this._du.videoEmit.next(video.value);
    
  }

  user2Subscribe(){
    if(this.subscribeModeUser2){
      this.user2Subscritption.unsubscribe();
    }
    else{
      this.user2Subscritption=this._du.videoEmit.subscribe((res)=>{
        this.user2List.push(res);
      })
    }
    this.subscribeModeUser2=!this.subscribeModeUser2;
    

    

  }

  user3Subscribe(){
    if(this.subscribeModeUser3){
      this.user3Subscritption.unsubscribe();
    }
    else{
      this.user3Subscritption=this._du.videoEmit.subscribe((res)=>{
        this.user3List.push(res);
      })
    }
    this.subscribeModeUser3=!this.subscribeModeUser3;

  }

   // togle method

   toggleMethod(){
    const broadcastVideo=interval(1000);
    this.methodInterval=!this.methodInterval;

    if(this.methodInterval){
      this.toggleSubscription=broadcastVideo.subscribe((res)=>{
        this._du.videoEmit.next('Video'+res);
      })
    }
    else{
      this.toggleSubscription.unsubscribe();
    }
      
    
  }
  

  


}
