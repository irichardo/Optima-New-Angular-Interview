import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
        text:['',Validators.required]
    })
    //  this.formGroup.get('text')?.valueChanges.subscribe((value) => {
    //   console.log('Nuevo valor:', value);
    // });
}
onSubmit(){
  console.log(this.form.value)
}
}
