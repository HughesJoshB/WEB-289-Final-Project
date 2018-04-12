

var weatherContainer = document.getElementById("weather-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){ 
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180215&end_date=20180215&station=8658163&product=water_temperature&units=english&time_zone=lst_ldt&application=web_services&format=json');
	ourRequest.onload = function(){
		var myData = JSON.parse(ourRequest.responseText);
		renderHTML(myData);
	};
	ourRequest.send();
});


function renderHTML(data){
	var htmlString = "This is a test! Still havent gotten anything to load.";
	
	for(i = 0; i < data.length; i++){
		htmlString += "<p>" + data[i].name + data[i].t + ".</p>";
	}
	weatherContainer.insertAdjacentHTML('beforeend',htmlString);
}
	