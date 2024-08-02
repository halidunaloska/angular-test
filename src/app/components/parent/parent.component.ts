import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  data: any = "merhaba component 1";
  data2: any;
  event(obj: any) {
    console.log(obj)
  }

  event2(obj: any){
    this.data2 = obj;
  }
}
