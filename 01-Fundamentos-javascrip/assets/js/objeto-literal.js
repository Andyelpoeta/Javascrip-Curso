  // Objetos literales

  let personajeHolliwood = {
        nombre: 'Cristiano Ronaldo',
        codeName: 'El bicho',
        vivo:false,
        edad: 35,
        coord:{
          latitud: 1.3459,
          longitud: -234589,
        },
        trajes:['Armanic', 'Luiss vuton', 'Versache', 'Tommy Hielfierd'],
        direccion:{
           zip: 'calle 55 bn # 22-54',
           ubicacion:'Los Colorados',
           provincia: 'Bucaramanga',
        }
        
  }

  console.log(personajeHolliwood);

  console.log('Nombre :',personajeHolliwood.nombre)
  console.log('Nombre :',personajeHolliwood['nombre'])
  console.log('trajes :',personajeHolliwood.trajes[3])
  console.log('coordenadas :',personajeHolliwood.coord.latitud)
  console.log('#Trajes',personajeHolliwood.trajes.length)
  console.log('Ultimo traje',personajeHolliwood.trajes[personajeHolliwood.trajes.length-1] )

  //Mas detalles de los arreglos
  delete personajeHolliwood.edad // Con este comando delete eliminaremos la propiedad seleccionada
  console.log('La persona eliminada es :',{personajeHolliwood})

  const entriPares = Object.entries(personajeHolliwood) /*Esta funcion nos permite cambiar nuestro objeto a arreglo
  en pares de valores clave y valor osea 0:1*/
  console.log(entriPares)

  const mostrarPropiedades = Object.getOwnPropertyNames(personajeHolliwood) //Mostrar propiedades de mi objeto
  console.log(mostrarPropiedades)

  let congelada = Object.freeze(personajeHolliwood) //Esta funcion nos permite congelar nuestro objeto a arreglo
  console.log(congelada)

  console.log(Object.isFrozen(personajeHolliwood)) // Esta funcion nos permite saber si dicho objeto esta congelado

  let mostrarValores = Object.values(personajeHolliwood) //Esta funcion nos permite mostrar los valores del objeto
  console.log(mostrarValores)
