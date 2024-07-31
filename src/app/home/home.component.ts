import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestDirective } from '../directives/test.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, TestDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  header: string = "Oska Yazılım"
  name: string = "Halid Ünal";
  disabled: boolean = true;
  btnBgColor: string = "red";
  @Input() title: string;
  names: string[] = ["Halid","İbrahim","Ege","Serdar","Dinçer"]
  bgGreenStyle: any = {'background-color': 'green'}
  bgRedClass: string  = "bgRed"
}
