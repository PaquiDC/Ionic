/**
 * Metodo que pintara en pantalla la tabla de multiplicar
 * 1º Leer el numero de tabla
 * 2º Verificar que numero valido: que no es una letra y que el numero es > 0 y < 11
 *  2.1º Sacar por patalla el error.
 * 3º Pintar la tabla
 */
function multiplicar() { // NaN = Not a Number

    var num = parseInt(document.getElementById('entrada').value);

    if (isNaN(num)) {
        alert('El caracter introducido no es un número');
    } else if (num < 1 || num > 10) {
        alert('Introducir un numero del 1 al 10')
    } else {
        var tabla = document.getElementById('tabla');
        var contenido = '';
        var i;
        for (i = 1; i < 11; i++) {
            contenido += '<div>' + i + ' x ' + num + ' = ' + (i * num) + '</div>';
        }
        tabla.innerHTML = contenido;
    }

}

function parImpar() {
    var num = parseInt(document.getElementById('parImpar').value);

    if (isNaN(num)) {
        alert('El caracter introducido no es un número');
    } else if (num % 2 === 0) {
        document.getElementById('poi').innerHTML = '<div>' + num + ' es par </div>';
    } else {
        document.getElementById('poi').innerHTML = '<div>' + num + ' es impar </div>';
    }
}

function primo() {

    var num1 = parseInt(document.getElementById('numeroPrimo').value);

    var NumeroPrimo=true;
 
    for(i=1;i<num1;i++)
    {
        if(num1/i == Math.round(num1/i) && i!=1 && i!=num1)
        {
            NumeroPrimo=false;
            break;
        }
    }

    if(NumeroPrimo){
        document.getElementById('prim').innerHTML='El numero ' +num1+ ' es Primo';
    }else{
        document.getElementById('prim').innerHTML='El numero ' +num1+' NO es Primo';
    }
}

function futbol() {
    var valor4 = document.getElementById('jugadores').value;
    switch(valor4) {
        case '5':
        case '6':
        case '7':
        document.getElementById('categoria').innerHTML =  'Prebenjamínes 5,6,7 años';
        break;
        case "8":
        case "9":
        document.getElementById('categoria').innerHTML = 'Benjamínes 8 y 9 años';
        break;
        case '10':
        case '11':
        document.getElementById('categoria').innerHTML = 'Alevines 10 y 11 años';
        break;
        case '12':
        case '13':
        document.getElementById('categoria').innerHTML = 'Infantiles 12 y 13 años';
        break;
        case '14':
        case '15':
        document.getElementById('categoria').innerHTML = 'Cadetes 14 y 15 años';
        break;
        case '16':
        case '17':
        case '18':
        document.getElementById('categoria').innerHTML = 'Juveniles 16,17 y 18 años';
        break;
        default:
        document.getElementById('categoria').innerHTML = 'Escriba unos años correctos';
        break;

    }

}



function trimestre(){
    var meses = document.getElementById('trime').value;
    switch (meses) {
        
        case 'Enero':
        case 'Febrero':
        case 'Marzo':
            document.getElementById('mes').innerHTML='Primer trimestre';
          break; 
        case 'Abril':
        case 'Mayo':
        case 'Junio':
          document.getElementById('mes').innerHTML='Segundo trimestre';
        break; 
        
        case 'Julio':
        case 'Agosto':
        case 'Septiembre':
          document.getElementById('mes').innerHTML='Tercer trimestre';
        break; 
        
        case 'Octubre':
        case 'Noviembre':
        case 'Diciembre':
          document.getElementById('mes').innerHTML='Cuarto trimestre';
        break; 
        
        default:
        document.getElementById('mes').innerHTML='El mes introducido no existe';
      }
}

function zodiaco() {
    var valor7 = new Date(document.getElementById('zodiac').value);
    var valor8 = valor7.toISOString();
    var valor8 = valor8.slice(5,10);
    var valor8 = valor8.replace(/-/i, "");
    console.log(valor8);
    // Le paso las opciones de mes y día, no me interesa el año
    // var options = { month: 'long', day: 'numeric' };
    // dt = new Date(valor7);
    // Esto es un ejemplo fecha.toLocaleDateString("es-ES", options)
    //valor8 = dt.toLocaleDateString("es-ES", options);
    // console.log(valor8);
    // console.log(typeof(valor8));
    // valor9 = new Date(valor8);
    if( valor8 >='0321' && valor8 <= '0420'){
        document.getElementById('zoc').innerHTML ='Eres Aries';
    } else if( valor8 >='0421' && valor8 <= '0520'){
        document.getElementById('zoc').innerHTML = 'Eres Tauro';
    } else if( valor8 >='0521' && valor8 <= '0621'){
        document.getElementById('zoc').innerHTML = 'Eres Géminis';
    } else if( valor8 >='0622' && valor8 <= '0721'){
        document.getElementById('zoc').innerHTML = 'Eres Cáncer';
    } else if( valor8 >='0722' && valor8 <= '0822'){
        document.getElementById('zoc').innerHTML = 'Eres Leo';
    } else if( valor8 >='0823' && valor8 <= '0921'){
        document.getElementById('zoc').innerHTML = 'Eres Virgo';
    } else if( valor8 >='0922' && valor8 <= '1022'){
        document.getElementById('zoc').innerHTML = 'Eres Libra';
    } else if( valor8 >='1023' && valor8 <= '1122'){
        document.getElementById('zoc').innerHTML = 'Eres Escorpio';
    } else if( valor8 >='1123' && valor8 <= '1221'){
        document.getElementById('zoc').innerHTML = 'Eres Sagitario';
    } else if( valor8 >='1222' && valor8 <= '0120'){
        document.getElementById('zoc').innerHTML = 'Eres Capricornio';
    } else if( valor8 >='0121' && valor8 <= '0218'){
        document.getElementById('zoc').innerHTML = 'Eres Acuario';
    } else if( valor8 >='0219' && valor8 <= '0320'){
        document.getElementById('zoc').innerHTML = 'Eres Piscis';
    } 
}

function codigoPostal() {
    console.log('pulsaste')
    //$('#codigo').val()  .... es igual a document,getElem....
    var codigo = document.getElementById('codPost').value;
    console.log('el valor del código es' + codigo);
    var valor10 = codigo.slice(0,2);
    switch (valor10){
        case '01':
        document.getElementById('cp').innerHTML= 'Álava';
        break;
        case '02':
        document.getElementById('cp').innerHTML= 'Albacete';
        break;
        case '03':
        document.getElementById('cp').innerHTML= 'Alicante';
        break;
        case '04':
        document.getElementById('cp').innerHTML= 'Almería';
        break;
        case '05':
        document.getElementById('cp').innerHTML= 'Ávila';
        break;
        case '06':
        document.getElementById('cp').innerHTML= 'Badajoz';
        break;
        case '07':
        document.getElementById('cp').innerHTML= 'Baleares/ Palma de Mallorca';
        break;
        case '08':
        document.getElementById('cp').innerHTML= 'Barcelona';
        break;
        case '09':
        document.getElementById('cp').innerHTML= 'Burgos';
        break;
        case '10':
        document.getElementById('cp').innerHTML= 'Cáceres';
        break;
        case '11':
        document.getElementById('cp').innerHTML= 'Cádiz';
        break;
        case '12':
        document.getElementById('cp').innerHTML= 'Castellón';
        break;
        case '13':
        document.getElementById('cp').innerHTML= 'Ciudad Real';
        break;
        case '14':
        document.getElementById('cp').innerHTML= 'Córdoba';
        break;
        case '15':
        document.getElementById('cp').innerHTML= 'Coruña';
        break;
        case '16':
        document.getElementById('cp').innerHTML= 'Cuenca';
        break;
        case '17':
        document.getElementById('cp').innerHTML= 'Gerona';
        break;
        case '18':
        document.getElementById('cp').innerHTML= 'Granada';
        break;
        case '19':
        document.getElementById('cp').innerHTML= 'Gualajara';
        break;
        case '20':
        document.getElementById('cp').innerHTML= 'Guipúzcoa';
        break;
        case '21':
        document.getElementById('cp').innerHTML= 'Huelva';
        break;
        case '22':
        document.getElementById('cp').innerHTML= 'Huesca';
        break;
        case '23':
        document.getElementById('cp').innerHTML= 'Jaén';
        break;
        case '24':
        document.getElementById('cp').innerHTML= 'León';
        break;
        case '25':
        document.getElementById('cp').innerHTML= 'Lérida';
        break;
        case '26':
        document.getElementById('cp').innerHTML= 'La Rioja';
        break;
        case '27':
        document.getElementById('cp').innerHTML= 'Lugo';
        break;
        case '28':
        document.getElementById('cp').innerHTML= 'Madrid';
        break;
        case '29':
        document.getElementById('cp').innerHTML= 'Málaga';
        break;
        case '30':
        document.getElementById('cp').innerHTML= 'Murcia';
        break;
        case '31':
        document.getElementById('cp').innerHTML= 'Navarra';
        break;
        case '32':
        document.getElementById('cp').innerHTML= 'Orense';
        break;
        case '33':
        document.getElementById('cp').innerHTML= 'Asturias';
        break;
        case '34':
        document.getElementById('cp').innerHTML= 'Palencia';
        break;
        case '35':
        document.getElementById('cp').innerHTML= 'Palmas de Gran Canarias';
        break;
        case '36':
        document.getElementById('cp').innerHTML= 'Pontevedra';
        break;
        case '37':
        document.getElementById('cp').innerHTML= 'Salamanca';
        break;
        case '38':
        document.getElementById('cp').innerHTML= 'Santa Cruz de Tenerife';
        break;
        case '39':
        document.getElementById('cp').innerHTML= "Eres de Cantabria(Santander)";
        break;
        case '40':
        document.getElementById('cp').innerHTML= 'Segovia';
        break;
        case '41':
        document.getElementById('cp').innerHTML= 'Sevilla';
        break;
        case '42':
        document.getElementById('cp').innerHTML= 'Soria';
        break;
        case '43':
        document.getElementById('cp').innerHTML= 'Tarragona';
        break;
        case '44':
        document.getElementById('cp').innerHTML= 'Teruel';
        break;
        case '45':
        document.getElementById('cp').innerHTML= 'Toledo';
        break;
        case '46':
        document.getElementById('cp').innerHTML= 'Valencia';
        break;
        case '47':
        document.getElementById('cp').innerHTML= 'Valladolid';
        break;
        case '48':
        document.getElementById('cp').innerHTML= 'Vizcaya';
        break;
        case '49':
        document.getElementById('cp').innerHTML= 'Zamora';
        break;
        case '50':
        document.getElementById('cp').innerHTML= 'Zaragoza';
        break;
        case '51':
        document.getElementById('cp').innerHTML= 'Ceuta';
        break;
        case '52':
        document.getElementById('cp').innerHTML= 'Melilla';
        break;
        default:
        document.getElementById('cp').innerHTML= 'Escribe un código que empiece por 01 , máximo 52';
    }
}


function semana(){
    var num = parseInt(document.getElementById('sem').value);
    
    switch (num) {
        case 1:
        document.getElementById('dia').innerHTML='Es Lunes';
            break;
        case 2:
        document.getElementById('dia').innerHTML='Es Martes';
            break;
        case 3:
        document.getElementById('dia').innerHTML='Es Miercoles';
            break;
        case 4:
        document.getElementById('dia').innerHTML='Es Jueves';
            break;
        case 5:
        document.getElementById('dia').innerHTML='Es Viernes';
            break;
        case 6:
        document.getElementById('dia').innerHTML='Es Sábado';
            break;
        case 7:
        document.getElementById('dia').innerHTML='Es Domingo';
            break;
        default: 
        document.getElementById('dia').innerHTML='Ese día no existe';
    }
}

function  dni() {
    var dni1 = document.getElementById('nif').value;
    var letra = dni1.slice(8).toUpperCase();
    var numero = dni1.slice(0,8);
   
    var tipoLetra = parseInt (numero%23);
    var cadenaValores= 'TRWAGMYFPDXBNJZSQVHLCKE'.split('');
    
    var letraReal=cadenaValores[tipoLetra];

    if ( letraReal ==  letra) {
       
        document.getElementById('letraCorrect').innerHTML='letra real';
    } else {
        document.getElementById('letraCorrect').innerHTML='letra NO real';
    }
}

function horaDia() {
    var valor = document.getElementById('momento').value;
    var hora = valor.slice(0,2);

    if( hora > 0 && hora <=6){
        document.getElementById('momentDia').innerHTML='madrugada';
    } else {
        if( hora >6 && hora<=12){
        document.getElementById('momentDia').innerHTML='mañana';
    } else {
        if( hora >12 && hora<= 18){
        document.getElementById('momentDia').innerHTML='tarde';
    } else {
        ( hora>18 && hora <=0)
        document.getElementById('momentDia').innerHTML='noche';
    }
}
    }
}

