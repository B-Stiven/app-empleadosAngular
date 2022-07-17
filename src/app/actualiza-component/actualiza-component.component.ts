import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosServiceServiceService } from '../empleados-service-service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio: ServicioEmpleadosService, private empleados:EmpleadosServiceServiceService, private route:ActivatedRoute){ }

  accion:number;

  ngOnInit(): void {
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleados.encontrarEmpleado(this.indice);

    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario
  }

  empleadosArray:Empleado[]=[];

  actualizarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del Empleado "+miEmpleado.nombre+" Apellidos del Empleado "+miEmpleado.apellido);
    this.empleados.actualizarEmpleadoService(this.indice, miEmpleado);
    this.volver()
  }

  eliminarEmpleado(){
    this.empleados.eliminarEmpleadoService(this.indice);
    this.volver()
  }

  ejecutarTarea(){
    if(this.accion==1){
      this.actualizarEmpleado()
    }else{
      this.eliminarEmpleado()
    }
  }

  cuadroNombre:String="";
  cuadroApellido:String="";
  cuadroCargo:String="";
  cuadroSalario:number=0;

  indice:number;
  volver(){
    this.router.navigate(['']);
  }
}
