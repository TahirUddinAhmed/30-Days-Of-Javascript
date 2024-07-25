// Task 7: Install a third-party module (e.g., axios)
// using npm, import and use this module to make 
// a network request in a script. 

import axios from 'axios';

// console.log(axios);
const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
    try {
        const response = await axios.get(url);
        
        const data = await response.data;
    
        console.log(data);
    } catch(err) {
        console.error('Err: ', err.message);
    }
}

getData();

const post = {
    title: 'Hello There',
    body: 'Hello everyone, I am Tahir Uddin Ahmed',
    userId: 1
}

async function postData() {
    try {
        const response = await axios.post(url, post);
        const data = await response.data;
        
        console.log(data);
    } catch(err) {
        console.error('Err: ', err.message);
    }
    
}

postData();