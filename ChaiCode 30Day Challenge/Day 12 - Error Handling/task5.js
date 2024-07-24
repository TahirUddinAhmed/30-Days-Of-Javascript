// Task 5
const myForm = document.querySelector('#myForm');

myForm.addEventListener('submit', function(e) {
    e.preventDefault();
   const name = document.querySelector('#fullname');

  
   try {
    if(name.value == '') {
        throw new Error('Full Name is required');
    } else {
        console.log(name.value)
        document.querySelector('.err').innerHTML = '';
    }
   } catch(err) {
    document.querySelector('.err').innerHTML = err;
   }
});