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
      ).innerHTML = `${result.coord.lon}&#176;, ${result.coord.lat}&#176;`;
      document.getElementById(
        "temp"
      ).innerHTML = `${result.main.temp} &#8451;, min ${result.main.temp_min} &#8451;, max ${result.main.temp_max} &#8451;`;
      document.getElementById(
        "weather"
      ).innerHTML = `${result.weather[0].description} <img style="vertical-align: middle;" src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" />`;
    })
    .catch((error) => console.log("error", error));
}
