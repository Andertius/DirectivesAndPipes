import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appOnlyAlphanumerics]'
})
export class OnlyAlphanumericsDirective implements OnChanges {

  previousValue = '';
  @Input() input = '';

  constructor(private readonly elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.input) {
      if (!(/^[a-z0-9]*$/i.test(this.input))) {
        this.elementRef.nativeElement.value = this.previousValue;
      } else {
        this.previousValue = this.input;
      }
    }
  }
}
