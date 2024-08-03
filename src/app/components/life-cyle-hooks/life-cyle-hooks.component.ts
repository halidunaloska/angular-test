import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cyle-hooks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './life-cyle-hooks.component.html',
  styleUrl: './life-cyle-hooks.component.css'
})
export class LifeCyleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges")
  }
  ngOnInit(): void {
    console.log("onInit")
  }
  ngDoCheck(): void {
    console.log("doCheck")
  }
  ngAfterContentInit(): void {
    console.log("afterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("afterContentCheck")
  }
  ngAfterViewInit(): void {
    console.log("afterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("afterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("onDestroy") 
  }
}
