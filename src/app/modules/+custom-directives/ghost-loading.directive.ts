import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appGhostLoading]'
})
export class GhostLoadingDirective implements OnChanges {
  @Input() isLoading: boolean = false;
  @Input() isChild: boolean = false;

  constructor(private readonly elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isLoading) {
      if (this.isLoading) {
        this.elementRef.nativeElement.classList.add(this.isChild ? 'child-ghost' : 'parent-ghost');
      } else {
        this.elementRef.nativeElement.classList.remove(this.isChild ? 'child-ghost' : 'parent-ghost');
      }
    }
  }
}
