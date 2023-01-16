# Common Library

use range loop
```
import '@silenty4ng/common';

// output: 0,1,2 ··· 8,9
for(let i of range(10)){
    console.log(i);
}

// output: 1,2,3 ··· 9
for(let i of range(1, 10)){
    console.log(i);
}

// output: 0,2,4 ··· 14,16,18
for(let i of range(0, 20, 2)){
    console.log(i);
}
```
