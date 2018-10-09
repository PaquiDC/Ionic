


function suma( n1, n2,llamada){
    llamada(n1+n2);
}

function multiplicar(resultado,n2, llamada2){
    llamada2(resultado * n2);
}

function resta(n1,n2, llamada3){
    llamada3 ( n1-n2);
}

function cuadrado ( n1, llamada4){
    llamada4(n1*n1);
}

function dividir(n1, n2, llamada5){
    llamada5(n1/n2);
}

function par(divide, n1, llamada6){
    llamada6(divide%n1);
}

function backLlamadaSuma (resultado){
    console.log(resultado);
    multiplicar(resultado,2,backMultiplicar);
}
function backMultiplicar (n1){
    console.log(n1);
    resta (n1,3,backResta);
}
function backResta (n1){
    console.log(n1);
    cuadrado (n1,backCuadrado);
}

function backCuadrado (n1){
    console.log(n1);
    dividir (n1,3,backDividir);
}

function backDividir (n1){
    console.log(n1);
    par (n1,3,backPar)
}

function backPar (n1){
    if(n1 == 0){
        console.log( 'es par');
     }else{
        console.log( 'es impar');
     }    
}
suma(2,1,backLlamadaSuma);

// suma (5,2, function(resultado){
//     console.log(resultado);
   
//     multiplica(resultado, function(multiplicacion){
//         console.log(multiplicacion)

//         resta(multiplicacion, function(resta){
//             console.log(resta);

//             cuadrado(resta, function(elevado){
//                 console.log(elevado);

//                 dividir(elevado,function(divide){
//                     console.log(divide);

//                     par (divide, function(n1){
//                         if(n1 == 0){
//                             console.log( 'es par');
//                         }else{
//                             console.log( 'es impar');
//                         }
//                     })
//                 });
//             });
//         });
//     });
// });

