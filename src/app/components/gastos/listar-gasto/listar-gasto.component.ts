import { Component, OnInit, OnDestroy } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {
  subcription: Subscription;
  presupuesto: number;
  restante: number;
  listarGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;

    this.subcription = this._presupuestoService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listarGastos.push(data)
      
    });
  };

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto
    this.restante = this._presupuestoService.restante
  };

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }

};
