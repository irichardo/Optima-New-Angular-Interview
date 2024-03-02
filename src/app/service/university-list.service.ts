import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityListService {

  constructor() { }
  getData() {
    return [
      { name: 'Universidad Cesar Vallejo' },
      { name: 'Universidad del Pacifico' },
      { name: 'Universidad Nacional ingenieria'},
      { name: 'Instituto Tecsup'},
      { name: 'Instituto IDAT'},
      { name: 'Universidad San Marcos'},
      { name: 'Universidad San Ignacion de la Oyola'},
      { name: 'Universidad de Lima'},
      { name: 'Universidad San Martin de Porres'},
      { name: 'Universidad de Callao'},
      { name: 'Universidad Ricardo Palma'},
      { name: 'Universidad Cayetano Heredia'},
      { name: 'Universidad de las Americas'},
    ]
  }

  getUniversityList(){
    return Promise.resolve(this.getData())
  }
}

