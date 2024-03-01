import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { User } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DniApiService {

  constructor(private http:HttpClient) { }
  getUserDNI(dni:number):Observable<any>{
    return this.http.get<User>(`${environment.API_URL}/${dni}`)
  }
}
