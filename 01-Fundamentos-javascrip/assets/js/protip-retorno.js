 
// Protip para codigo mas limpio
 
 const objetoCarro = {
    marca: 'Ford',
    modelo: 'Mustang',
    // ano: 2020,
    placa:'edr-v56',

 }

 const carro = ({marca,modelo,ano = 2030,placa})=>{
        return{
        marca,
        modelo,
        ano,
        placa}
 }

 console.log(carro(objetoCarro))

 