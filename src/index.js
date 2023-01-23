//ُ==========::::: current date and time :::::==========
function getCurrentDay(currentDate) {
    let arrDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let currentDayNoOfWeek = currentDate.getDay();
    return arrDay[currentDayNoOfWeek];
}
//
function getCurrentTime(currentDate) {
    let currenthour = currentDate.getHours();
    if (currenthour < 10) {
        currenthour = `0${currenthour}`;
    }
    let currentMinute = currentDate.getMinutes();
    if (currentMinute < 10) {
        currentMinute = `0${currentMinute}`;
    }
    let currentTime = currenthour + ":" + currentMinute;
    return currentTime;
}
//
function getCurrentMonthAndDayNoAndTime(currentDate) {
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
    let currentMonthNo = currentDate.getMonth();
    let currentDateOfMonth = currentDate.getDate();
    let currentMonthAndDayNo = `${arrMonth[currentMonthNo]} ${currentDateOfMonth}`;
    let currentTime = ` (${getCurrentTime(currentDate)})`;
    return currentMonthAndDayNo + currentTime;
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

/*==========::::: call API weather ::::::==========*/

function readAPIAndSetElements(response) {
    //let country = response.data.sys.country;
    //let cityName = response.data.name;
    let WeatherStateMain = response.data.weather.main;
    let WeatherStateDescription = response.data.weather[0].description;
    let temp = Math.round(response.data.main.temp);
    let temp_max = Math.round(response.data.main.temp_max);
    let temp_min = Math.round(response.data.main.temp_min);
    let feels_like = Math.round(response.data.main.feels_like);
    let humidity = response.data.main.humidity;
    let windSpeed = Math.round(response.data.wind.speed);
    let finalWeatherStateDescription = "";
    if (typeof WeatherStateDescription === "undefined") {
        finalWeatherStateDescription = WeatherStateMain;
    } else {
        finalWeatherStateDescription = WeatherStateDescription;
    }
    document.querySelector("#current-tempreture").innerHTML = temp;
    document.querySelector("#current-max").innerHTML = temp_max;
    document.querySelector("#current-min").innerHTML = temp_min;
    document.querySelector("#current-weather-description").innerHTML =
        finalWeatherStateDescription;
    document.querySelector("#current-feels-like-value").innerHTML = feels_like;
    document.querySelector("#current-humidity-value").innerHTML = humidity;
    document.querySelector("#current-wind-value").innerHTML = windSpeed;
}
//
function handleCurrentWeatherApiByCityName(response) {
    let cityName = response.data.name;
    if (cityName === undefined || cityName === "") {
        alert("city not found!");
    } else {
        showCityInHeadingByCityName(cityName);
        readAPIAndSetElements(response);
    }
}
//
function handleCurrentWeatherApiByLocation(response) {
    let cityName = response.data.name;
    if (cityName === undefined || cityName === "") {
        alert("city not found!");
    } else {
        showCityInHeadingByLocation(cityName);
        readAPIAndSetElements(response);
    }
}
//
function callWeatherApiByCityname(cityName) {
    let apiKey = "5071090a29decc6994e4296133521189";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios
        .get(apiUrl)
        .then(handleCurrentWeatherApiByCityName)
        .catch((t) => {
            if (t.response.data !== undefined) {
                alert(t.response.data.message);
            } else {
                alert("something went wrong!");
            }
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
        .then(handleCurrentWeatherApiByLocation)
        .catch((t) => {
            alert(t.response.data.message);
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
function setDegreeLinkSelectedStyle(linkName) {
    let fahrenheitDegreeLink = document.querySelector("#fahrenheit-degree-link");
    let celsiusDegreeLink = document.querySelector("#celsius-degree-link");

    if (linkName === "f") {
        fahrenheitDegreeLink.style.color = "#88d7f7";
        celsiusDegreeLink.style.color = "#3539ab";
    } else {
        fahrenheitDegreeLink.style.color = "#3539ab";
        celsiusDegreeLink.style.color = "#88d7f7";
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
        setDegreeLinkSelectedStyle("c");
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
        setDegreeLinkSelectedStyle("f");
    }
}

//==========::::: load Page :::::==========

/*----- set time and date ------*/
let now = new Date();
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = getCurrentMonthAndDayNoAndTime(now);

document.querySelector("#current-day").innerHTML = getCurrentDay(now);

/*----- search form ------*/
let showSearchformElement = document.querySelector(
    "#showing-search-form-button"
);
showSearchformElement.addEventListener("click", showSearchForm);

let SearchInputElement = document.querySelector("#search-input");
SearchInputElement.addEventListener("keypress", handleSearchInputElement);

document.addEventListener("keyup", addEscapeToEventListener);

/*----- current location button ----- */
let currentLocationButtonImageElement = document.querySelector(
    "#current-location-button-image"
);
currentLocationButtonImageElement.addEventListener(
    "click",
    handleCurrentLocationButtonImage
);

/*----- change degree -----*/
let celsiusDegreeLink = document.querySelector("#celsius-degree-link");
celsiusDegreeLink.addEventListener("click", showDegreeInCelsius);

let fahrenheitDegreeLink = document.querySelector("#fahrenheit-degree-link");
fahrenheitDegreeLink.addEventListener("click", showDegreeInFahrenheit);

callWeatherApiByCityname("London");