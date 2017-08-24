$(document).ready(function() {
  var geolocation = navigator.geolocation;
  geolocation.getCurrentPosition(showLocation, errorHandler);

  function errorHandler(err) {
    var error = {
      1: "permission denied",
      2: "Position Unavailable",
      3: "Request Timeout"
    };
    alert(error[err.code]);
  }

  function showLocation(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    /*latlon converter goes here in version 2.0*/

    var baseUrl = "https://fcc-weather-api.glitch.me/";
    var tailUrl = "api/current?lon=" + lon + "&lat=" + lat;
    var webLink = baseUrl + tailUrl;

    $.ajax({
      url: webLink,
      type: "GET",
      dataType: "json",
      success: function getLocation(data) {
        $(".icon").attr("src", data.weather[0].icon);

        var temperatureInDeg = data.main.temp;
        var htmlAnsi = String.fromCharCode(176);
        var metricSys = "C";
        var imperialSys = "F";
        var metricTemp = temperatureInDeg + htmlAnsi + metricSys;

        /*Conversion of Temperature from Metric system to Imperial System */

        var temperatureInFar = Math.round(
          (temperatureInDeg * 9 / 5 + 32) * 10 / 10
        );
        var imperialTemp = temperatureInFar + htmlAnsi + imperialSys;

        /*Conversion Ends*/

        $(".temp").text(metricTemp);
        var locality = data.name;
        var country = data.sys.country;
        var localityAndCountry = locality + ", " + country;
        $(".state").text(localityAndCountry);

        $(".describe").text(data.weather[0].description);

        $("#togBtn").on("click", function() {
          if ($(".temp").html() == metricTemp) {
            $(".temp").html(imperialTemp);
          } else {
            $(".temp ").html(metricTemp);
          }
        });
      },

      error: function() {
        alert("Something went wrong with the server...");
      }
    });
  }
});
