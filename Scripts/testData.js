//** Test JavaScript for loading Data from NOAA to BayPirate Webpage
//** Josh Hughes
//** Feb 15th, 2018
//** Might have bite off more than i can chew


$.ajax({
	file:"./Scripts/testInfo.json"
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
			row += "<td>" + data.rows[i].waveHeight + "</td>";
			row += "<td>" + data.rows[i].wavePeriod + "</td>";
			row += "</tr>";
		}
		$(row).appendTo('tabe.data');
},
});

		