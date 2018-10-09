 

function tabla (num) {
var nr =parseInt(document.getElementById("nr").value);
nr=parseInt(nr);
 
document.write("<table border='1'>");
 
var x=0;
 
for (x = 1; x <= 10; x++) {
 for (y=1; y<=10; y++){
  tab=5*x;
document.write("<tr><td>");
document.write("5x"+x+"="+ tab + "<br>");
document.write("</td></tr>");
}
document.write("<br>");
}
 
  document.write("</table>");
 
 
}

 function parImpar(valor)
                  {
      var valor=parseInt(document.getElementById("valor").value);
      var tipo=(valor%2)?"Impar":"Par";
      document.getElementById("resultado").innerHTML="El numero "+valor+" es "+tipo;
      return false;
                  }

      var c =parseInt(document.getElementById("valor").value);
             var j = 2;
             var numeroPrimo = [];
            for (; j < c; j++) {
              if (primo(j)) {
              numeroPrimo.push(j);
                }
            }

  function numeroPrimo (){
       var numero = document.getElementById('numero').value;
       for (var i = 2; i < numero; i++) {
           if (numero % i === 0) {
           return false;
            }
           }
         return numero !== 1;
           }

function jugadores(){
            var edad;
               edad=parseInt(document.getElementById("edad").value);
                    switch (edad)
                    {
                    case 5:
                    edad = "Prebenjamines";
                    break;
                    case 6:
                    edad = "Prebenjamines";
                    break;
                    case 7:
                    edad = "Prebenjamines";
                    break;
                    case 8:
                    edad = "Benjamines";
                    break;
                    case 9:
                    edad = "Benjamines";
                    break;
                    case 10:
                    edad = "Alevines";
                    break;
                    case 11:
                    edad = "Alevines";
                    break;
                    case 12:
                    edad = "Infantiles";
                    break;
                    case 13:
                    edad = "Infantiles";
                    break;
                    case 14:
                    edad= "Cadetes";
                    break;
                    case 15:
                    edad= "Cadetes";
                    break;
                    case 16:
                    edad = "Juveniles";
                    break;
                    case 17:s
                    edad = "Juveniles";
                    break;
                    case 18:
                    edad = "Juveniles";
                    break;
                    default:
                    edad = "ERROR";
                   }
}
function zodiaz(){
switch(mes) {   
  case 1: 
    if (dia>=21)
      document.write("Acuario");
    else
      document.write("Capricornio");        
    break;
  case 2:
    if (dia>=20)
      document.write("Piscis");
    else
      document.write("Acuario");
    break;
    case 3:
    if (dia>=21)
      document.write("Aries");
    else
      document.write("Piscis");
    break;
    case 4:
    if (dia>=22)
      document.write("Tauro");
    else
      document.write("Aries");
    break;
    case 5:
    if (dia>=23)
      document.write("Geminis");
    else
      document.write("Tauro");
    break;
     case 6:
    if (dia>=22)
      document.write("Cancer");
    else
      document.write("Geminis");
    break;
     case 7:
    if (dia>=23)
      document.write("Leo");
    else
      document.write("Cancer");
    break;
     case 8:
    if (dia>=22)
      document.write("Virgo");
    else
      document.write("Leo");
    break;
     case 9:
    if (dia>=23)
      document.write("Libra");
    else
      document.write("Virgo");
    break;
     case 10:
    if (dia>=20)
      document.write("Escorpio");
    else
      document.write("Libra");
    break;
     case 11:
    if (dia>=20)
      document.write("Sagitario");
    else
      document.write("Escorpio");
    break;
     case 12:
    if (dia>=20)
      document.write("Capricornio");
    else
      document.write("Sagitario");
    break;

}
function sem(){
    var numeroEnCifras, dia;

         dia = parseInt (dia);

         if (numeroEnCifras == 1)
         {
            dia = "Lunes";
         } else if (numeroEnCifras == 2) {
            dia = "Martes";
         } else if (numeroEnCifras == 3) {
            dia = "Miércoles";
         } else if (numeroEnCifras == 4) {
            dia = "Jueves";
         } else if (numeroEnCifras == 5) {
            dia = "Viernes";
         } else if (numeroEnCifras == 6) {
            dia = "Sábado";
         } else if (numeroEnCifras == 7) {
            dia = "Domingo";
         } else {
            dia = "ERROR";
         }
       }

  function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
     }else{
       alert('Dni correcto');
     }
  }else{
     alert('Dni erroneo, formato no válido');
   }
}