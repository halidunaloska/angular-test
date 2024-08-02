import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit{
  ngOnInit(): void {
    this.child2Event.emit("Child2 Event Data");
  }

  @Output() child2Event: EventEmitter<any> = new EventEmitter();  
}
