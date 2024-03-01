import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-message-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-page-component.component.html',
  styleUrls: ['./error-page-component.component.scss']
})
export class ErrorMessageComponent {
  constructor(private route:Router){}

  redirectToHome(event:Event){
    event.preventDefault()
    this.route.navigate([''])
  }
}
