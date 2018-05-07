

//**https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180422 20:00&end_date=20180423 13:00&interval=h&station=8658163&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json 

//var waterTemp = {"metadata":{"id":"8658163","name":"Wrightsville Beach","lat":"34.2133","lon":"-77.7867"}, "data": [{"t":"2018-04-22 20:00", "v":"64.6", "f":"0,0,0"},{"t":"2018-04-22 21:00", "v":"64.8", "f":"0,0,0"},{"t":"2018-04-22 22:00", "v":"64.6", "f":"0,0,0"},{"t":"2018-04-22 23:00", "v":"64.4", "f":"0,0,0"},{"t":"2018-04-23 00:00", "v":"64.6", "f":"0,0,0"},{"t":"2018-04-23 01:00", "v":"64.9", "f":"0,0,0"},{"t":"2018-04-23 02:00", "v":"65.3", "f":"0,0,0"},{"t":"2018-04-23 03:00", "v":"65.1", "f":"0,0,0"},{"t":"2018-04-23 04:00", "v":"64.9", "f":"0,0,0"},{"t":"2018-04-23 05:00", "v":"64.4", "f":"0,0,0"},{"t":"2018-04-23 06:00", "v":"64.0", "f":"0,0,0"},{"t":"2018-04-23 07:00", "v":"63.7", "f":"0,0,0"},{"t":"2018-04-23 08:00", "v":"63.5", "f":"0,0,0"},{"t":"2018-04-23 09:00", "v":"63.3", "f":"0,0,0"},{"t":"2018-04-23 10:00", "v":"63.3", "f":"0,0,0"},{"t":"2018-04-23 11:00", "v":"63.3", "f":"0,0,0"},{"t":"2018-04-23 12:00", "v":"63.1", "f":"0,0,0"},{"t":"2018-04-23 13:00", "v":"63.3", "f":"0,0,0"}]}


// notes: https://spring.io/guides/gs/consuming-rest-jquery/

$(document).ready(function() {
    $.ajax({
        url: "https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180425 20:00&end_date=20180426 13:00&interval=h&station=8658163&product=water_temperature&units=english&time_zone=gmt&application=ports_screen&format=json

    }).then(function(data) {
       console.log("AJAX call success");
       console.log(data.id);
       console.log(data.content);
    });
});