import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, of, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  ShoppingData:any=[]

  url="https://deependra-009.github.io/db.json";

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    this.http.get(this.url)
    .pipe(shareReplay())
    .subscribe((res:any)=>{
      from(res.ShoppingData.mobile).subscribe(res1=>{
        this.ShoppingData.push(res1);
      })
      from(res.ShoppingData.electronics)
      .subscribe(res1=>{
        this.ShoppingData.push(res1);
      })
      console.log(this.ShoppingData);
      
      
      
    })

  }

}
