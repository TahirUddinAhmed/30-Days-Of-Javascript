// Task 3
const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');

    if(name.value == '' || email.value == '') {
        console.log('All fields are required');
    } else {
        const obj = {
            name: name.value,
            email: email.value
        }
        localStorage.setItem('user', JSON.stringify(obj));

        name.value = '';
        email.value = '';

        
    }
})

const getUser = JSON.parse(localStorage.getItem('user'));
// console.log(getUser);
const display = document.querySelector('#activity2');

for(user in getUser) {
    const li = document.createElement('LI');
    li.append(getUser[user])

    display.appendChild(li);
}

// Task 4
const getData = localStorage.getItem('username');
console.log(`Log item before removing from localStorage -`);
console.log(getData);
localStorage.removeItem('username');