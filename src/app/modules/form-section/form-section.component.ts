import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from 'src/app/components';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent {

}
