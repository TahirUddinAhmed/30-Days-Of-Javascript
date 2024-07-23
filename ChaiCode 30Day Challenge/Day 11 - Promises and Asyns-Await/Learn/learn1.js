const sayHi = function(){
    console.log('Tahir Ahmed');
}
const changeText = function() {
    document.querySelector('h1').innerHTML = 'Learning Javascript'
}

setTimeout(sayHi, 2000);
const changeMe = setTimeout(changeText, 2000);

// clearTimeout(Reference of the setTimeout);
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe);
    console.log('stop');
});

