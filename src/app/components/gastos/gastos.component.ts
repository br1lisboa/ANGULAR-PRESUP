import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  // Interpoklacion var publics y privadas
  // presupuesto = 0

  constructor(private _presupuestoService: PresupuestoService, private _router: Router) { }

  ngOnInit(): void {
    if (this._presupuestoService.presupuesto === 0) {
      this._router.navigate(['/ingresarPresupuesto'])
    };
    // this.presupuesto = this._presupuestoService.presupuesto; //> Solo a fines educativos o para yo aplicar
    console.log(this._presupuestoService.presupuesto)
  };

};
