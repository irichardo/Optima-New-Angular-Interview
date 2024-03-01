import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondFormComponent } from 'src/app/components/index';

@Component({
  selector: 'app-second-page-form',
  standalone: true,
  imports: [CommonModule, SecondFormComponent],
  templateUrl: './second-form-page.component.html',
  styleUrls: ['./second-form-page.component.scss']
})
export class SecondFormPageComponent {

}
