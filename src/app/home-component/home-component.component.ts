import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceServiceService } from '../empleados-service-service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private miServicio: ServicioEmpleadosService, private empleados:EmpleadosServiceServiceService){
    this.empleadosArray=this.empleados.empleados;
  }

  ngOnInit(): void {
  }

  titulo = 'Listado de Empleados';

  empleadosArray:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del Empleado "+miEmpleado.nombre+" Apellidos del Empleado "+miEmpleado.apellido);
    this.empleados.agregarEmpleadoService(miEmpleado);
  }

  cuadroNombre:String="";
  cuadroApellido:String="";
  cuadroCargo:String="";
  cuadroSalario:number=0;

}
