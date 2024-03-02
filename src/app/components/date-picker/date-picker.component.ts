import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() name: string;
  @Input() mandatory: boolean = false;
  @ViewChild('picker') picker: MatDatepicker<Date>;

  selectedDate: Date;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: ['', Validators.required],
    });
  }

  // saveData() {
  //   console.log(this.form.value);
  // }

  // onDateChange(date: any) {
  //   this.selectedDate = date;
  // }

  logName(event: Event) {
    event.preventDefault()
    console.log(this.name)
    console.log(this.mandatory)
  }
}
