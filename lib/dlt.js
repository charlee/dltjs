import math from 'mathjs';


/**
 * See this paper for more about DLT.
 * https://www.cs.ubc.ca/grads/resources/thesis/May09/Dubrofsky_Elan.pdf
 */

const dltjs = {

    /**
     * Create transformation matrix from given point pairs.
     * @param {array} p0 Original points. At least 4 points must be given.
     * @param {array} p1 Transformed points. At least 4 points must be given.
     */
    dlt2d: (p0, p1) => {

        if (p0.length < 4 || p1.length < 4) {
            throw new Error('At least 4 point pairs must be given.')
        }

        let H = [], B = [];
        for (let i = 0; i < 4; i++) {
            let [x, y, u, v] = [p0[i][0], p0[i][1], p1[i][0], p1[i][1]];
            H.push([x, y, 1, 0, 0, 0, -x * u, -y * u]);
            H.push([0, 0, 0, x, y, 1, -x * v, -y * v]);
            B.push(u);
            B.push(v);
        }

        let M = math.lusolve(H, B);
        M.push(1);
        return math.reshape(H, [3, 3]);
    },

    /**
     * Transform point p with matrix M.
     * @param {array} M 3x3 matrix.
     * @param {array} p point with format of [x, y].
     */
    transform2d: (M, p) => {

        if (M[8] !== 1) {
            M = math.divide(M, M[8]);
        }

        let p0 = [p[0], p[1], 1];
        let p1 = math.multiply(M, p0);
        p1 = math.divide(p1, p1[2]);

        return [p1[0], p1[1]];
    }
};

export default dltjs;