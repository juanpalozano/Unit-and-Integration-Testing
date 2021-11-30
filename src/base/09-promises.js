// Promesas
import { getHeroeById } from "./bases/08-import-export";
import { getHeroesByOwner } from "./bases/08-import-export";
/*
const promise = new Promise( (res, rej) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    res(heroe);
  }, 2000);
});

promise.then((heroe) => {
  console.log('Heroe', heroe);
})
.catch(e => console.warn(e));
*/

const getHeroeByIdAsync = (id) => {
  return new Promise( (res, rej) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if(heroe) res(heroe);
      else rej('No existe el heroe solicitado');
    }, 2000);
  });
}
getHeroeByIdAsync(1)
  .then(heroe => console.log(heroe))
  .catch(e => console.warn(e));
/*
getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn);
*/