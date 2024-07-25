// Activity 1: Creaating and Exporting modules 
// Task 1: 
import { add } from './modules/task1.js';

console.log('==== Task 1 =====');
console.log(add(2, 5));

// Task 2
import { Person } from './modules/task2.js';
console.log('==== Task 2 =====');
console.log(Person);
console.log(Person.showDetails());

// Task 3: Named Import
import { sum, sub, mul, div } from './modules/task3.js';

console.log('==== Task 3 =====');
console.log(sum(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));
console.log(div(5, 2));

// Task 4: Default export, import
import whoami from './modules/task4.js';

console.log('==== Task 4 =====');
console.log(whoami())

// Task 5: export entire module as objects 
import * as myObj from './modules/task5.js';

console.log('==== Task 5 =====');
console.log(myObj);
console.log(`Height: ${myObj.height}`);
console.log(`Width: ${myObj.width}`);
console.log(`Area: ${myObj.area()}`);
console.log(`Perimeter: ${myObj.perimeter()}`);
console.log(`Perimeter2: ${myObj.perimeter(7, 5)}`);

