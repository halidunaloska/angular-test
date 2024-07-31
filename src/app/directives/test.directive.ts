import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTest]',
  standalone: true
})
export class TestDirective implements OnInit {
  constructor(private element:ElementRef) { 

  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @Input() color: string

  @HostListener("click")
  handleClick(){
    alert("click event")
  }

  @HostBinding("style.color")
  textColor: string = "white";
}
