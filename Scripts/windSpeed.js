
// NOAA weather data for Wind information

	$(document).ready(function(){
		// -- test this with the json file.
		//$.getJSON("Scripts/testRunsofJS.json", function(windData){
		//var data = windData;
		$.ajax({
        url: " https://tidesandcurrents.noaa.gov/api/datagetter?date=today&interval=h"+
		"&station=8658163&product=wind&&units=english&time_zone=lst_ldt&application=web_services&format=json"
		}).then(function(data) {
			console.log("AJAX call success");
			windData=JSON.parse(data);
		console.log(windData);
		console.log(windData.metadata.name);
		var weather_data = '';
		// print first entrey
		// console.log(windData.data[0].t);
		$.each(windData.data, function(key, value){
					
			weather_data += '<tr>';
			weather_data += '<td>' + value.t + '</td>';  // date an time
			weather_data += '<td>' + value.s + '</td>';  // wind speed in Knots 
			weather_data += '<td>' + value.g + '</td>';  // wind gust in Knots 
			weather_data += '<td>' + value.dr + '</td>'; // wind direction NSEW values 
			weather_data += '<td>' + value.d + '</td>';  // wind direction in compass heading 
			weather_data += '</tr>';
			// console.log(weather_data);
			// $('#weather_table').append(weather_data);
		return true;
		});
		console.log(weather_data);
		$('#weather_data').append(weather_data);
		// $("tbody").innerHTML += weather_data;
		});
		});		
		//});
