// api key 
const api_key = 'ba35c3e1f79ca6361eb283285e9953bb';
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const geoApi = 'https://api.openweathermap.org/geo/1.0/direct?limit=5';
const fiveDaysUrl = 'https://api.openweathermap.org/data/2.5/forecast?&units=metric';


// search 
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchInput = document.querySelector('#search');

    if(searchInput.value === '') {
        console.log('Please enter your city name');
    } else {
        checkWeather(url, searchInput.value);
        getGeoLocation(geoApi, searchInput.value);
        searchInput.value = '';
    }
});

/**
 * Check Weather Function
 * @param {api_key} url 
 * @param {string} location 
 */
async function checkWeather(url, location = 'Guwahati') {
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
        

        updateCityTime(data.timezone);
    } catch(e) {
        console.error('Error: ', e);
    }
}

/**
 * Get Geo Location 
 * @param {api_key} url 
 * @param {string} city cityName
 */
async function getGeoLocation(url, city = 'Guwahati') {
    const response = await fetch(url + `&appid=${api_key}&q=${city}`);
    const data = await response.json();
    const lat = data[0].lat;
    const lon = data[0].lon;

    getFiveDaysWeather(fiveDaysUrl, lat, lon);
    todayWeather(fiveDaysUrl, lat, lon);

}

getGeoLocation(geoApi);

/**
 * Update Date according to city name
 * @param {*} timezoneOffset 
 */
function updateCityTime(timezoneOffset) {
    const now = new Date();
    const localTime = new Date(now + timezoneOffset * 1000);
    
    const year = localTime.getFullYear();
    const month = String(localTime.getMonth()).padStart(2, '0'); // Months are 0-based
    const day = String(localTime.getDate()).padStart(2, '0');

     // Convert month index to month name
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[Math.floor(month)];

    const formattedDate = `${day} ${monthName} ${year}`;

    document.querySelector('.date').innerHTML = `Date: ${formattedDate}`;

}


checkWeather(url);

/**
 * Hourly Weather 
 * @param {api_key} url 
 * @param {number} lat lattitude
 * @param {number} lon longtitude
 */
async function todayWeather(url, lat = 26.2491, lon = 92.3476) {
    const response = await fetch(url + `&appid=${api_key}&lat=${lat}&lon=${lon}`);
    const data = await response.json();

    // console.log(data);
    const list = data.list;
    const today = new Date().toLocaleDateString();

    const todayData = list.filter(item => {
        // console.log(item);
        const itemDate = new Date(item.dt_txt).toLocaleDateString();

        return itemDate == today;
    });
    let mainCard = document.querySelector('.hourly-card');
    mainCard.innerHTML = '';
    todayData.forEach(element => {
        const date = new Date(element.dt_txt);
        let hours = date.getHours();
        let ampm;
        if(hours >= 12) {
            ampm = 'PM';
            if(hours > 12) {
                hours -= 12;
            } else {
                ampm = 'AM';
                if(hours === 0) {
                    hours = 12;
                }
            }
        }
        
        let card = document.createElement('div');
        card.classList.add('time-card');
        // console.log(hours + ' ' + ampm);
        let content = `
            <p class="time">${hours} ${ampm}</p>
              <div class="logo">
                <img src="./weather-icon/${element.weather[0].icon}@2x.png" alt="" class="temp-logo">
              </div>
            <p class="hourly-temp">${element.main.temp} &deg; C</p>
        `;
        card.innerHTML = content;
        mainCard.appendChild(card);
    });
    
}

/**
 * Five Days Weather Forecasting
 * @param {api_key} url 
 * @param {number} lat 
 * @param {number} lon 
 */
async function getFiveDaysWeather(url, lat = 26.2491, lon = 92.3476) {
    const response = await fetch(url + `&appid=${api_key}&lat=${lat}&lon=${lon}`);
    const data = await response.json();

   
    FiveDayWeatherData(data);
}


/**
 * Five Days of weather Display
 * @param {JSON} data 
 */
function FiveDayWeatherData(data) {
    const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    // console.log(data); 
    const currentTime = data.list[0].dt_txt; 
    const date = new Date(currentTime);
    let lastPrintedDay = '';

    // days 
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weeklyCard = document.querySelector('.weekly-card');
    weeklyCard.innerHTML = ''; // clear previous data

    forecast.forEach(item => {
        const date = new Date(item.dt_txt);
        const dayIndex = date.getDay();
        const temp = item.main.temp;
        const description = item.weather[0].description;
        const day = daysOfWeek[dayIndex];
        let hour = date.getHours();
        let ampm;
        if(hour >= 12) {
            ampm = 'PM';
            if(hour > 12) {
                hour = hour - 12;
            }
        } else {
            ampm = 'AM';
            if(hour === 0) {
                hour = 12;
            }
        }

        // Print the day only once
        if (day !== lastPrintedDay) {
            
            lastPrintedDay = day;
        }

        let card = document.createElement('div');
        card.classList.add('day-card');

        let content = `
            <div class="logo">
                <img src="./weather-icon/${item.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
                <p class="day">${lastPrintedDay}</p>
                <p class="weather-name">${item.weather[0].description}</p>
                <p class="hourly-temp">${item.main.temp} &deg; C</p>
            </div>
        `;
        card.innerHTML = content;
        weeklyCard.appendChild(card);

    });
}

