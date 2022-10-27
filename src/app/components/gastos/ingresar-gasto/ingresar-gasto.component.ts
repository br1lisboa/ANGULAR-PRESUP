import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formIncorrecto: boolean;
  textIncorrect: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formIncorrecto = false;
    this.textIncorrect = ''
  };

  ngOnInit(): void {
  };

  agregarGasto() {

    if (this.cantidad > this._presupuestoService.restante) {
      this.formIncorrecto = true;
      this.textIncorrect = 'Cantidad ingresada es mayor al restante'
      return
    }

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formIncorrecto = true
      this.textIncorrect = 'Nombre gasto o cantidad incorrecta'
      return
    } else {

      // crear el obj con el nombre del gasto y la cantidad
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }


      // enviar el obj a los suscrip x subject
      this._presupuestoService.agregarGasto(GASTO);


      // reset form

      this.formIncorrecto = false
      this.nombreGasto = ''
      this.cantidad = 0
    }

  };

};
