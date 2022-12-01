import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-home',
       
    templateUrl:'./home.component.html',
    styles :[`     div      {  border:      3px outset orange;    }`,      'h4 { color : blue}'],
   styleUrls: ['./home.component.css']
})
 export class HomeComponent  implements OnInit{
  constructor(private act: ActivatedRoute){}
   
  ngOnInit(): void {
    debugger
   console.log( this.act.snapshot.data[0]['env']);
   this.act.data.subscribe({
    next : (data)=>{
      console.log(data[0]);
    }
   })
  }
}