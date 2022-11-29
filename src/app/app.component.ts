import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { AccountService } from './services/account.service';
import { DataService } from './services/data.service';
import { TestService } from './services/test.service';
import { TestClass } from './test/testClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TestService]
})
export class AppComponent implements OnInit {
   //home='home';
  title = 'my-first-app';
  flag:boolean = true;
  data:any;

  mystyles = {color:'blue', 'text-decoration':'underline'};
  content= "Hello Class. This is the demo content."

  counter = 0;
  myObservable:Observable<any>;
   
   
 ngOnInit(){

   this.mydataservice.getTestData().pipe().subscribe(
    {
      next: (item)=>{
       console.log(item);
      }
    }
   )


   this.mydataservice.mysrc.subscribe({
    next: (data)=>{
     console.log(data)
    }
   })

















//    this.mydataservice.getDatafromAPI().subscribe({
//     next: (data)=>{ 
//       debugger;
//       this.data = data     },
//     error:(err)=>{
//       debugger;
//       console.log(err)
//     },
//     complete:()=>{
//       console.log('Done.')
//     }
//    })
//  // let x = interval(2000);
    
//  this.myObservable = new Observable((observer)=>{
//    setInterval(()=>{
//     if(this.counter == 5){
//       observer.complete()
//     }
//   observer.next(this.counter++);
      
//    }, 2000);

//  })

//  this.myObservable.subscribe({
//   next: (data)=>{ console.log(data)},
//   complete:()=>{
//       console.log('All Data is fetched');
//   }
//  }) // 1st

  
 }
  
  mytestClass:TestClass;

  //mydataservice: DataService;

  constructor( private mydataservice: DataService , public account:AccountService,private rtr:Router ){
    // this.mydataservice= dataservice;
  }

  submitDatatoDB(data:any){
    debugger;
   // console.log(data.value)
    // call to api and sumbit data
    this.data = data.value;
  }

  getDataFromAPI(){
    // fake call to api
    return  this.mydataservice.getDatafromAPI()
  }


  toggle(){
    this.flag = !this.flag;
  }
  addData(){
    debugger;
    this.mydataservice.AddCustomer();
  }


  register(){

    this.account.register().subscribe({
      next: ()=>{
        debugger;
        console.log("Registration Successful !!!")
      },
      error: (err)=>{},
      complete: ()=>{
        debugger;
       }
    })

  }


  login(){
    let user={}
    this.account.Login(user).subscribe({
      next: (data)=>{
        debugger;
        console.log(data)
      localStorage.setItem('token', data['access_token']);

      },
      error: (err)=>{},
      complete: ()=>{
        debugger;
       }
    })
  }

  logOut(){
    localStorage.removeItem('token');
    this.account.IsLogin= false;
    this.rtr.navigate(['login'])
  }

  navigate(){
   this.counter++;
   this.rtr.navigate(['product', this.counter], { queryParams:{'countr': this.counter}})
  }
}
