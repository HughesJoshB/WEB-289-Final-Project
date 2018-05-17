// NOAA weather data for Wind information

	$(document).ready(function(){
		
		//$.getJSON("Scripts/testRunsofJS.json", function(windData){
		//var data = windData;
		$.ajax({
        url: "https://tidesandcurrents.noaa.gov/api/datagetter?date=today&interval=h&station=8658163"
		+"&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json" 

		}).then(function(data) {
			console.log("AJAX call success");
			//console.log(data);
			//console.log(data.content);
			var waterTemp=JSON.parse(data);
		
			console.log(waterTemp);
			//console.log(data.metadata);
			var water_data = '';
			// print first entrey
			// console.log(windData.data[0].t);
			$.each(waterTemp.data, function(key, value){
					
				water_data += '<tr>';
				water_data += '<td>' + value.t + '</td>';  // date an time
				water_data += '<td>' + value.v + '</td>';  // water temp in celcius
			
				water_data += '</tr>';
			// console.log(weather_data);
			// $('#weather_table').append(weather_data);
			return true;
			});
			console.log(weather_data);
			$('#water_data').append(water_data);
		// $("tbody").innerHTML += weather_data;
			}); 
		});
		//});