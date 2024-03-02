import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { InputNumberComponent, InputTextComponent, JobPickerComponent } from 'src/app/components';
import { SearchUniversityComponent } from 'src/app/components/search-university/search-university.component';


@Component({
  selector: 'app-third-form',
  standalone: true,
  imports: [InputNumberComponent,JobPickerComponent,SearchUniversityComponent, InputTextComponent,MatButtonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './third-form.component.html',
  styleUrl: './../../app.component.scss',
})
export class ThirdFormComponent {

  formGroup:FormGroup;
  constructor(private fb: FormBuilder) {
  }

 
  sendForm() {
    // console.log(this.form.value)
    // if (this.form.valid) {
    //   console.log(this.form.value);
    // }
  }

}
