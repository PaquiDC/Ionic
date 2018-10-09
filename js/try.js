window.onload=init;
function init(){

    document.getElementById('boton').onclick = sumaNumero;

}
function sumaNumero(){
    try{

    var n1= parseInt(document.getElementById('numero1').value);
    var n2= parseInt(document.getElementById('numero2').value);

    var resultado = n1+n2;
    
    if (isNaN (n1)|| isNaN(n2)){
        throw "No válido"
    }

    document.getElementById('resultado').innerHTML= resultado;

    }catch (error){
    document.getElementById('resultado').innerHTML= "Introduzca un número";
    }
}