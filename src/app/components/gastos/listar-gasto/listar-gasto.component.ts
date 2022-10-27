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

  constructor(private _presupuestoService: PresupuestoService) {
    this.subcription = this._presupuestoService.getGastos().subscribe(data => {
      console.log(data)
    });
  };

  ngOnInit(): void {
  };

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }

};
