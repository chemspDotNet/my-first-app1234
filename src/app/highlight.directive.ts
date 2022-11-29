import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',

})
export class HighlightDirective {

  constructor( private el:ElementRef, private render : Renderer2) { 
  debugger;
        this.render
  }

}
