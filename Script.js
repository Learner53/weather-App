
$(document).ready(function() {
	
	$("#weather-celsius").click(function(){
	var apiWeather ="http://api.openweathermap.org/data/2.5/weather?q="
    var apiId="&APPID=d7002f943e2b9c5bebdf8b6d16602a87";
	var unit="&units=metric";
	var city = document.getElementById("place").value;
	var url= (apiWeather+city+apiId+unit);
	/* var requestData = $('#place').val();
          $.ajax({
             url: 'http://api.openweathermap.org/data/2.5/weather',
                    method: 'get',
                    data: { q: requestData },
                    dataType: 'json',
                    success: function (response) {
                        if (response.message != null) {
                             var coordLon =  `${data.coord.lon}`
         var coordLat =  `${data.coord.lat}`
         var weatherDescription =  `${data.weather[0].description}`
         var mainTemp =  `${data.main.temp}`
         var mainPressure =  `${data.main.pressure}`
         var mainhumidity =  `${data.main.humidity}`
         var tempMin =  `${data.main.temp_min}`
         var tempMax =  `${data.main.temp_max}`
         var windSpeed =  `${data.wind.speed}`
         var sysCountry =  `${data.sys.country}`
         var name =  `${data.name}`;
         var cod =  `${data.cod}`;		
		$("table").show();
        $("#coordLon").html(coordLon);
        $("#coordLat").html(coordLat);
        $("#weatherDescription").html(weatherDescription);
        $("#mainTemp").html(mainTemp);
        $("#mainPressure").html(mainPressure);
        $("#mainhumidity").html(mainhumidity);
        $("#tempMin").html(tempMin);
        $("#tempMax").html(tempMax);
        $("#windSpeed").html(windSpeed);
        $("#sysCountry").html(sysCountry);
        $("#name").html(name);
							console.log("hey");
                        }
                        else {
							console.log("hi");
                           $("table").hide();
                           $("#unknown").show();
                        }
					}*/
		$.getJSON(url, function(data) {
         var coordLon =  `${data.coord.lon}`
         var coordLat =  `${data.coord.lat}`
         var weatherDescription =  `${data.weather[0].description}`
         var mainTemp =  `${data.main.temp}`
         var mainPressure =  `${data.main.pressure}`
         var mainhumidity =  `${data.main.humidity}`
         var tempMin =  `${data.main.temp_min}`
         var tempMax =  `${data.main.temp_max}`
         var windSpeed =  `${data.wind.speed}`
         var sysCountry =  `${data.sys.country}`
         var name =  `${data.name}`;
         var cod =  `${data.cod}`;		
		$("table").show();
        $("#coordLon").html(coordLon);
        $("#coordLat").html(coordLat);
        $("#weatherDescription").html(weatherDescription);
        $("#mainTemp").html(mainTemp);
        $("#mainPressure").html(mainPressure);
        $("#mainhumidity").html(mainhumidity);
        $("#tempMin").html(tempMin);
        $("#tempMax").html(tempMax);
        $("#windSpeed").html(windSpeed);
        $("#sysCountry").html(sysCountry);
        $("#name").html(name);
 
  
})
	});
});