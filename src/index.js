//ُ==========::::: current date and time :::::==========
function GetDateTime(timeStamp) {
    let date = new Date(timeStamp);
    let objDateTime = {};

    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let Minute = date.getMinutes();
    if (Minute < 10) {
        Minute = `0${Minute}`;
    }
    objDateTime.time = hour + ":" + Minute;
    //
    let arrDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let DayNoOfWeek = date.getDay();
    objDateTime.day = arrDay[DayNoOfWeek];
    //
    let arrMonth = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let MonthNo = date.getMonth();
    let DateOfMonth = date.getDate();
    objDateTime.month = `, ${arrMonth[MonthNo]} ${DateOfMonth}`;
    return objDateTime;
}

//ُ==========::::: set icon :::::==========

function setIcon(weatherId, weatherIcon, finalDescription, isIcon, cardIndex) {
    let Url1 = "img/weather/";
    let imgSource = "";

    if (
        [200, 201, 202, 210, 211, 212, 221, 230, 231, 232].includes(weatherId) &&
        weatherIcon === "11d"
    ) {
        if (isIcon) {
            imgSource = `${Url1}thunderstorm/icon2.svg`;
        } else {
            imgSource = `${Url1}thunderstorm/1.png`;
        }
    }

    if (
        [300, 301, 302, 310, 311, 312, 313, 314, 321].includes(weatherId) &&
        weatherIcon === "09d"
    ) {
        if (isIcon) {
            imgSource = `${Url1}drizzle/icon.svg`;
        } else {
            imgSource = `${Url1}drizzle/1.png`;
        }
    }

    if (
        [701, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(weatherId) &&
        weatherIcon === "50d"
    ) {
        if (isIcon) {
            imgSource = `${Url1}atmosphere/icon.svg`;
        } else {
            imgSource = `${Url1}atmosphere/1.png`;
        }
    }

    if ([500, 501, 502, 503, 504].includes(weatherId) && weatherIcon === "10d") {
        if (isIcon) {
            imgSource = `${Url1}rain/icon.svg`;
        } else {
            imgSource = `${Url1}rain/1.png`;
        }
    }
    if (weatherId === 511 && weatherIcon === "13d") {
        if (isIcon) {
            imgSource = `${Url1}rain/fIcon.svg`;
        } else {
            imgSource = `${Url1}rain/f1.png`;
        }
    }
    if ([520, 521, 522, 531].includes(weatherId) && weatherIcon === "09d") {
        if (isIcon) {
            imgSource = `${Url1}rain/nIcon.svg`;
        } else {
            imgSource = `${Url1}rain/n1.png`;
        }
    }

    if (
        [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622].includes(
            weatherId
        ) &&
        weatherIcon === "13d"
    ) {
        if (isIcon) {
            imgSource = `${Url1}snow/icon.svg`;
        } else {
            imgSource = `${Url1}snow/1.png`;
        }
    }

    if (weatherId === 801) {
        if (weatherIcon === "02d") {
            if (isIcon) {
                imgSource = `${Url1}fewClouds/icon.svg`;
            } else {
                imgSource = `${Url1}fewClouds/1.png`;
            }
        }
        if (weatherIcon === "02n") {
            if (isIcon) {
                imgSource = `${Url1}fewClouds/nIcon.svg`;
            } else {
                imgSource = `${Url1}fewClouds/n1.png`;
            }
        }
    }

    if (weatherId === 802 && ["03d", "03n"].includes(weatherIcon)) {
        if (isIcon) {
            imgSource = `${Url1}scatteredClouds/icon.svg`;
        } else {
            imgSource = `${Url1}scatteredClouds/1.png`;
        }
    }

    if (weatherId === 803 && ["04d", "04n"].includes(weatherIcon)) {
        if (isIcon) {
            imgSource = `${Url1}brokenClouds/icon.svg`;
        } else {
            imgSource = `${Url1}brokenClouds/1.png`;
        }
    }

    if (weatherId === 804 && ["04d", "04n"].includes(weatherIcon)) {
        if (isIcon) {
            imgSource = `${Url1}overcastClouds/icon.svg`;
        } else {
            imgSource = `${Url1}overcastClouds/1.png`;
        }
    }

    if (weatherId === 800) {
        if (weatherIcon === "01d") {
            if (isIcon) {
                imgSource = `${Url1}clearSky/icon.svg`;
            } else {
                imgSource = `${Url1}clearSky/1.png`;
            }
        }
        if (weatherIcon === "01n") {
            if (isIcon) {
                imgSource = `${Url1}clearSky/nIcon.svg`;
            } else {
                imgSource = `${Url1}clearSky/n1.png`;
            }
        }
    }
    if (isIcon) {
        let cardImageId = `#card-image${cardIndex}`;
        let cardImageElement = document.querySelector(cardImageId);
        if (imgSource !== "") {
            cardImageElement.setAttribute("src", imgSource);
        }
        cardImageElement.setAttribute("alt", finalDescription);
    } else {
        let currentWeatherImageElement = document.querySelector(
            "#current-weather-image"
        );
        if (imgSource !== "") {
            currentWeatherImageElement.setAttribute("src", imgSource);
        }
        currentWeatherImageElement.setAttribute("alt", finalDescription);
    }
}

//ُ==========::::: search form :::::==========

function setDisplayOfSearchForm(displayValue) {
    let searchFormElement = document.querySelector(".search-form");
    searchFormElement.style.display = displayValue;
}
//
function setDisplayOfCityHeading(displayValue) {
    let cityHeadingElement = document.querySelector(".city-heading");
    cityHeadingElement.style.display = displayValue;
}
//
function showSearchForm() {
    setDisplayOfCityHeading("none");
    setDisplayOfSearchForm("flex");
    document.querySelector("#search-input").focus();
}
//
function showCityInHeadingByCityName(cityName) {
    document.querySelector("#city-heading-name").innerHTML = cityName;
    document.querySelector("#search-input").value = ""; //reset()
}
//
function showCityInHeadingByLocation(cityName) {
    setDisplayOfCityHeading("flex");
    setDisplayOfSearchForm("none");
    document.querySelector("#city-heading-name").innerHTML = cityName;
}
//
function addEscapeToEventListener(event) {
    if (event.key === "Escape") {
        let cityHeadingElement = document.querySelector(".city-heading");
        if (cityHeadingElement.style.display === "none") {
            setDisplayOfCityHeading("flex");
            setDisplayOfSearchForm("none");
        }
    }
}

//==========::::: display forecast :::::==========
function formatForecastDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return arrDay[date.getDay()];
}

function handleForecastApi(response) {
    let forecast = response.data.daily;
    let cardSectionElement = document.querySelector("#card-section");
    cardSectionElement.innerHTML = "";
    forecast.forEach(function(forecastDay, index) {
        if (index < 5) {
            let weatherId = forecastDay.weather[0].id;
            let weatherIcon = forecastDay.weather[0].icon;
            let weatherDescription = forecastDay.weather[0].description;
            let mainDescription = forecastDay.weather[0].main;
            let finalDescription = "";
            if (typeof mainDescription === "undefined") {
                finalDescription = weatherDescription;
            } else {
                finalDescription = mainDescription;
            }
            let cardImageId = `card-image${index}`;
            cardSectionElement.innerHTML += `
            <div class="card">
   <div class="card-title">${formatForecastDay(forecastDay.dt)}</div>
   <img class="card-image" id="${cardImageId}"/>
   <div class="card-description">${finalDescription}</div>
   <div class="card-tempreture">
   <span class="card-max-tempreture degree-value-to-change">${Math.round(
     forecastDay.temp.max
   )}</span>
   <span class="card-slash"> / </span>
   <span class="card-min-tempreture degree-value-to-change">${Math.round(
     forecastDay.temp.min
   )}</span>
   <span class="degree-style unit-degree-to-change">&#8451;</span>
   </div>
 </div>`;

            setIcon(weatherId, weatherIcon, finalDescription, true, index);
        }
    });
    console.log(cardSectionElement.innerHTML);
}

function displayForecast(latitude, longitude) {
    let apiKey = "b35c686ba9565ba0ab254c2230937552";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={minutely,hourly}&appid=${apiKey}&units=metric`;
    axios
        .get(apiUrl)
        .then(handleForecastApi)
        .catch((t) => {
            if (t.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(t.response.data);
                console.log(t.response.status);
                console.log(t.response.headers);
            } else if (t.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(t.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", t.message);
            }
            console.log(t.config);
            document.querySelector("#search-input").value = ""; //reset()
        });
}

/*==========::::: call API weather ::::::==========*/

function readValuesOfWeatherApi(response) {
    let weatherDescription = response.data.weather[0].description;
    let mainDescription = response.data.weather[0].main;
    let finalDescription = "";
    if (typeof weatherDescription === "undefined") {
        finalDescription = mainDescription;
    } else {
        finalDescription = weatherDescription;
    }
    let weatherId = response.data.weather[0].id;
    let weatherIcon = response.data.weather[0].icon;
    document.querySelector("#current-weather-description").innerHTML =
        finalDescription;
    setIcon(weatherId, weatherIcon, finalDescription, false);
    //
    document.querySelector("#current-tempreture").innerHTML = Math.round(
        response.data.main.temp
    );
    document.querySelector("#current-max").innerHTML = Math.round(
        response.data.main.temp_max
    );
    document.querySelector("#current-min").innerHTML = Math.round(
        response.data.main.temp_min
    );
    document.querySelector("#current-feels-like-value").innerHTML = Math.round(
        response.data.main.feels_like
    );
    document.querySelector("#current-humidity-value").innerHTML =
        response.data.main.humidity;
    document.querySelector("#current-wind-value").innerHTML = Math.round(
        response.data.wind.speed
    );

    let timeStamp = response.data.dt * 1000;

    let objDateTime = GetDateTime(timeStamp);
    document.querySelector("#last-updated-time-value").innerHTML =
        objDateTime.time;
    document.querySelector("#last-updated-day").innerHTML = objDateTime.day;
    document.querySelector("#last-updated-month").innerHTML = objDateTime.month;
    //
    displayForecast(response.data.coord.lat, response.data.coord.lon);
}
//
function handleWeatherApiByCityName(response) {
    let cityName = response.data.name;
    if (cityName === undefined || cityName === "") {
        alert("city not found!");
    } else {
        showCityInHeadingByCityName(cityName);
        readValuesOfWeatherApi(response);
    }
}
//
function handleWeatherApiByLocation(response) {
    let cityName = response.data.name;
    if (cityName === undefined || cityName === "") {
        alert("city not found!");
    } else {
        showCityInHeadingByLocation(cityName);
        readValuesOfWeatherApi(response);
    }
}
//
function callWeatherApiByCityname(cityName) {
    let apiKey = "5071090a29decc6994e4296133521189";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios
        .get(apiUrl)
        .then(handleWeatherApiByCityName)
        .catch((t) => {
            if (t.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(t.response.data);
                console.log(t.response.status);
                console.log(t.response.headers);
            } else if (t.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(t.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", t.message);
            }
            console.log(t.config);
            document.querySelector("#search-input").value = ""; //reset()
        });
}

//
function callWeatherApiByLocation(lat, lon) {
    let apiKey = "5071090a29decc6994e4296133521189";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric
`;
    axios
        .get(apiUrl)
        .then(handleWeatherApiByLocation)
        .catch((t) => {
            if (t.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(t.response.data);
                console.log(t.response.status);
                console.log(t.response.headers);
            } else if (t.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(t.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", t.message);
            }
            console.log(t.config);
            document.querySelector("#search-input").value = ""; //reset()
        });
}
//
function handleSearchInputElement(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        setDisplayOfCityHeading("flex");
        setDisplayOfSearchForm("none");

        let inputValue = document.querySelector("#search-input").value;

        if (inputValue === null || inputValue.trim() === "") {
            alert("please enter the city name...");
        } else {
            inputValue = inputValue.trim();
            callWeatherApiByCityname(inputValue);
        }
    }
}

/*==========::::: current position :::::==========*/

function handleCurrentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    callWeatherApiByLocation(latitude, longitude);
}
//
function handleCurrentLocationButtonImage(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleCurrentPosition);
}

//==========::::: convert unit degree :::::==========
function setStyleOfSelectedDegreeLink(activeLinkName) {
    let fahrenheitDegreeLink = document.querySelector("#fahrenheit-degree-link");
    let celsiusDegreeLink = document.querySelector("#celsius-degree-link");

    if (activeLinkName === "f") {
        fahrenheitDegreeLink.classList.add("active-degree-link");
        celsiusDegreeLink.classList.remove("active-degree-link");
    } else {
        fahrenheitDegreeLink.classList.remove("active-degree-link");
        celsiusDegreeLink.classList.add("active-degree-link");
    }
}

function setUnitDegree(targetUnit) {
    if (targetUnit === "c") {
        targetUnit = "&#8451;";
    } else {
        targetUnit = "&#8457;";
    }
    let elements = document.querySelectorAll(".unit-degree-to-change");
    elements.forEach((e) => {
        e.innerHTML = targetUnit;
    });
}

function convertToFahrenheit(value) {
    //(0°C × 9/5) + 32 = 32°F
    return Math.round(value * (9 / 5) + 32);
}

function convertToCelsius(value) {
    //(32°F − 32) × 5/9 = 0°C
    return Math.round((value - 32) * (5 / 9));
}

function setValueDegree(targetUnit) {
    let elements = document.querySelectorAll(".degree-value-to-change");

    if (targetUnit === "c") {
        elements.forEach((e) => {
            let value = Number(e.textContent);
            e.innerHTML = convertToCelsius(value);
        });
    } else {
        elements.forEach((e) => {
            let value = Number(e.textContent);
            e.innerHTML = convertToFahrenheit(value);
        });
    }
}

function showDegreeInCelsius(event) {
    event.preventDefault();

    let currentTempretureSymbol = document.querySelector(
        "#current-tempreture-symbol"
    );
    if (currentTempretureSymbol.textContent === "℉") {
        setUnitDegree("c");
        setValueDegree("c");
        setStyleOfSelectedDegreeLink("c");
    }
}

function showDegreeInFahrenheit(event) {
    event.preventDefault();

    let currentTempretureSymbol = document.querySelector(
        "#current-tempreture-symbol"
    );
    if (currentTempretureSymbol.textContent === "℃") {
        setUnitDegree("f");
        setValueDegree("f");
        setStyleOfSelectedDegreeLink("f");
    }
}

//==========::::: load Page :::::==========

//-_-_-_ search form
function start() {
    let showSearchformElement = document.querySelector(
        "#showing-search-form-button"
    );
    showSearchformElement.addEventListener("click", showSearchForm);

    let SearchInputElement = document.querySelector("#search-input");
    SearchInputElement.addEventListener("keypress", handleSearchInputElement);

    document.addEventListener("keyup", addEscapeToEventListener);

    //-_-_-_ current location button
    let currentLocationButtonImageElement = document.querySelector(
        "#current-location-button-image"
    );
    currentLocationButtonImageElement.addEventListener(
        "click",
        handleCurrentLocationButtonImage
    );

    //-_-_-_ change degree
    let celsiusDegreeLink = document.querySelector("#celsius-degree-link");
    celsiusDegreeLink.addEventListener("click", showDegreeInCelsius);

    let fahrenheitDegreeLink = document.querySelector("#fahrenheit-degree-link");
    fahrenheitDegreeLink.addEventListener("click", showDegreeInFahrenheit);

    //-_-_-_
    callWeatherApiByCityname("London");
}

// window.onLoad = start;
window.onload = function() {
    start();
}; // can also use window.addEventListener('load', (event) => { start(); });