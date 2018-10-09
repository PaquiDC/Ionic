window.onload= inicio;

Object.prototype.funcion = function() {
    document.write('Hola ' + this.nombre + ' ' + this.apellido + ' tu puesto es : ' + this.puesto + '<br>');
}
String.prototype.texto = function(){
    console.log('He creado una función')
}

function inicio(){
    var pepe = {
        nombre:'Aitor',
        apellido: 'Tilla',
        puesto: 'Admin',
        
        }
    var juanito = {
        nombre:'Juanito',
        apellido: 'Mate',
        puesto: 'Diseño',
            
            }
    var saluda = 'Hola';
saluda.texto();
    pepe.funcion();
    juanito.funcion();
    //console.log(pepe.texto());
    //console.log(pepe.funcion());
    console.log(pepe.funcion());
    console.log(juanito.funcion());
    console.log(saluda.texto());
    }
