import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEnteredColorHover]'
})
export class EnteredColorHoverDirective implements OnChanges {

  @Input() color = '';

  constructor(private readonly elementRef: ElementRef, private readonly renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color) {
      if ((/^(?:[0-9a-f]{3}){1,2}$/i.test(this.color))) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', `#${this.color}`);
      } else {
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
      }
    }
  }
}
