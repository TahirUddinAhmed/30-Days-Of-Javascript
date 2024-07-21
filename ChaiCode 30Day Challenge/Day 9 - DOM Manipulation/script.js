// Day 9
// Activity 1: Selecting and manipulating elements
const text = document.getElementById('text1');
const text2 = document.getElementsByClassName('text2');

text.innerHTML = "Hello, everyone. I am Tahir";


for(let i = 0; i < text2.length; i++) {
    text2[i].style.backgroundColor = 'blue';
    text2[i].style.color = '#fff';
}

// activity 2: Creating and Appending elements 

// Creating elements 

const div = document.createElement("div");
div.innerText = "This is activity 2 - Task 3";
// append elements
document.body.appendChild(div);

// Task 4
const ul = document.querySelector('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.textContent = 'Mango';
li2.textContent = 'Apple';


ul.append(li1, li2);


// Activity 3
// task 5
const para = document.querySelector('#para');
para.remove();
// Task 6
const parent = document.querySelector('#parent');

const lastChild = parent.lastElementChild;
lastChild.remove();

// Activity 4
const link = document.querySelector("#link");

link.setAttribute('href', 'https://bookbinmorigaon.com/');

// Task 8
const box1 = document.querySelector('.box');
const box2 = document.querySelector('.box-2');
box1.classList.add('box-design');
box2.classList.remove('box-2');


// Activity 5
const change = document.querySelector('#change');

change.addEventListener('click', function() {
    change.innerHTML = "I Love Javascript";
});


// Task 10
const magic = document.querySelector("#magic");

magic.addEventListener('mouseover', function() {
    magic.style.border = '1px solid red';
});


