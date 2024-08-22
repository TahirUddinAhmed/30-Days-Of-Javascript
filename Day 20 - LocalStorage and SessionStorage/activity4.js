// Task 7
const form = document.querySelector('#form1');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name1');
    const email = document.querySelector('#email1');

    if(name.value == '' || email.value == '') {
        console.log('All fields are required!');
        return;
    } else {
        const obj = {
            name: name.value,
            email: email.value
        }

        sessionStorage.setItem('user', JSON.stringify(obj));

        name.value = '';
        email.value = '';
    }
});

const display = document.querySelector('#activity4');
const getData = JSON.parse(sessionStorage.getItem('user'));

for(key in getData) {
    const li = document.createElement('LI');
    li.append(getData[key]);

    display.appendChild(li);
}

// Task 8
sessionStorage.setItem('age', 21);
console.log(sessionStorage.getItem('age'));
sessionStorage.removeItem('age');