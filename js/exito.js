var promise  = new Promise ( function(resolve, fracaso){
    const valor = 5;
    if (valor == 5){
        resolve ();
    }else{
        fracaso();
    }
})

promise.then(function(resolver){
    console.log('Éxito1');
}, function( fracaso){
    console.log('Error de lectura');
})