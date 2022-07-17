import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;
  

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [""];

  agregarCatecterisca(nuevaCaracteristica: string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
  
}
