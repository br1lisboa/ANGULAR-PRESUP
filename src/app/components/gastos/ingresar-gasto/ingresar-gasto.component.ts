import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formIncorrecto = false;
    this.textIncorrect = 'Nombre gasto o cantidad incorrecta'
  };

  ngOnInit(): void {
  };

  agregarGasto() {

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formIncorrecto = true
    } else {
      this.formIncorrecto = false
      this.nombreGasto = ''
      this.cantidad = 0
    }

  };

};
