import { Injectable } from '@angular/core';
import { datos } from '../mock/datos';
import { inicial } from '../mock/inicial';
import { Capitulo } from '../model/capitulo';
import { Introduccion } from '../model/introduccion';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datos: Capitulo[] = datos;
  introduccion: Introduccion = inicial;

  constructor() { }

  getDatos() : Capitulo[] {
    return this.datos;
  }

  getIntro() : Introduccion {
    return this.introduccion;
  }
}
