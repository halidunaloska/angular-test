import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  header: string = "Oska Yazılım"
  name: string = "Halid Ünal";
  disabled: boolean = true;
  btnBgColor: string = "red";
  @Input() title: string;
}
