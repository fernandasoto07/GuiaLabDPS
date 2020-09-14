class Empleado{
    nombre : string
    salario : number
    constructor( nombre:string, salario:number ){
        this.nombre = nombre
        this.salario = salario
      }

      get_salarioNeto(){
        var salarioNeto:number;
        var afp:number = 0.0725;
        var iss:number = 0.03;
        salarioNeto = (this.salario-(this.salario*afp)-(this.salario*iss));
        return salarioNeto; 

    }
}

    let empleado01 = new Empleado("Fernanda",1000);

console.log("Nombre del Empleado: "+empleado01.nombre);
console.log("Salario base: $"+empleado01.salario);
console.log("Salario Neto: $"+empleado01.get_salarioNeto());

console.log("PRUEBA");