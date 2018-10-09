
var dimeOperacion = prompt ('Indique operacion que quiere realizar')



operacion ( dimeOperacion);
function operacion ( operacion){

    var dato1 = parseInt(prompt ('Dime primer operando'));
    var dato2 = parseInt(prompt ('Dime 2º operando'));

    var resultado = suma (dato1, dato2);

    console.log(resultado);
}

function suma (n1, n2){
    var suma = n1+n2;
    return suma;
}


