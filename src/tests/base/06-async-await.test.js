import'@testing-library/jest-dom';
import { getImage } from '../../base/06-async-await';

describe('Test File: 06-async-await', () => {
    test('Must return an image URL.', async () => {
        const url = await getImage();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    });
});