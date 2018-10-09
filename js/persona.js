window.onload= init;
window.addEventListener('load', function(){

});

var x=' Adios';
const y = 5;
if (x){
    let x = 'Hola';
    console.log(x);
}
console.log(x);

function init(){
    document.getElementById('boton1').onclick =pintaAmarillo;

function pintarAmarillo(){
    alert('accede al mensaje');
}
  

}

class Persona{

    constructor(nombre, apellido, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
    introducirPersona(){

        return 'la persona introducida es: ' + this.nombre + this.apellido+ ' y su domicilio es: ' + this.direccion;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, direccion, departamento , salario){
        super (nombre, apellido, direccion);
        this.departamento = departamento;
        this.salario = salario;
    }
    crearEmpleado(){
        return 'Se ha creado el empleado '+ this.nombre+ this.apellido+ ' en el departamento '+this.departamento+', con un salario de: '+ this.salario ;
    }
}

var persona1= new Persona ('Jorge ','Clemente ','c/ Concepcion Avila 4 Atico ');
var persona2= new Persona ('Paqui ', 'Diaz ', 'c/ Almazan 33 9ºC ');
var empleado1= new Empleado ('Ana ', 'Contreras ', 'c/ Pozo de los Palos 48 ','informática','1800€');
var empleado2= new Empleado ('Carmen ','Seco ','c/ Julio Palacios 47 1ºB ','financiera','1200€');


console.log(persona1.introducirPersona());
console.log(persona1);
console.log(persona2.introducirPersona());
console.log(empleado2.crearEmpleado());
console.log(empleado1.crearEmpleado());