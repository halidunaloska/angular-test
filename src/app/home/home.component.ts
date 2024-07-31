import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestDirective } from '../directives/test.directive';
import { CustomIfDirective } from '../directives/custom-if.directive';
import { CustomForDirective } from '../directives/custom-for.directive';
import { CustomPipePipe } from '../pipes/custom-pipe.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, TestDirective, CustomIfDirective, CustomForDirective, CustomPipePipe],
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
