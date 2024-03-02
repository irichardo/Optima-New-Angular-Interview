import { Component, NgModule, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatePickerComponent } from '../date-picker/date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

interface universityName{
  name:string
}

@Component({
  selector: 'app-second-form',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, DatePickerComponent, MatFormFieldModule, MatNativeDateModule, AutoCompleteModule, FormsModule,ReactiveFormsModule,
    MatButtonModule],
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss', '../../app.component.scss']
})
export class SecondFormComponent{
  constructor( private router: Router) { }

  redirectTo(event:Event){
    event.preventDefault()
    this.router.navigate(['form3'])
  }
}
