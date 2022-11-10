import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  promiseVal:any="";

  dell={
    brand:"Dell",
    hardDisk:"1TB",
    color:"Black"
  }
  hp={
    brand:"HP",
    hardDisk:"1TB",
    color:"Grey"
  }
  NotAv={
    brand:"Not Available",
    status:"Failed"
  }

  constructor() { }

  dellAvailabe(){
    return false;
  }

  hpAvailabe(){
   return false;
  }

  ngOnInit(): void {

    // let buyLaptop=new Promise(function(resolve,reject){
    //   resolve("Promise is resolved");
    // });

    // ES6 
    let buyLaptop=new Promise((resolve,reject)=>{
      // resolve("Promise is resolved");
      // reject("Promise is Reject")

      if(this.dellAvailabe()){
        return setTimeout(()=>{
          // resolve("dell is purchased");
          resolve(this.dell);
        },3000)
        
      }
      else if(this.hpAvailabe()){
        return setTimeout(()=>{
          // resolve("hp is purchased");
          resolve(this.hp);
        },3000)
        
      }
      else{
        //  return reject("laptop is not available")
        return reject(this.NotAv)
      }

    });

    buyLaptop.then(res=>{
      console.log("then code =>",res);
      this.promiseVal=res;
      
    }).catch(err=>{
      console.log("catch code =>",err);
      this.promiseVal=err;
      
    })

  }

  

}
