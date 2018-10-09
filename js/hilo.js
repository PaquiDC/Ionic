window.onload=init;
function padre(){
    var nombre= 'Andres';

    var datos2 = function hijo(){
        console.log(nombre);
    }
    function hijo (){
       console.log(nombre);
    }
    nombre = 'aitor';
    return datos2;
}
var llamada = padre();
console.log(llamada);
llamada();

function init(){
    Object.prototype.saludar = function(){
        console.log('Hola soy '+this.nombre);
    }
    class Prueba{
        constructor(){}
    }
    class Prueba2{
        constructor(){}
    }

    var aitor={
        nombre:'Aitor',
        apellido:'Tilla'
    }
    var juan={
        nombre:'Juanito',
        apellido:'Mate'
    }

    console.log(Object.hasOwnProperty('saludar'));

    aitor.saludar();
    juan.saludar();
    

    //var clss = classF1();
    //var instancia = new classF1();
    
//     var clss = new Prueba();
//     var array = new Array();
//     var array2=[];
//     var instancia;
//     var objeto= {
//         'nombre': 'Paqui',
//         'apellido' : 'Díaz'
//     }
//     var dato='string';
//     var dato1= 1;

//     console.log(clss instanceof Prueba);
//     console.log(clss instanceof Object);
//     console.log(instancia instanceof Object);
//     console.log(objecto instanceof Object);
//     console.log(objeto instanceof Prueba);
    
//     //console.log(dato instanceof 'string');

//     document.getElementById('boton').onclick = hilo;

// }
// function hilo(){
//    var promesa = new Promise (function(resolve,reject){

//     var n1= parseInt(document.getElementById('numero1').value);
//     var n2= parseInt(document.getElementById('numero2').value);
//     var datos=[];

//     if (!isNaN (n1)&& !isNaN(n2)){
//         console.log('numeros validos');
//        datos[0]= n1;
//        datos[1]=n2;
//        resolve(datos);
//     }else{
//         reject('Error en los datos');
//     }
//  })
//  promesa.then(suma)
//  .then(multiplicar)
//  .then(dividir)
//  .then(function ( info ) {
//      console.log(info);
//  }, function (errores) {
//      console.log("nuevo texto" + errores) ;
//  })
// }


//  function suma( datos){
//     var n1 = parseInt( datos[0]);
//     var n2 = parseInt(datos[1]);
//     console.log(n1+n2);
//     return (n1+n2);
    
// }

// function multiplicar ( resultado) {
//     console.log(resultado);
//     return resultado * resultado ;
// }
    
    
// function dividir(resultado) {
//     console.log(resultado);
//      return (parseInt(resultado/3));
// 
}
