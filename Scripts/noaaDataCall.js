/* Hughes, Joshua
March 5th, 2018
WEB 289 Midterm Project Presentation
JavaScript file with test loops info
to see about getting correct data out 
from NOAA websites database */

$.ajax({
	
	{file:"https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180215&end_date=20180215&station=8658163&product=water_temperature&units=english&time_zone=lst_ldt&application=web_services&format=json"
	//hoping to pull from NOAA the correct information for H2O Temp
	
		var metaData = "metadata" // will be giving the data's physical location w/ id name, name, and Lat an Long
		var waterTemp = "v" // v is coming from database as variable for waterTemp
		var date = "t" // t is time and date stamps from Database
		
		for (var i in file){
			/* need to write a loop that will pull 1 instance of metaData
			 waterTemp, and date for the location of Wilmington data
			 to be able to return to outside loop for table data */
			 
		
	}}
	
	{file:"https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180222&range=2&end_date=2018022&range=2&station=8658163&product=wind&&units=english&time_zone=lst_ldt&application=web_services&format=json"
		// hoping to pull from NOAA the wind speed, wind direction, true compass direction, and the gus of winds
		var metaData = "metadata" // this is the same as from the file from above
		var date = "t" // same as date from above loop
		var windSpeed = "s"  // "s" = wind speed in Knots
		var compassDirection = "d" // "d" = true compass direction
		var direction = "dr" 	// "dr" = direction
		var gust = "g" //** "g" = gust in Knots
	
		for (var in file){
		/* need to have a loop that will skipp over metaData and date, and start at an collect
		from windSpeed, compassDirection, direction and gust
		to be able to fill more of the table data loop */
	
}}
	/* Will have to change this loop to be on outside of the 2 file loops above,
		this loop is now gonna have to pull data from both request and combine it together to 
		make table headers, rows and data for rows. */
	dataType: 'json'
		success:fuction(data){
		var row = '<tr class="header">';
		for (var i in data.headers) {
			row += '<th style=""><a href="#" class="sort"><span>' + data.headers[i] + "</span></a></th>;
		}
		row += '</tr>'
		$(row).appendTo('table.data');
		row = '';
		for (var i in data.rows)  {
			row += "<tr id='" + i + "'>";
			row += "<td>" + data.rows[i].date + "</td>";
			row += "<td>" + data.rows[i].windSpeed + "</td>";
			row += "<td>" + data.rows[i].waterTemp + "</td>";
			row += "<td>" + data.rows[i].gust + "</td>";
			row += "<td>" + data.rows[i].compassDirection + "</td>";
			row += "<td>" + data.rows[i].direction + "</td>";
			row += "</tr>";
		}
		$(row).appendTo('tabe.data');
},
});