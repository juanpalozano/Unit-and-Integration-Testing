// Object Destructuring
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    location: {
      lat: 15.55,
      long: 34.44
    }
  }
  
  //const { nombre:valorPersonalizado }  = persona;
  //console.log(valorPersonalizado);
  
  const { nombre, edad, clave } = persona;
  console.log(nombre, edad, clave);
  
  const returnUser = ({nombre, edad, clave, location, equipo = 'avengers'}) => {
    return {
      codeName: nombre,
      team: equipo,
      location: location
    }
  }
  const {codeName, team, location:{lat, long}} = returnUser(persona);
  
  console.log(codeName, team, lat, long);