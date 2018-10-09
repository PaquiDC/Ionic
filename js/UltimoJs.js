//window.onload = operacion;

//$(document).ready(init);

/*function operacion(){
    var valor = 0;
    var incremento = function(){
         return valor += 2;
    }
    valor =5;
    return incremento;
}

var ejecutar = operacion();
document.write (ejecutar()+'<br>');
document.write (ejecutar()+'<br>');
document.write (ejecutar()+'<br>');
document.write (ejecutar()+'<br>');
*/
$(document).ready(pintar);

function pintar(){

function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }
  
  var size12 = makeSizer(12);
  var size24 = makeSizer(24);
  var size36 = makeSizer(36);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-24').onclick = size24;
document.getElementById('size-36').onclick = size36;
  }
//Genera un metodo Private

/*var inicio = function(){
    var valor= 0;
    function operacion(num){
        valor +=num;
    }
    valor = 4;
    return{
        suma: function(){
            operacion(4);
        },
        pintaValor: function(){
            return valor;
        }
    }
}

var obj = inicio();
obj.suma();
//obj.operacion();
document.write(obj.pintaValor()+'<br>');
obj.suma();
document.write(obj.pintaValor()+'<br>');
obj.suma();
document.write(obj.pintaValor()+'<br>');
obj.suma();
document.write(obj.pintaValor()+'<br>');
obj.suma();*/