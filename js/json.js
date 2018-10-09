window.onload=init;
function init(){

    document.getElementById('boton').onclick = crearJson;

}

function crearJson(){
    var nombre =[];
    var apellido = [];
    var ciudad = [];
    var persona =[];
    
    
    nombre [0] = 'Paqui';
    nombre [1]= 'Carmen';
    nombre [2]= 'Antonio';

    apellido [0]= 'Díaz';
    apellido [1]= 'Seco';
    apellido [2]= 'Lozano';

    ciudad [0]= 'Málaga';
    ciudad [1]= 'Madrid';
    ciudad [2]= 'Almería';

    for (let i=0; i<nombre.length; i++){
        persona.push({
            'nombre':nombre[i],
            'apellido':apellido[i],
            'ciudad':ciudad[i]
        });
    }
    console.log(persona);
    var objeto ={}
    objeto.persona=persona;
    console.log(JSON.stringify(objeto));

    for (let i=0 ; i<3; i++){
        console.log('La persona se llama '+persona[i].nombre);
        console.log('La persona se apellida '+persona[i].apellido);
        console.log('La persona es de  '+persona[i].ciudad);
    }
   
}