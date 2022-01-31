const cityInput = document.querySelector("input");
const btn = document.querySelector("button");

// CurrentDay
const currentDescription = document.getElementById("current-description");
const currentTemp = document.getElementById("current-temp");
const currentWind = document.getElementById('current-wind');
const currentHumidity = document.getElementById('current-humidity');
const currentWeatherIcon = document.getElementById('weatherIcon');

//Forcast
const forcastTemp1 = document.getElementById('forcastTemp1');
const forcastTemp2 = document.getElementById('forcastTemp2');
const forcastTemp3 = document.getElementById('forcastTemp3');
const forcastTemp4 = document.getElementById('forcastTemp4');
const forcastTemp5 = document.getElementById('forcastTemp5');

const forcastDescription1 = document.getElementById('forcastDescription1');
const forcastDescription2 = document.getElementById('forcastDescription2');
const forcastDescription3 = document.getElementById('forcastDescription3');
const forcastDescription4 = document.getElementById('forcastDescription4');
const forcastDescription5 = document.getElementById('forcastDescription5');

const forcastIcon1 = document.getElementById('forcastIcon1');
const forcastIcon2 = document.getElementById('forcastIcon2');
const forcastIcon3 = document.getElementById('forcastIcon3');
const forcastIcon4 = document.getElementById('forcastIcon4');
const forcastIcon5 = document.getElementById('forcastIcon5');

const KEY = '1acef4a6ab8e45a5a002b098646964a1';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    searchFunction();

});

function searchFunction() {

    if (cityInput.value == "") {
        alert("No input found")

    } else {

        getCurrentWeather(cityInput.value);
        getForecast(cityInput.value);
    }
};

function getCurrentWeather() {

    const currentURL = `https://api.weatherbit.io/v2.0/current?&key=${KEY}&lang=sv&city=${cityInput.value}`

    console.log(currentURL);

    fetch(currentURL).then(

        function (response) {

            if (response.status >= 200 && response.status < 300) {
                const promise = response.json();
                console.log(promise);
                return promise;
            }
            else {
                throw 'Could not connect to API';
            }
        }

    ).then(

        function (data) {

            //console.log(data);

            const { temp, wind_spd, rh } = data.data[0];
            const { description, icon } = data.data[0].weather

            currentTemp.textContent = "Temperatur: " + Math.floor(temp) + " °C";
            currentDescription.textContent = description;
            currentWind.textContent = "Vindhastighet: " + Math.floor(wind_spd) + " s/m";
            currentHumidity.textContent = "Luftfuktighet: " + Math.floor(rh) + " %";
            currentWeatherIcon.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;

        }

    ).catch(

        function (error) {

            console.log(error);
            alert("No search result found");
        }
    );
};

function getForecast() {

    const forcastURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${KEY}&lang=sv&days=5&city=${cityInput.value}`

    fetch(forcastURL).then(

        function (response) {

            if (response.status >= 200 && response.status < 300) {
                const promise = response.json();
                return promise;
            }
            else {

                throw 'Could not connect to API';
            }
        }

    ).then(

        function (data) {

            //console.log(data);

            const temp1 = data.data[0].temp;
            const temp2 = data.data[1].temp;
            const temp3 = data.data[2].temp;
            const temp4 = data.data[3].temp;
            const temp5 = data.data[4].temp;

            const desc1 = data.data[0].weather.description;
            const desc2 = data.data[1].weather.description;
            const desc3 = data.data[2].weather.description;
            const desc4 = data.data[3].weather.description;
            const desc5 = data.data[4].weather.description;

            const icon1 = data.data[0].weather.icon;
            const icon2 = data.data[1].weather.icon;
            const icon3 = data.data[2].weather.icon;
            const icon4 = data.data[3].weather.icon;
            const icon5 = data.data[4].weather.icon;

            forcastTemp1.textContent = Math.floor(temp1) + " °C";
            forcastTemp2.textContent = Math.floor(temp2) + " °C";
            forcastTemp3.textContent = Math.floor(temp3) + " °C";
            forcastTemp4.textContent = Math.floor(temp4) + " °C";
            forcastTemp5.textContent = Math.floor(temp5) + " °C";

            forcastDescription1.textContent = desc1;
            forcastDescription2.textContent = desc2;
            forcastDescription3.textContent = desc3;
            forcastDescription4.textContent = desc4;
            forcastDescription5.textContent = desc5;

            forcastIcon1.src = `https://www.weatherbit.io/static/img/icons/${icon1}.png`;
            forcastIcon2.src = `https://www.weatherbit.io/static/img/icons/${icon2}.png`;
            forcastIcon3.src = `https://www.weatherbit.io/static/img/icons/${icon3}.png`;
            forcastIcon4.src = `https://www.weatherbit.io/static/img/icons/${icon4}.png`;
            forcastIcon5.src = `https://www.weatherbit.io/static/img/icons/${icon5}.png`;

        }

    ).catch(

        function (error) {

            console.log(error);
            alert("No search result found");
        }
    );
};