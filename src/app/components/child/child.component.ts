import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    this.childEvent.emit({message: "Hi!"})
  }
  @Input() parentData: any;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();
  @Input() child2Data: any;
}
