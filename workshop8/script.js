// Store your OpenWeatherMap API key.
const apiKey = "YOUR_API_KEY";

// Find the HTML element where we display the weather data.
const weatherData = document.getElementById("weatherdata");
const fetchWeather = document.getElementById("fetchWeather");

// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
fetchWeather.addEventListener("click", () => haeData("Helsinki"));

async function haeData(city = "Helsinki") {

     // Display a loading message.
     weatherData.textContent = "Ladataan säätietoja...";
   
    // Try to fetch and process the weather data.
    try {
  
        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&appid=${apiKey}`
        );
      
        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
        
         // Create an error and jump to the catch block.
         throw new Error(`HTTP error: ${response.status}`);
    }
        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        // Display the XML as plain text on the page.
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        
        const temperature = 
            xmlDoc.querySelector("temperature").getAttribute("value");
        const humidity =
            xmlDoc.querySelector("humidity").getAttribute("value");
        const clouds =
            xmlDoc.querySelector("clouds").getAttribute("value");

        weatherData.innerHTML =
        "Lämpötila: " + temperature + " °C<br>" +
        "Ilmankosteus: " + humidity + " %<br>" +
        "Pilvisyys: " + clouds;

    // Handle errors from the request or the code above.
}   catch (error) {

        // Choose an error message in the page's language.
        const message = "Säätietojen lataaminen epäonnistui.";

        // Display the message and details of the error.
        weatherData.textContent = message;
        console.error(error);
    }
}

const citySelect = document.getElementById("city");

citySelect.addEventListener("change", function () {
    haeData(this.value);
});

const citySearch = document.getElementById("citysearch");
const searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", function () {
    haeData(citySearch.value);
});