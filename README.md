DLT.js
================

This is a package that compute DLT (Direct Linear Transformation) matrix, which can be used
to transform points from one coordinate to another.

For details about DLT, please see https://www.cs.ubc.ca/grads/resources/thesis/May09/Dubrofsky_Elan.pdf.


## Install

```
npm install dltjs
```

## Usage

```javascript
import dlt from 'dltjs';


let p0 = [[0, 0], [0, 1], [1, 0], [1, 1]];
let p1 = [[1, 1], [1, 2], [0, 1], [2, 2]];
let M = dlt.dlt2d(p0, p1);

let p = [3, 3];
console.log(dlt.transform2d(M, p));
```

## Reference

- `dlt.dlt2d(p0, p1)`
  Given two sets of points `p0`, `p1`, solve the transform matrix which can transform points
  in `p0` to points in `p1`. Both `p0`, `p1` must contain at least 4 points (only the first 4 points will be used). Each point should be a tuple in format of `[x, y]`.
  This function will return a 3x3 matrix which contains the transforms required. The last element (`M[2][2]`) is guaranteed to be `1`.

- `dlt.transform2d(M, p)`
  Transform point `p` with matrix `M`. Point `p` should be in format of `[x, y]`.
  The input `M` is the return value from `dlt.dlt2d()` and `M[2][2]` should be `1`.
  The return value is the transformed point in format of `[x, y]`.
