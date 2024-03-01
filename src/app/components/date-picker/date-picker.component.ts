import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule,MatDatepickerModule,MatFormFieldModule, MatNativeDateModule,MatInputModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() name:string;
  @Input() mandatory:boolean = false;
  constructor(){
  }
  logName(event:Event){
    event.preventDefault()
    console.log(this.name)
    console.log(this.mandatory)
  }
}
