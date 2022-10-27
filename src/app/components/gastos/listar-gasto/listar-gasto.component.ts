import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {

  constructor(private _presupuestoService: PresupuestoService) {
    this._presupuestoService.getGastos().subscribe(data => {
      console.log(data)
    });
  };

  ngOnInit(): void {
  };

};
