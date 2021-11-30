// Array Destructuring
const characters = ['Ironman', 'The Hulk', 'Black Widow', 'Vision'];

const [ TonyStark ] = characters;
//console.log(TonyStark);

const [ , BruceBanner ] = characters;
//console.log(BruceBanner);

const [ , , NatashaRomanof ] = characters;
//console.log(NatashaRomanof);

const [ , , , Jarvis ] = characters;
//console.log(Jarvis);

export const returnArray = () => {
  return ['ABC', 123];
}

const [letras, numero] = returnArray();
//console.log(letras, numero);

// Tarea
const myuseState = (valor) => {
  return [ valor, () => { console.log('Hola Mundo'); }];
}

const arr = myuseState('Ironman');
//console.log(arr);
//arr[1]();

const [nombre, setNombre] = arr;
//console.log(nombre)
setNombre();