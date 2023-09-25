let a = 10;
let b =a;
a = 30
console.log({a,b});


// En este ejemplo los objetos son pasados por referencia 
let juan ={nombre:'Ricardo'}
let ana = {juan}

ana.nombre ='Ana'
console.log({juan,ana})

const cambiarNombre = ({...person}) =>{
    person.nombre = 'Juan Valdez';
    return person;
}

let Peter = {nombre: 'Peter'}
let JuanValdez = cambiarNombre(Peter);

console.log({Peter,JuanValdez})

const frutas = ['Mora','Peranza','Frambuesa','Uva'];

console.time('Spred')
let nuevaFruta = [...frutas]
console.timeEnd('Spred')

console.time('Slice')
let nuevaFruta2 = frutas.slice();
console.timeEnd('Slice')


nuevaFruta.push('Ciruela');
console.table({ frutas,nuevaFruta })


//Aqui observaremos que dura mas tiempo un slice o un 




