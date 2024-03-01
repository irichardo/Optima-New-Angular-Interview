import { Routes } from '@angular/router';
import { ErrorPageComponent ,FormSectionComponent,LandingComponent,SecondFormPageComponent } from './modules';

export const routes: Routes = [
    {path:'', component:LandingComponent},
    {path:'form', component:FormSectionComponent},
    {path:'form2', component:SecondFormPageComponent},
    {path:'**', component:ErrorPageComponent}
];
