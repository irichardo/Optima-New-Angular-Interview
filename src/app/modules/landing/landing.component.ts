import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
