const dltjs = require('../dist/dlt').default;

describe('dlt2d', () => {

    let p0, p1;
    
    beforeEach(() => {
        p0 = [ [0, 0], [1, 0], [0, 1], [1, 1]];
        p1 = [ [1, 3], [2/4, 5/4], [3/4, 1], [4/7, 6/7] ];
    });

    it('should compute the correct matrix given 4 point pairs', () => {
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

    it('should raise error if less than 4 points are given', () => {
        expect(() => dltjs.dlt2d(p0, []))
            .toThrowMatching(thrown => thrown.message.indexOf('At least 4 point pairs') > -1);
    });
});

describe('transform2d', () => {

    let M;

    beforeEach(() => {
        M = [[1, 2, 1], [2, 1, 3], [3, 3, 1]];
    });

    it('should transform point with matrix', () => {
        const p = dltjs.transform2d(M, [3, 4]);
        expect(p[0]).toBeCloseTo(12/22, 4);
        expect(p[1]).toBeCloseTo(13/22, 4);
    });
});