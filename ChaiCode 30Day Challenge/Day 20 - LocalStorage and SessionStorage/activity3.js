// Session Storage 
// Task 5
sessionStorage.setItem('color', 'yellow');
console.log(sessionStorage.getItem('color'));

// Task 6
const obj = {
    name: 'Tahir Ahmed',
    age: 21,
    email: '01tahirahmed@gmail.com',
    languages: ['C, C++, JAVA, PHP, JAVASCRIPT']
}

sessionStorage.setItem('user', JSON.stringify(obj));

const getData = JSON.parse(sessionStorage.getItem('user'));

console.log(getData);