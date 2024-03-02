import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements OnInit {
  formGroup:FormGroup;
  ngOnInit() {
    this.formGroup = new FormGroup({
        text: new FormControl<string>('')
    });
     this.formGroup.get('text')?.valueChanges.subscribe((value) => {
      console.log('Nuevo valor:', value);
    });
}
}
