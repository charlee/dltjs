DLT.js
================

This is a package that compute DLT (Direct Linear Transformation) matrix, which can be used
to transform points from one coordinate to another.


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
