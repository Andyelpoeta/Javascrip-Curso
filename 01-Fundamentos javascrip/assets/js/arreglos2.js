//Array 2

const array2 = ['coman','strfither','pacman','cool'];
console.log(`Totals: ${array2.length}`)//Contamos cuantos elementos tiene mi array

let primero = array2[ 2-2 ]
let ultimo =  array2[ array2.length - 1 ] // Aqui mostraremos el ultimo elemento de array

console.log(`primero: ${primero}`)
console.log(`Ultimo: ${ultimo}`)


array2.forEach((elemnto,indice,array) => {// funcion que nos permite recorrer el array
        console.log({elemnto,indice,array})
})

let posicionEliminada = array2.slice(1 ,2);
console.log({posicionEliminada})




let nuevalongity = array2.push('contra') // ingresa un elemento de ultimo en orden acendente
console.log({nuevalongity})
console.log( 'El array nuevo es',{nuevalongity} )


let newlongitud = array2.unshift("Hela wordl") // este metodo nos permite guardar un elemento en nuestro array en la primera posicisioin
console.log('Elemento que pasa ala 1mera posicion',{newlongitud,array2}) 



let elementoborrado = array2.pop()// Borra el ultimo elemento del arra
console.log('El ultimo elemento borrado es:',{elementoborrado,array2})

let indicedeElemento = array2.indexOf('pacman'); // esta metodo nos permite saber cual es el indice del elemento que estamos pidiendo
console.log({indicedeElemento})



let totalArray = array2;
console.log({totalArray})
