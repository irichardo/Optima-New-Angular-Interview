import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InputNumberComponent, InputTextComponent, JobPickerComponent } from 'src/app/components';
import { SearchUniversityComponent } from 'src/app/components/search-university/search-university.component';

@Component({
  selector: 'app-third-form',
  standalone: true,
  imports: [InputNumberComponent,JobPickerComponent,SearchUniversityComponent, InputTextComponent,MatButtonModule],
  templateUrl: './third-form.component.html',
  styleUrl: './../../app.component.scss',
})
export class ThirdFormComponent {

}
