import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosServiceServiceService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }

  empleados:Empleado[]=[

    new Empleado("Juan", "Diaz","Presidente", 7500),
    new Empleado("Miguel", "Sanches","Albañil", 4500),
    new Empleado("Maria", "Salazar","Programadora", 9500),
    new Empleado("CSamilo", "Pardo","Ingeniero", 1500),

  ];

  agregarEmpleadoService(miEmpleado: Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va ha agregar: "+"\n"+miEmpleado.nombre+"\n"+"Salario: "+miEmpleado.salario)
    this.empleados.push(miEmpleado);
  }

  encontrarEmpleado(indices:number){
    let empleado:Empleado=this.empleados[indices];

    return empleado;
  }

  actualizarEmpleadoService(indice:number, empleado:Empleado){
    let empleadoModificado=this.empleados[indice]
    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;
  }

  eliminarEmpleadoService(indice:number){
    this.empleados.splice(indice,1);
  }
}
