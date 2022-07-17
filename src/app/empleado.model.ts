export class Empleado{

    constructor(nombre:String,apellido:String,cargo:String,salario:number){

        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;

    }

    nombre:String="";
    apellido:String="";
    cargo:String="";
    salario:number=0;
}