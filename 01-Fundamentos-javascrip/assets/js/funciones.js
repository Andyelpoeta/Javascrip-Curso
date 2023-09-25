// Estos son los tipos de funciones   que existen 
function nombre() {
    console.log("Es es desde una funcion")
}
nombre()

let lito = function() {

    console.log("Es una DE LA 2 funcion")
}
lito()



// Los parentesis en esta funcion son opcionales pero es buena practica ponerlos
const todoLoPuedo = (nombre1) =>{
    console.log("Bienvenido: " + nombre1)
}
let nombre1 = prompt('Como te llamas')
todoLoPuedo(nombre1)

const getaleatorio = () => Math.floor(Math.random() * 100);

console.log(getaleatorio())
    
