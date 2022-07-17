import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceServiceService } from '../empleados-service-service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio: ServicioEmpleadosService, private empleados:EmpleadosServiceServiceService) { }

  ngOnInit(): void {
  }

  empleadosArray:Empleado[]=[];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del Empleado "+miEmpleado.nombre+" Apellidos del Empleado "+miEmpleado.apellido);
    this.empleados.agregarEmpleadoService(miEmpleado);
    this.volver()
  }

  cuadroNombre:String="";
  cuadroApellido:String="";
  cuadroCargo:String="";
  cuadroSalario:number=0;

  volver(){
    this.router.navigate(['']);
  }

}
