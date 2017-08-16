$(document).ready(function() {


var geolocation = navigator.geolocation;
	  geolocation.getCurrentPosition
	 (showLocation, errorHandler)

  function errorHandler (err){
     var error = {
       1: 'permission denied',
       2: 'Position Unavailable',
       3: 'Request Timeout'
      };
      alert (  error[err.code]  )
}

function showLocation ( position ) {
  var lat = position.coords.latitude;
   var lon = position.coords.longitude;

  /*latlon converter goes here*/

  var baseUrl = "https://fcc-weather-api.glitch.me/";
 var tailUrl = "api/current?lon="+ lon +"&lat="+ lat;
     var webLink = baseUrl+tailUrl;


	 $.ajax ({
	      url:webLink,
	      type:'GET',
	      dataType:'json',
	      success : function getLocation(data){
	    $(".icon").attr('src', data.weather[0].icon);
          var deg = data.main.temp;
          var htmlAnsi = String.fromCharCode(176);
          var metricSys = "C";
          var imperialSys = "F";
          var combTemp= deg+htmlAnsi+metricSys;
	 	  $(".temp").text(combTemp);
          var state = data.name;
          var country = data.sys.country;
          var combo = state + ", " + country;
      $(".location").text(combo);

      $(".describe").text (data.weather[0].description);

/*Conversion from Metric system to Imperial system of measuring temperature*/

      $("#targetButton").on( "click", function ( )  {

       var farenheit = (deg * 9/5) + 32;

       var inFar = farenheit+htmlAnsi+imperialSys;

            $(".temp").text(inFar);

       });

},

	      error: function () {
                alert("Something went wrong with the server...");
            }

});

}

});
