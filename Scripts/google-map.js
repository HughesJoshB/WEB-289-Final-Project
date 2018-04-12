//** JavaScript for Google Map
//** Josh Hughes
//** Feb 15th 2018
//** Bay Pirate Fishing Team Website

function myMap() {
	var oceanIsle = new google.maps.LatLng(33.8943, -78.4267);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: oceanIsle, zoom: 10};
	var map = new google.maps.Map(mapCanvas,mapOptions);
	var marker = new google.maps.Marker({
		position: oceanIsle,
		animation google.maps.Animation.BOUNCE
	});
	
	var myCity = new google.maps.Circle({
		center: oceanIsle,
		radius: 50000,
		strokeColor: "#0000FF",
		strokeWeight: 2,
		fillColor: "#0000FF",
		fillOpacity: 0.4
	});
	myCity.setMap(map);
}

