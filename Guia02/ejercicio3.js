var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.get_salarioNeto = function () {
        var salarioNeto;
        var afp = 0.0725;
        var iss = 0.03;
        salarioNeto = (this.salario - (this.salario * afp) - (this.salario * iss));
        return salarioNeto;
    };
    return Empleado;
}());
var empleado01 = new Empleado("Fernanda", 1000);
console.log("Nombre del Empleado: " + empleado01.nombre);
console.log("Salario base: $" + empleado01.salario);
console.log("Salario Neto: $" + empleado01.get_salarioNeto());

