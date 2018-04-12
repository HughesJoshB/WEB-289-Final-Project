

	
	//** https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180222&range=2&end_date=2018022&range=2&station=8658163&product=wind&&units=english&time_zone=lst_ldt&application=web_services&format=json
	
var windData = {"metadata":{
	"id":"8658163",
	"name":"Wrightsville Beach",
	"lat":"34.2133","lon":"-77.7867"}, 
 "data": [
	{"t":"2018-02-22 00:00", "s":"8.94", "d":"208.00", "dr":"SSW", "g":"9.72", "f":"0,0"},
	{"t":"2018-02-22 00:06", "s":"8.94", "d":"208.00", "dr":"SSW", "g":"9.14", "f":"0,0"},
	{"t":"2018-02-22 00:12", "s":"9.33", "d":"205.00", "dr":"SSW", "g":"9.52", "f":"0,0"},
	{"t":"2018-02-22 00:18", "s":"8.75", "d":"205.00", "dr":"SSW", "g":"9.52", "f":"0,0"},
	{"t":"2018-02-22 00:24", "s":"7.78", "d":"210.00", "dr":"SSW", "g":"8.75", "f":"0,0"},
	{"t":"2018-02-22 00:30", "s":"8.94", "d":"207.00", "dr":"SSW", "g":"9.33", "f":"0,0"},
	{"t":"2018-02-22 00:36", "s":"8.55", "d":"207.00", "dr":"SSW", "g":"9.14", "f":"0,0"},
	{"t":"2018-02-22 00:42", "s":"8.75", "d":"211.00", "dr":"SSW", "g":"8.94", "f":"0,0"},
	{"t":"2018-02-22 00:48", "s":"8.36", "d":"207.00", "dr":"SSW", "g":"8.75", "f":"0,0"},
	{"t":"2018-02-22 00:54", "s":"7.39", "d":"206.00", "dr":"SSW", "g":"8.36", "f":"0,0"},
	{"t":"2018-02-22 01:00", "s":"6.80", "d":"197.00", "dr":"SSW", "g":"7.58", "f":"0,0"},
	{"t":"2018-02-22 01:06", "s":"6.22", "d":"190.00", "dr":"S", "g":"7.19", "f":"0,0"},
	{"t":"2018-02-22 01:12", "s":"6.61", "d":"184.00", "dr":"S", "g":"6.80", "f":"0,0"},
	{"t":"2018-02-22 01:18", "s":"4.08", "d":"189.00", "dr":"S", "g":"6.80", "f":"0,0"},
	{"t":"2018-02-22 01:24", "s":"7.78", "d":"181.00", "dr":"S", "g":"9.91", "f":"0,0"},
	{"t":"2018-02-22 01:30", "s":"10.11", "d":"181.00", "dr":"S", "g":"12.05", "f":"0,0"},
	{"t":"2018-02-22 01:36", "s":"10.50", "d":"185.00", "dr":"S", "g":"10.69", "f":"0,0"},
	{"t":"2018-02-22 01:42", "s":"8.75", "d":"187.00", "dr":"S", "g":"10.11", "f":"0,0"},
	{"t":"2018-02-22 01:48", "s":"8.16", "d":"189.00", "dr":"S", "g":"8.75", "f":"0,0"},
	{"t":"2018-02-22 01:54", "s":"7.58", "d":"192.00", "dr":"SSW", "g":"8.55", "f":"0,0"},
	{"t":"2018-02-22 02:00", "s":"6.80", "d":"194.00", "dr":"SSW", "g":"7.58", "f":"0,0"}
	]} 
	//** "t" = date and time
	//** "s" = wind speed in Knots
	//** "d" = true compass direction
	//** "dr" = direction
	//** "g" = gus in Knots