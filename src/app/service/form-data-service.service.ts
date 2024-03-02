import { Injectable } from '@angular/core';
import { Formulario } from '../components/types/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  user: Formulario;

  constructor(private fb: FormBuilder) {
    this.form1 = this.fb.group({
      firs_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      city:['',[Validators.required,Validators.minLength(3)]]
    })
    console.log(this.form1);
    this.form2 = this.fb.group({})
    this.form3 = this.fb.group({})
  }
}
