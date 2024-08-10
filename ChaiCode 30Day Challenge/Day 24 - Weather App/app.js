// api key 
const api_key = 'ba35c3e1f79ca6361eb283285e9953bb';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

// search 
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.querySelector('#search');

    if(searchInput.value === '') {
        console.log('Please enter your city name');
    } else {
        checkWeather(url, searchInput.value);
        searchInput.value = '';
    }
});

async function checkWeather(url, location = 'Delhi') {
    try {
        const response = await fetch(url + `&appid=${api_key}&q=${location}`);
        if(!response.ok) {
            throw new Error(`ERROR: status code ${response.status}`);
        }
        const data = await response.json();
        
        document.querySelector('.temp').innerHTML = `${data.main.temp} &deg C`;
        document.querySelector('.temp-name').innerHTML = data['weather'][0].main;
        document.querySelector('.CityName').innerHTML = data.name;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} KM/h`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.real-feel').innerHTML = `${data.main.feels_like} &deg; C`;
        
        // time and date 
        updateCityTime(data.timezone);
    } catch(e) {
        console.error('Error: ', e);
    }
}

function updateCityTime(timezoneOffset) {
    const now = new Date();
    const localTime = new Date(now.getTime() + timezoneOffset * 1000);
    
    const year = localTime.getFullYear();
    const month = String(localTime.getMonth()).padStart(2, '0'); // Months are 0-based
    const day = String(localTime.getDate()).padStart(2, '0');

     // Convert month index to month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[Math.floor(month)];

    const formattedDate = `${day - 1} ${monthName} ${year}`;

    document.querySelector('.date').innerHTML = `Date: ${formattedDate}`;

}


checkWeather(url);