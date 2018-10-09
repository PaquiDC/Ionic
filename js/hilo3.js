window.onload= datos;



function datos(){
       this.empresa='Cruzado',
       this.direccion='Getafe',
        this.metodo= function(){
            return 'Bienvenido a empresa '+this.empresa;
        }
       
        }

    var pepe= Object.create(datos);

    pepe.nombre= 'Pepe';
    pepe.salario=25000;
/*
    var juan =Object.create(datos);
    juan.salario= 23000;

    var andres ={coche: 'Seat'};

    console.log('El trabajador '+ pepe.nombre + ' pertenece a la empresa ' + pepe.empresa);

    console.log(pepe);
    console.log(juan);
    console.log(andres);
    console.log (datos.isPrototypeOf(pepe));
    console.log(datos.isPrototypeOf(andres));

}*/
    var obj = new datos();
    obj.salario = 10000;
    console.log(obj);

    var obj1= new datos();
    obj1.nombre='Juan';
    obj1.empresa='Jimenez';

    console.log(obj);
    console.log(obj1);

        var obj2 = new datos();
        console.log(obj2.metodo());


    /*var juanito = {
        nombre:'Juanito',
        apellido: 'Mate',
        puesto: 'Diseño',
            
            }
    var saluda = 'Hola';
saluda.texto();
    pepe.funcion();
    juanito.funcion();
    //console.log(pepe.texto());
    //console.log(pepe.funcion());
    console.log(pepe.funcion());
    console.log(juanito.funcion());
    console.log(saluda.texto());
    }
    */
