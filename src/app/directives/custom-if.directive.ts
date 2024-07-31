import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
  standalone: true
})
export class CustomIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  //same with selector name
  @Input() set appCustomIf(value: boolean){
    if(value){
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainerRef.clear();
    }
  }
}
