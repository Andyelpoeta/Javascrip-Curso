

// Esto es un comentario no lo vera el cliente sera para guia del programador
// console.log("Hola mundo")



// Variables 

// La variable es un espacio reservado en memoria para dicho elemento


var uno =23; // Tipo de la variable que ya casi no se usa

let dos = 34; //Varible actualmente usada

const tres = 66; // Variable que no se puede modificar

let modelo = "Corsa",  // Podemos color esta forma de variables
    color = "Negro",
    anio = 2020,
    precio = 100000,
    placas ="pqb-34r"
    saludo1="Bienvenido",
    saludo2="gracias por visitarnos"


console.log(modelo,color,anio,precio,placas) // Mostramos las variables por consola

console.log({saludo1},{saludo2}) // Mostramos las variables y se nos mostrara como un objeto con su valor al lado



console.table({modelo,color,anio,precio,placas,saludo1,saludo2}) // Esto nos mostrara en una table en el navegador