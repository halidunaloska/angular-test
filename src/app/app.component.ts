import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child2Component } from './components/child2/child2.component';
import { LifeCyleHooksComponent } from "./components/life-cyle-hooks/life-cyle-hooks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ChildComponent, ParentComponent, Child2Component, LifeCyleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2) {}
  @ViewChild("h") _h: ElementRef;
  @ViewChild("p" ,{static: true}) _p: ElementRef;
  @ViewChild(LifeCyleHooksComponent, {static: true}) childComponent: LifeCyleHooksComponent;
  title = 'Home';

  ngOnInit(){
    console.log(this.childComponent); //static true
    this.renderer.setStyle(this._p.nativeElement, "color", "green")
  }

  ngAfterViewInit(){
    console.log(this._h)
  }
}
