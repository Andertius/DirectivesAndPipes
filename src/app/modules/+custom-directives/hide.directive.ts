import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appHide]'
})
export class HideDirective implements OnChanges {
    @Input() appHide: boolean;

    constructor(private readonly templateRef: TemplateRef<any>, private readonly viewContRef: ViewContainerRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.appHide) {
            if (this.appHide) {
                this.viewContRef.clear();
            } else {
                this.viewContRef.createEmbeddedView(this.templateRef);
            }
        }
    }
}
