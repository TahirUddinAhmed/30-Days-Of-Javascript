console.log('learning modules');

// Named Import
// alias sum as add
// import {sum as add, sub, mul, div} from './calc.js';
// Default Import
// import { default as sayHi} from './whoami.js';
// import sayMyName from './whoami.js';

// namespace 
// import * as calc from './calc.js';

// combine import 
import * as combine from './Combine.js';



// console.log(calc.sum(3, 6));
// console.log(calc.sub(14, 6));

console.log(combine.calc.sum(2, 5));
console.log(combine.calc.sub(5, 2));
console.log(combine.myName());


