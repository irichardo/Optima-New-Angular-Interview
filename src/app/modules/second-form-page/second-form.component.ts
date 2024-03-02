import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPickerComponent, SecondFormComponent } from 'src/app/components/index';
import { InputTextComponent } from 'src/app/components/input-text/input-text.component';
import { InputNumberComponent } from 'src/app/components/input-number/input-number.component';

@Component({
  selector: 'app-second-page-form',
  standalone: true,
  imports: [CommonModule, SecondFormComponent,JobPickerComponent, InputTextComponent, InputNumberComponent],
  templateUrl: './second-form-page.component.html',
  styleUrls: ['./second-form-page.component.scss']
})
export class SecondFormPageComponent {

}
