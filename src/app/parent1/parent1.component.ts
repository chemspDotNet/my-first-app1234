import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnChanges, OnInit,DoCheck , AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
   @Input()
    counterinParent;

    @Input()
     title :any /// Bound property
    
     data;
    
     @ContentChild('mycontent')
     content;

     @ViewChild('Div', {static:true})
     myviewItem
    
   ngOnChanges(SimpleChanges: SimpleChanges){
 debugger

    let x = this.content;
    let y = this.myviewItem;
  
   }

   ngOnInit(): void {
       this.data = this.getDatafromAPI();
       debugger
       
    let x = this.content;
    
    let y = this.myviewItem;
   }

   ngDoCheck(){
    debugger
    
    let x = this.content;
    
    let y = this.myviewItem;
   }


   ngAfterContentInit(): void {
     debugger
     
    let x = this.content;
    
    let y = this.myviewItem;
   }

   ngAfterContentChecked(){
    debugger
    
    let y = this.myviewItem;
   }

   ngAfterViewInit(){
    debugger
    
    let y = this.myviewItem;
   }

   ngAfterViewChecked(){
    debugger
   }

   ngOnDestroy(){
    debugger
   }

   getDatafromAPI(){
      /// make call to api
      return { 'Name': 'Sunil'}
   }

   setItm(){
    debugger;
     this.title = this.title;
   }

   
}




