import heroes from '../data/heroes';

// Get Hero by Id.
export const getHeroById = (id) => heroes.find((hero) => hero.id === id);

// Get Hero by Owner.
export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);