const dltjs = require('../dist/dlt');

describe('dlt2d', () => {

    it('should compute the correct matrix given 4 point pairs', () => {

        const p0 = [ [0, 0], [1, 0], [0, 1], [1, 1]];
        const p1 = [ [1, 3], [2/4, 5/4], [3/4, 1], [4/7, 6/7] ];

        const M = dltjs.dlt2d(p0, p1);
        expect(M[0][0]).toBeCloseTo(1, 4);
        expect(M[0][1]).toBeCloseTo(2, 4);
        expect(M[0][2]).toBeCloseTo(1, 4);
        expect(M[1][0]).toBeCloseTo(2, 4);
        expect(M[1][1]).toBeCloseTo(1, 4);
        expect(M[1][2]).toBeCloseTo(3, 4);
        expect(M[2][0]).toBeCloseTo(3, 4);
        expect(M[2][1]).toBeCloseTo(3, 4);
        expect(M[2][2]).toBeCloseTo(1, 4);

    });

});