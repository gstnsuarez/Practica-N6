function Usuario(nombre, usuario, email, password) {
  // Crea una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase 
  // Tu código:
    this.usuario = nombre;
    this.nombre = usuario;
    this.email = email;
    this.password = password;
   
        this.saludar = function(){
          return 'Hola, mi nombre es ' + this.nombre ;
        }
    
}

var p1 = new Usuario('gaston', 'usu', 'asd', 123);
console.log(p1);
console.log(p1.saludar());


function datosPersona() { 
  // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
  // Los datos, son nombre, apellido y dni
  // Tu código:
  this.nombre = 'gaston';
  this.apellido = 'suarez';
  this.dni = 123;
}

var p1 = new datosPersona();
var p2 = new datosPersona();
console.log(p1);
console.log(p2);



function Default(nombre, apellido, dni) { 
  // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
  // Los datos, son nombre, apellido y dni
  // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
  // Tu código:
  this.nombre = nombre || "JORGE"
  this.apellido = apellido || "RIOS"
  this.dni = dni || "321"
}
var p3 = new Default();
var p4 = new Default();
console.log(p3);
console.log(p4);

function Computador(id, marca, procesador, ram, ssd) { 
  // Deben crear una funcion constructora
  // Los datos son, id, marca, procesador, ram, ssd.
  // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
  // La funcion debe estar echa dentro de la funcion constructora.
  // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
  // Tu código:
  this.id = id;
  this.marca= marca;
  this.procesador = procesador;
  this.ram = ram;
  this.ssd = ssd;
  
  console.log("la computadora esta iniciando espere un momento");
  console.log(".")
  console.log("..")
  console.log("...")

  this.informacion = function(){
    return 'La computadora es la numero :' + this.id +'\n marca :'+ this.marca+ '\n procesador :'+this.procesador+'\n ram :'+this.ram+'\n el disco es de :'+ this.ssd;
      }

  }




var compu  = new Computador (1, 'lg', 'amd', 8, 512); 
console.log(compu.informacion());
