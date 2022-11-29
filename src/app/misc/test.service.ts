import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class TestService{
     y: string= 'Initial Value'; 

    // private http: HttpClient
 
     constructor( private http: HttpClient ){
    // this.http = http
   }
    customers = [
        {'name': 'Ryan'},
        {'name': 'Mary'},
        {'name': 'Paul'},
        {'name': 'Roger'},
    ]

    getQuotes(){
      let token = localStorage.getItem('token');
debugger
      return  this.http.get('https://localhost:44397/api/quotes', {headers:{'Authorization':'bearer ' + token}})

    }

    PostQuotes(){
      let body = {
        "Description": "This a  New house insurance",
        "DueDate": "2022-09-12T10:06:02.7564528-04:00",
        "Premium": 500,
        "QuoteType": "House",
        "Sales": "Paul"
      }
      let token = localStorage.getItem('token')
      return  this.http.post('https://localhost:44397/api/quotes',body, {headers:{'Authorization':'bearer ' + token}})

    }

  }