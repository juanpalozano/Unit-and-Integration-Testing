import'@testing-library/jest-dom';
import heroes from '../../data/heroes.js';
import { getHeroById } from '../../base/04-import-export.js';
import { getHeroesByOwner } from '../../base/04-import-export.js';

describe('Test File: 04-import-export.js', () => {
    test('Must return a hero by id.', () => {
        const id = 1;
        const hero = getHeroById(id); 
        const heroDefault = heroes.find(heroDefault => heroDefault.id === id);
        expect(hero).toEqual(heroDefault);
    });
    test('Must return undefined if the hero do not exist.', () => {
        const id = 100;
        const hero = getHeroById(id); 
        expect(hero).toBe(undefined);
    });
    test('Must return an array by owner', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heroesDefault = heroes.filter(heroDefault => heroDefault.owner === owner);
        expect(heroes).toEqual(heroesDefault);
    });
    test('Must return an array by length', () => {
        const owner = 'Marvel';
        const heroesLength = getHeroesByOwner(owner).length;
        const heroesDefaultLength = heroes.filter(heroDefault => heroDefault.owner === owner).length;
        expect(heroesLength).toBe(heroesDefaultLength);
    });
});