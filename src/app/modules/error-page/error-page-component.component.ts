import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from 'src/app/components/index';

@Component({
  selector: 'app-error-page-component',
  standalone: true,
  imports: [CommonModule, ErrorMessageComponent],
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.scss']
})
export class ErrorPageComponent {

}
