let weather = {
    fetchWeather: function(weatherOffice){
      fetch("https://api.weather.gov/gridpoints/+ weatherOffice +/97,71/forecast").then((response) => response.json())
      .then((data) => this.displayWeather(data)) 
    },
    displayWeather: function(data){
        const { city} = data.properties;
        const { icon } = data.number;
        const {temperature, temperatureUnit } = data.number;
        const { shortForecast } = data.number;
        const { detailedForecast } = data.number;
        console.log(city, icon, temperature, temperatureUnit, shortForecast,detailedForecast)
    }
}
        
