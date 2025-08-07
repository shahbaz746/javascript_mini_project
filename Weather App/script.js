// async function getWeatherData(){
//     let input = document.getElementById('input').value;
//     console.log(input);
//     try {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input},PK&appid=4ff4655730f6d012b930782f1bb8da8d`);
    
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();  // Parse the JSON response
//     console.log(data);  // Use the data
//   } catch (error) {
//     console.error('Error fetching weather data:', error);
//   }
//   let weather = document.getElementsByClassName('weather-info')[0];
//     weather.innerHTML = `
//         <h2>${data.name}, ${data.sys.country}</h2>
//         <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
//         <p>Weather: ${data.weather[0].description}</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//         <p>Wind Speed: ${data.wind.speed} m/s</p>
//     `;
// }
// function checkWeather(){

//     getWeatherData();
// }




// just for try

async function getWeatherData() {
  let input = document.getElementById('input').value;
  console.log(input);

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input},PK&appid=4ff4655730f6d012b930782f1bb8da8d`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    let weather = document.getElementsByClassName('weather-info')[0];
    weather.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function checkWeather(){

    getWeatherData();
}
