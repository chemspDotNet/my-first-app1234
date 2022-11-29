import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user = {'username':'', 'password':''}

  constructor( private account:AccountService, private rtr:Router) { }

  ngOnInit(): void {
  }


  login(){

    this.account.Login(this.user).subscribe({
      next: (data)=>{
        debugger;
        console.log(data)
      localStorage.setItem('token', data['access_token']);
        this.rtr.navigate(['home', 'Edison'], {queryParams:{'city':'sadadawd'}});
       // this.rtr.navigateByUrl('home/NYC');
        this.account.IsLogin= true;

      },
      error: (err)=>{
        this.user.username='';
        this.user.password =''
        this.rtr.navigate(['login']);

      },
      complete: ()=>{
        debugger;
       }
    })
  }
}
