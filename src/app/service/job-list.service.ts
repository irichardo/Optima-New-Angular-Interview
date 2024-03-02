import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  constructor() { }

  getData() {
    return [
      { name: 'Fallabella' },
      { name: 'Amazon' },
      { name: 'Google'},
      { name: 'Mercado Libre'},
      { name: 'Banco de la Nacion'},
      { name: 'BCP'},
      { name: 'Aeropuerto'},
      { name: 'UpWork'},
      { name: 'Cantante Independiente'},
      { name: 'Museo de Arte'},
      { name: 'Ripley'},
      { name: 'Plaza Norte'},
      { name: 'Mega Plaza'},
    ]
  }

  getJobBusinessList(){
    return Promise.resolve(this.getData())
  }
}
