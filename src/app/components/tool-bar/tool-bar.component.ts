import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  constructor(private router:Router){}
 isFirstPage():boolean{
  return this.router.url === '/'
 }

 isSecondPage():boolean{
  return this.router.url === '/form2'
 }

 isThirdPage():boolean{
  return this.router.url === '/form3'
 }

 toFirstPage(input:Event){
  input.preventDefault()
  return this.router.navigate(['/'])
 }

 toSecondPage(input:Event){
  input.preventDefault()
  return this.router.navigate(['/form2'])
 }

 toThirdPage(input:Event){
  input.preventDefault()
  return this.router.navigate(['/form3'])
 }

}
