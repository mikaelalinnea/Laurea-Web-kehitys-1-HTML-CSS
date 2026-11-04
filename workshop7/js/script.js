//1
const showNamesBtn = document.getElementById("showNames");
const showAllBtn = document.getElementById("showAll");
const jsonData = document.getElementById("jsondata");

const text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const employees = JSON.parse(text);

showNamesBtn.addEventListener("click", function () {
    let output = "";
    for (let i = 0; i < employees.employees.length; i++) {
        output +=
        employees.employees[i].firstName +
        " " +
        employees.employees[i].lastName +
        "<br>";
    }
    jsonData.innerHTML = output;
});

showAllBtn.addEventListener("click", function () {
    let output = "";
    for (let i = 0; i < employees.employees.length; i++) {
        output +=
        "Etunimi: " +
        employees.employees[i].firstName +
        "<br>" +
        "Sukunimi: " +
        employees.employees[i].lastName +
        "<br><br>";
    }
    jsonData.innerHTML = output;
});
//2
const loadRawBtn = document.getElementById("loadRaw");
const loadParsedBtn = document.getElementById("loadParsed");
const rawData = document.getElementById("rawdata");

loadRawBtn.addEventListener("click", function () {
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    .then(response => response.json())
    .then(data => {
        rawData.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.log(error);
    });
});

loadParsedBtn.addEventListener("click", function () {
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
    .then(response => response.json())
    .then(data => {
        let output = "<table border='1'>";
        output +=
        "<tr>" +
        "<th>Juliste</th>" +
        "<th>Otsikko</th>" +
        "<th>Vuosi</th>" +
        "<th>Tyyppi</th>" +
        "</tr>";
        for (let i = 0; i < data.Search.length; i++) {
            output +=
            "<tr>" +
            "<td><img src='" + data.Search[i].Poster + "' width='170'></td>" +
            "<td>" + data.Search[i].Title + "</td>" +
            "<td>" + data.Search[i].Year + "</td>" +
            "<td>" + data.Search[i].Type + "</td>" +
            "</tr>";
        }
        output += "</table>";
        rawData.innerHTML = output;
    });
});
//3
const loadWeatherBtn = document.getElementById("loadWeather");
const weatherData = document.getElementById("weatherdata");

loadWeatherBtn.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=json&appid=5bf8cc9d4a4611800c4a225c2ac61e35")
    .then(response => response.json())
    .then(data => {
        weatherData.innerHTML = 
        "Lämpötila: " + data.main.temp + " °C<br>" +
        "Pilvisyys: " + data.clouds.all + " %<br>" +
        "Ilmankosteus: " + data.main.humidity + " %";
    })
    .catch(error => {
        weatherData.textContent = "Datan lataaminen epäonnistui.";
        console.error(error);
    });
});

const citySelect = document.getElementById("city");

function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        city + 
        "&units=metric&mode=json&appid=5bf8cc9d4a4611800c4a225c2ac61e35"
    )
    .then(response => response.json())
    .then(data => {
        weatherData.innerHTML = 
        "Lämpötila: " + data.main.temp + " °C<br>" +
        "Pilvisyys: " + data.clouds.all + " %<br>" +
        "Ilmankosteus: " + data.main.humidity + " %";
    })
        .catch(error => {
        weatherData.textContent = "Datan lataaminen epäonnistui.";
        console.error(error);
    });
}
citySelect.addEventListener("change", function () {
    getWeather(this.value);
});

const citySearch = document.getElementById("citysearch");
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", function () {
    getWeather(citySearch.value);
});