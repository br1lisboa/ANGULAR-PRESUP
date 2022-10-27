import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
  }
}
