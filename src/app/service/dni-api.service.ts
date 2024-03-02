import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { User } from '../types/types';
import { FormDataService } from './form-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class DniApiService {

  constructor(private http:HttpClient, private setFormDataService:FormDataService) { }
  getUserDNI(dni:number):Observable<any>{
    const dniResult = this.http.get<User>(`${environment.API_URL}/${dni}`)
    return dniResult
  }
}
