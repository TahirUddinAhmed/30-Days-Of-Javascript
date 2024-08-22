// generate random colors 
const randomColors = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const colorCode = document.querySelector('#ColorCode');

let intervalId; 
let colorIntervalId;

// change background color 
const changeBgColor = function() {
    let code = document.body.style.backgroundColor = randomColors();
    
    return code;
}

const getColorText = function() {
    colorCode.innerHTML = changeBgColor();
}

const startChangeColors = function() {
    if(!intervalId && !colorIntervalId) {
        intervalId = setInterval(changeBgColor, 1000);
        colorIntervalId = setInterval(getColorText, 1000);  
    }
}
const stopChangeColors = function() {
    if(intervalId && colorIntervalId) {
        clearInterval(intervalId);
        clearInterval(colorIntervalId)
        intervalId = null; // deferencing thee intervalId 
        colorIntervalId = null;
    }
}

start.addEventListener('click', startChangeColors);
stop.addEventListener('click', stopChangeColors);

