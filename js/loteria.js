
window.onload = init;

function init(){
    document.getElementById('resultado').onclick=muestraFecha;
    document.getElementById('boton1'.onclick=generador);

}
function generador(){
    var combinacion= [];
    var i=0;
    var generado = false;

do{
     var numeroAleatorio=parseInt( Math.rambdom () *49)
     for (i=0; i<= combinacion.length ; i++){
         if(combinacion[i]==numeroAleatorio){
             generado=true;
             break;
         }
     }
     if(generado == false){
         combinacion[combinacion.length]=numeroAleatorio;
     }
     generador==false;

    }while(combinacion.length<6);
        document.getElementById(resultado).innerHTML=combinacion;        
    }

            




