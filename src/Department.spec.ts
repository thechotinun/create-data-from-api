import { calculateAgeRange } from './utils/calculateAgeRange';

describe('calculateAgeRange', () => {
    it('21-43', async () => {
        expect(await calculateAgeRange([21, 22, 43])).toBe('21-43');
    });
    it('22-50', async () => {
        expect(await calculateAgeRange([42, 22, 50])).toBe('22-50');
    });
    it('19-45', async () => {
        expect(await calculateAgeRange([33, 22, 45, 19])).toBe('19-45');
    });
});