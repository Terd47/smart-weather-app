

function getWeather(){
    var inputSearch = $('#input-search').val();
    var searchBtn = $('#search-btn');
    var searchHistory = $('#search-history');
    var weatherDisplay = $('#weather-display');
    var forcast  = $('#forcast');

     console.log(inputSearch);
    var APIKey = "f16c05f7b1a705b26116da2afe023789";
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch},us&appid=${APIKey}`;
    var uvURL = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch},us&appid=${APIKey}`;
    var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${inputSearch},us&appid=${APIKey}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
           // Storing the rating data
           $(".city").html("<h1>" + response.name + " </h1>");

           var temp = (response.main.temp - 273.15) * 1.80 + 32;
           $(".temp").text("Temperature:" + temp.toFixed(1) + ' F');

           $(".humid").text("Humidity: " + response.main.humidity + "%");

           $(".wind").text("Wind Speed: " + response.wind.speed + "MPH");
           $(".uv").text("UV Index: " + response.coord);

           var iconURL= "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
           var img = $("<img>").attr("src", iconURL);
            $('#icon1').append(img)

        })
        var iconURL = 'http:openweathermap.org/img/w/” + response.weather[0].icon + “.png”';
           // 5-Day forcast 

    $.ajax({
        url:forecastURL,
        method: "GET"
    }).then(function(forecast) {
        console.log(forecastURL);
       console.log(forecast);
    

       //$('#date1').text('Temperature: ' + forecast.list[0].main.temp + "F");
       
       $('#temp1').text('Temperature: ' + forecast.list[0].main.temp + "F");
       $('#humid1').text('Humidity: ' + forecast.list[0].main.humidity + "%");
       
       
       $('.title').text("5-Day Forecast");
      
       $('#temp2').text('Temperature: ' + forecast.list[7].main.temp + "F");
       $('#humid2').text('Humidity: ' + forecast.list[7].main.humidity + "%");
       
       
       $('#temp3').text('Temperature: ' + forecast.list[11].main.temp + "F");
       $('#humid3').text('Humidity: ' + forecast.list[11].main.humidity + "%");
       
      
       $('#temp4').text('Temperature: ' + forecast.list[19].main.temp + "F");
       $('#humid4').text('Humidity: ' + forecast.list[19].main.humidity + "%");

       
       $('#temp5').text('Temperature: ' + forecast.list[27].main.temp + "F");
       $('#humid5').text('Humidity: ' + forecast.list[27].main.humidity + "%");
    
    })
      
}
$('#search-btn').on('click', function(){
   getWeather(); 
  
   
});
