
/*function iniciar() {

var persona = {
    nombre: 'Paqui',
    apellidos: 'Díaz',
    telefono: 675964248,
    email: 'correo@servidor.com',
    anoNacimiento: 1987,
    edad: function () {
        return (2018 - persona.anoNacimiento);
    }
    function cargarTabla{
        document.getElementById('jsTable').innerHTML = '<td>' + persona.nombre + '</td>'
    }


document.getElementById('d1').innerHTML = persona.nombre;
document.getElementById('d2').innerHTML = persona.apellidos;
document.getElementById('d3').innerHTML = persona.telefono;
document.getElementById('d4').innerHTML = persona.email;
document.getElementById('d5').innerHTML = persona.anoNacimiento;
document.getElementById('d6').innerHTML = persona.edad();

*/



//Modificar una frase introducida

function iniciar() {
    let palabra = document.getElementById('frase').value;
    document.getElementById('resultado').innerHTML = '<p>' + palabra + '</p>';
}

function reemplazar() {
    let palabra = document.getElementById('frase').value;
    let palabra_comillas = '\'' + palabra + '\'';
    document.getElementById('resultado').innerHTML = '<p>' + palabra_comillas + '</p>';
}

function mayusculas() {
    let palabra = document.getElementById('frase').value;
    let mayusculas = palabra.toUpperCase();
    document.getElementById('resultado').innerHTML = '<p>' + mayusculas + '</p>';
}

function minusculas() {
    let palabra = document.getElementById('frase').value;
    let minusculas = palabra.toLowerCase();
    document.getElementById('resultado').innerHTML = '<p>' + minusculas + '</p>';
}

function concatenar() {
    let palabra = document.getElementById('frase').value;
    let cita = 'Cita: '
    let concatenacion = cita.concat(palabra);
    document.getElementById('resultado').innerHTML = '<p>' + concatenacion + '</p>';
}

// Primera y última palabra de una frase
function mostrarPrime() {
    var texto = document.getElementById('contarpalabr').value;
    var arrayTexto = texto.split(' ')
    document.getElementById('resultadoPalabra').innerHTML= arrayTexto[0];
}

function mostrarUlti() {
    var texto = document.getElementById('contarpalabr').value;
    var arrayTexto = texto.split(' ')
    document.getElementById('resultadoPalabra').innerHTML= arrayTexto[arrayTexto.length-1];

}

//Muestra el número de caracteres que tiene la frase introducida.
function contarCaracteres() {
    var palabra = document.getElementById('contarLetras').value;
    var longitud = palabra.length;
    document.getElementById('resulContarCaracteres').innerHTML = `<p>La frase tiene ${longitud} caracteres</p>`;
}

//Sustituye los espacios en blanco por guiones de una frase introducida
function sustituirEspacios() {
    let palabra = document.getElementById("contarvocal").value;
    palabra = palabra.replace(/\s/g, '-');
    document.getElementById("resulSustituirEspacios").innerHTML = `<p> ${palabra} </p>`;
}

// Muestra un texto introducido al revés
function mostrarAlReves() {
    var palabra = document.getElementById('textoReves').value;
    palabra = palabra.split('').reverse('').join(''); // Convierte en un array de letras y espacios la frase
   // Le damos la vuelta al array
   // Lo juntamos 
    console.log(palabra);
    document.getElementById('resulMostrarAlReves').innerHTML = `<p> ${palabra} </p>`;
}

// Mostrar  un número introducido: en entero, con 1 decimal, con 2 decimales y con el símbolo del Euro.
function convertirEntero() {
    let numero = parseInt(document.getElementById('introNumero').value);
    numero = numero.toPrecision(1);
    document.getElementById('resulConvertirNumero').innerHTML = numero;
}

function convertirUnDecimal() {
    let numero = parseInt(document.getElementById('introNumero').value);
    numero = numero.toFixed(2);
    document.getElementById('resulConvertirNumero').innerHTML = numero;
}

function convertirDosDecimal() {
    let numero = parseInt(document.getElementById('introNumero').value);
    numero = numero.toFixed(3);
    document.getElementById('resulConvertirNumero').innerHTML = numero;

}

// Contar el número de vocales  que tiene un texto.
function contarVocales() {
    let vocales = document.getElementById('contarVocales').value;
    let pattern1 = /[aeiou]/g;
    vocales = vocales.match(pattern1);
    let longitud = vocales.length;
    document.getElementById('resulContarVocales').innerHTML = longitud + ' vocales ';

}

// Contar el número de consonantes que tiene un texto.
function contarConsonantes() {
    let consonantes = document.getElementById("contarConsonan").value;
    let pattern1 = /[bcdfghjklmnñpqrstvwxyz]/g;
    consonantes = consonantes.match(pattern1);
    let longitud = consonantes.length;
    document.getElementById('resulContarConsonantes').innerHTML = longitud + ' consonantes ';
}

// Contar el número de veces que aparece cada letra.
function contarVeces() {
    textoArea = document.getElementById("contarLetrasVeces").value;
    numeroCaracteres = texto.length;
    textoAreaDividido = textoArea.split(" ");
    numeroPalabras = textoAreaDividido.length;
    primerBlanco = /^ /
    ultimoBlanco = / $/
    variosBlancos = /[ ]+/g
    texto = texto.replace(variosBlancos, " ");
    texto = texto.replace(primerBlanco, "");
    texto = texto.replace(ultimoBlanco, "");
    textoTroceado = texto.split(texto, " ");
    numeroPalabras = textoTroceado.length;
    document.getElementById('resulContarVeces').innerHTML = numeroPalabras + ' se repine ';
}

window.addEventListener("load", iniciar);