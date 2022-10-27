import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  // Interpoklacion var publics y privadas
  // presupuesto = 0

  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    // this.presupuesto = this._presupuestoService.presupuesto; //> Solo a fines educativos o para yo aplicar
    console.log(this._presupuestoService.presupuesto)
  }

}
