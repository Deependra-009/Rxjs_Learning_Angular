import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  btnClick: boolean = false;

  person: any;

  status = "No Data";
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  fetchDetails() {
    this.btnClick = true;
    setTimeout(() => {
      this.http.get("https://deependra-009.github.io/db.json")
      .pipe(
        // retry(3)
        retryWhen(error=>error.pipe(
          delay(3000),
          scan((retyrcount:any)=>{
            if(retyrcount>=3) throw error;
            else {
              retyrcount=retyrcount+1;
              this.status="Retrying Attemp #"+retyrcount
              return retyrcount
            }
          },0)
        ))
      )
        .subscribe(
          (res: any) => {
            console.log(res.users);
            this.person = res.users
            this.btnClick = false;
            this.status = "Data Fetched";
          },
          (error) => {
            console.log(error);
            this.btnClick = false;
            this.status = "Problem Fetching Data";
          })
    }, 3000);
  }

}
