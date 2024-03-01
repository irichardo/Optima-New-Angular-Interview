import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-second-form',
  standalone: true,
  imports: [CommonModule,MatDatepickerModule,DatePickerComponent, MatFormFieldModule, MatNativeDateModule],
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss','../../app.component.scss']
})
export class SecondFormComponent {

}
