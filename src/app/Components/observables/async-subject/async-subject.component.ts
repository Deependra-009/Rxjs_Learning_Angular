import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/Services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit:String="";

  constructor(
    private _du:DesignUtilityService
  ) { }

  ngOnInit(): void {

    this._du.asyncvideoEmit.subscribe((res)=>{
      this.asyncVideoEmit=res;
      
    })
  }

  addVideo(video:any){
    console.log(video.value);
    this._du.asyncvideoEmit.next(video.value);
    
  }

  onComplete(){
    console.log("he");
    
    this._du.asyncvideoEmit.complete();
  }

  

  
  
  


}
