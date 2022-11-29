import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, from, interval, map, of } from "rxjs";
import { TestService } from "./test.service";

@Injectable({
    providedIn:'root'
})
export class DataService{
    

   source= from([1,2,3,4,5]);
   mysrc = of([1,2,3,4,5,6])
   

 private customers=[
    { 'id': 1, 'name': 'Customer1', 'age': 20},
    { 'id': 2, 'name': 'Customer1', 'age': 20},
    {  'id': 3,'name': 'Customer1', 'age': 20},
    { 'id': 4,'name': 'Customer1', 'age': 20},   
    { 'id': 5,'name': 'Customer1', 'age': 20},
    { 'id': 6,'name': 'Customer1', 'age': 20},
    {'id': 7, 'name': 'Customer1', 'age': 20},
    { 'id': 8,'name': 'Customer1', 'age': 20},
    
 
   ]

  //
   constructor( private http: HttpClient ){
   
   }

  getData(id:number){

    interval(4550)
    debugger;
    let customer = this.customers.find(x=>x.id == id);
  return customer;
  }


  AddCustomer( ){
    let x = { 'name': 'New Data', 'age': 11}
  //this.customers.push(x);
  }

  
   getDatafromAPI(){
    // logic to make http calls

    let token = localStorage.getItem('token');

  return this.http.get('https://localhost:44397/api/quotes',{headers: {'Authorization':'bearer ' + token}});

   }


   getTestData(){
    return this.source;
   }
}