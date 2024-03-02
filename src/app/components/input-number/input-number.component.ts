import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [InputNumberModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  formGroup : FormGroup
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      year:['',Validators.nullValidator]
    })
  }
  onSubmit(){
    console.log(this.formGroup.value)
  }
}
