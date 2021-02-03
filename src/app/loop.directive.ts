import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appLoop]'
})
export class LoopDirective {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }

  @Input('appLoop') set render(steps: number) {
    this.viewContainerRef.clear(); // to start fresh

    for (let step = 0; step < steps; step++) {
      // to create new element: this.viewContainer.createEmbeddedView()
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index: step});
    }

  }

}
