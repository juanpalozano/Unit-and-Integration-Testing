import'@testing-library/jest-dom';
import { getUser } from '../../base/02-functions.js';
import { getActiveUser } from '../../base/02-functions.js';

describe('Test File: 02-functions.js', () => {
    
    // Test getUser
    test('getUser. Must return: An object with id: 4560 and a username: Brucewayne1981', () => {
        const defaultUser = {
            id: 4560,
            username: 'Brucewayne1981',
        }
        const user = getUser();
        expect(user).toEqual(defaultUser);
    });

    // Test getActiveUser.
    test('getActiveUser. Must return: An object with id: 4560 and a username: param username or Ana1984', () => {
        const username = 'George';
        const defaultUser = {
            id: 4561,
            username: username,
        }
        const activeUser = getActiveUser(username);
        expect(activeUser).toEqual(defaultUser);
    });

    // Test getActiveUser default params.
    test('getActiveUser default params. Must return: An object with id: 4561 and a username: param username or Ana1984', () => {
        const defaultUser = {
            id: 4561,
            username: 'Ana1984',
        }
        const activeUser = getActiveUser();
        expect(activeUser).toEqual(defaultUser);
    });
});