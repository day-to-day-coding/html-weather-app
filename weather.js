function getWeatherReport(city) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=7dccf337b6815ba322d605f8ac691adf`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      document.getElementById(
        "coordinate"
      ).innerHTML = `${result.coord.lon}, ${result.coord.lat}`;
      document.getElementById(
        "temp"
      ).innerHTML = `${result.main.temp}, min ${result.main.temp_min}, max ${result.main.temp_max}`;
      document.getElementById(
        "weather"
      ).innerHTML = `${result.weather[0].main}`;
    })
    .catch((error) => console.log("error", error));
}
