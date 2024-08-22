// Local Storage
// Task 1 
localStorage.setItem('username', 'Tahirahmed');
console.log(localStorage.getItem('username'));

// Task 2
const obj = {
    'id': 123,
    'emp_no': 'emp_543',
    'name': 'John'
}
localStorage.setItem('Emp', JSON.stringify(obj));

const getObj = JSON.parse(localStorage.getItem('Emp'));

console.log(getObj);


