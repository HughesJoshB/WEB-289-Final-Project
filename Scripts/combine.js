// April 26th trying to combine Wind and Temp Data to one table
var merge= function(tempData,windData){
	// this function is not working
	// search for merge of 2 js array's
	//for (var key in src){
		//if (src.hasOwnProperty(key)) obj[key] = src[key];
	//}
	var combineData = windData;
	for (var key in combineData.data){
		//console.log(combineData.data[key]);
		//console.log(tempData.data[key]);
		//console.log("-----------");
		combineData.data[key].v = tempData.data[key].v;
		//console.log(combineData.data[key]);
		//console.log("-----------");
	}
	
	return combineData;
}
var combine = function(tempData, windData){
	// code goes here combine tables an display
	
	var combineData= merge(tempData,windData);
	//console.log(combineData);
	
};
$(document).ready(function(){
		
		//$.getJSON("Scripts/testRunsofJS.json", function(windData){
		//var data = windData;
		$.ajax({
        url: "https://tidesandcurrents.noaa.gov/api/datagetter?date=today&interval=h&station=8658163"
		+"&product=water_temperature&units=english&time_zone=gmt&application=Web_Services&format=json" 

		}).then(function(data) {
		//console.log("temp success");
			var tempData=JSON.parse(data);
			$.ajax({
			url: " https://tidesandcurrents.noaa.gov/api/datagetter?date=today&interval=h"+
			"&station=8658163&product=wind&&units=english&time_zone=lst_ldt&application=Web_Services&format=json"
			}).then(function(data) {
				//console.log("Wind success");
				var windData=JSON.parse(data);
				//build table here!!!!!!!!!!!!-------------
				combine(tempData, windData);
				var weather_data = combine;
				// print first entry
				// console.log(windData.data[0].t);
				$.each(windData.data, function(key, value){
					
					weather_data += '<tr>';
					weather_data += '<td>' + value.t + '</td>';  // date an time (time is restarted at 8pm EST/ 12AM GMT)
					weather_data += '<td>' + value.s + '</td>';  // wind speed in Knots 
					weather_data += '<td>' + value.g + '</td>';  // wind gust in Knots 
					weather_data += '<td>' + value.dr + '</td>'; // wind direction NSEW values 
					weather_data += '<td>' + value.d + '</td>';  // wind direction in compass heading 
					weather_data += '<td>' + value.v + '</td>';  // water temp
					weather_data += '</tr>';
					// console.log(weather_data);
					// $('#weather_table').append(weather_data);
				return true;
				});
				//console.log(weather_data);
				$('#weather_data').append(weather_data);
			});
		
		
		
		
		}); // then
		}); // ready