import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
   IsLogin:boolean = false

  Login(user){
    debugger
    let username:string = user.username;
    let pass:string = user.password;
    let body = new URLSearchParams();
        body.set('Username', username );
        body.set('password', pass);        
        body.set('grant_type', 'password');

     return  this.http.post('https://localhost:44397/token',body, {headers:{'content-type':'x-www-form-urlencoded' }})
    }


  register(){
    let body= 
      {
        "Username": "Sunil12345",
        "password": "Az@123456789",
        "confirmPassword": "Az@123456789",
        "Role":"Admin"
       }
    return  this.http.post('https://localhost:44397/api/Account/Register', body, {headers: {'content-type':'application/json'}})
  }  
}
