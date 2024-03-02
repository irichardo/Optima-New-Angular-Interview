import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [InputNumberModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {
  formGroup : FormGroup
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      year: new FormControl<Number|null>(null)
  });
  }
}
