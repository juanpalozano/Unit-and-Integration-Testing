import'@testing-library/jest-dom';
import heroes from '../../data/heroes.js';
import { getHeroByIdAsync } from '../../base/05-promises.js';
import { getHeroesByOwner } from '../../base/04-import-export.js';

describe('Test File: 05-promises', () => {
    test('Must return a hero by id async.', (done) => {
        const id = 1;
        const heroDefault = heroes.find(heroDefault => heroDefault.id === id);
        getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroDefault);
                done();
            });
    });
    test('Must return an error if hero do not exists.', (done) => {
        const id = 10;
        getHeroByIdAsync(id)
            .catch(error => {
                expect(error).toBe('The requested hero do not exist.');
                done();
            });
    });
});