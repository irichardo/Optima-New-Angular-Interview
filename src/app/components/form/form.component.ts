import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/types/types';
import { DniApiService } from 'src/app/service/dni-api.service';
import { Router } from '@angular/router';
import { FormDataService } from 'src/app/service/form-data-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss','../../app.component.scss']
})
export class FormComponent {

  data: User | undefined;
  dni = new FormControl('')
  error = {
    status: false,
    message: ''
  }



  constructor(private myServices: DniApiService, private router: Router, public formService:FormDataService) { }

  onSubmit(event: Event) {
    event.preventDefault()
    try {
      const dni = Number(this.dni.value);
      console.log(dni)
      if (isNaN(dni)) throw new Error('Por favor solo ingresa números.')
      this.myServices.getUserDNI(dni).subscribe(user => {
        this.data = user
      }, error => {
        this.error.message = 'Por favor introduce un DNI valido.';
        this.error.status = true
      })
    }
    catch (error: any) {
      console.error('Error', error.message)
      this.error.message = error.message
      this.error.status = true
    }
  }

  redirectTo(event:Event){
    event.preventDefault()
    this.router.navigate(['form2'])
  }


}
