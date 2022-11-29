import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  @Input()
  counterinChild = 0   /// bound properties

  @Output()
  counterChanged:EventEmitter<any> = new EventEmitter<any>();  // it create instance of event 

  ngOnInit(): void {
  }

  increment(){
  this.counterinChild++;
  debugger
  //this.counterChanged.next(this.counterinChild);

  }

  decrement(){
  this.counterinChild--;
  debugger
 //  this.counterChanged.next(this.counterinChild);
  }
}
