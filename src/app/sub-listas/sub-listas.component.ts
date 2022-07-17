import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-sub-listas',
  templateUrl: './sub-listas.component.html',
  styleUrls: ['./sub-listas.component.css']
})
export class SubListasComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  

  agregarCatecteriscas(value: string){
    this.miServicio.muestraMensaje("la caracteristica es "+value)
    this.caracteristicasEmpleados.emit(value);
  }

}
