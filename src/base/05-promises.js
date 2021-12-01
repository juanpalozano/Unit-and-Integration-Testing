import { getHeroById } from "./04-import-export";
import { getHeroesByOwner } from "./04-import-export";

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    const randomTimer = Math.floor(Math.random() * 1500) + 500;
    setTimeout(() => {
      const hero = getHeroById(id);
      (hero) ? resolve(hero) : reject('The requested hero do not exist.');
    }, randomTimer);
  });
}