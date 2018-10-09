
window.addEventListener('load', init);
function init(){
    var dimeOperacion = prompt ('Indique operacion que quiere realizar');
    operacion ( dimeOperacion);
}


function operacion ( operacion){

    var n1 = parseInt(prompt ('Dime primer operando'));
    var n2 = parseInt(prompt ('Dime 2º operando'));

switch(operacion){

    case 'suma':
        var finalOp =  suma (n1 , n2);
        document.getElementById("resultado").innerHTML= 'El resultado de la '+ operacion+' es: '+ finalOp;
            break;
        case 'resta':
        var finalOp =  resta (n1 , n2);
        document.getElementById("resultado").innerHTML='El resultado de la '+ operacion+' es:' + finalOp;
            break;
        case 'multiplicacion':
        var finalOp =  multiplicacion (n1 , n2);
        document.getElementById("resultado").innerHTML= 'El resultado de la '+ operacion+' es:'+ finalOp;
            break;
        case 'division':
        var finalOp =  division (n1 , n2);
        document.getElementById("resultado").innerHTML='El resultado de la '+ operacion+' es:'+ finalOp;
            break;
    }

}

function suma (n1, n2){
    var suma = n1+n2;
    return suma;
}
function resta(n1, n2){
    var resta = n1-n2;
    return resta;
}
function multiplicacion (n1, n2){
    var multiplicacion = n1*n2;
    return multiplicacion;
}
function division (n1, n2){
    var division = n1/n2;
    return division;
}

