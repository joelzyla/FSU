
//*************************************************
//***
//***    By: Joel Zyla
//***    IOS Phonegap Application
//***    AVF 1306
//***
//*************************************************



//************** Begin Demo Page ******************

$("#demopage").on('pageinit', function () {
	console.log("Demo page loaded!");
});



//************** Begin Instagram Page *************

$("#instagrampage").on('pageinit', function () {
	//code needed for instagram page goes here
	console.log("Instagram page loaded!");
	var instaBlock = new Array();
	instaBlock[0] = "ui-block-a";
	instaBlock[1] = "ui-block-b";
	instaBlock[2] = "ui-block-c";
	//ajax to get instagram data
	$(function() {
	    $.ajax({
	    	type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        url: "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        success: function(data) {
	        	// loop through instagram data as we display
	        	// loop through instaBlock array to determine block
	        	var instaCount = 0
	            for (var i = 0; i < 15; i++) {
	            	if (instaCount > 2) {
	            		instaCount = 0
	            	}
            		$("#instaDiv").append("<div class='" + instaBlock[instaCount] + "'><a target='_blank' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");  
            		console.log(instaCount); 
      				instaCount ++
	      		};  

	  			console.log(data);                       
	        }
	    });
	});
});



//************** Begin Weather Page **************

$("#weatherpage").on('pageinit', function () {
	// code for weather page goes here
	$(function() {
	    $.ajax({
	    	type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        url: "https://api.forecast.io/forecast/5c0045fc0ae053e170f4174e9ec88ae4/37.8267,-122.423?callback=?",
	        success: function(info) {
	        	console.log(info);
	        	console.log(info.daily.icon);
	        	for (var i = 0; i < 1; i++) {
	        		$(".weatherDiv").append("<img class='weatherImage' src='img/" + info.daily.icon + ".png' />"); 
	        		$(".weatherDiv").append("<p id='currentWeatherItem'>" + info.hourly.summary + "</p>");
	        		$(".weatherDiv").append("<ul>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Cloudcover: " + info.timezone + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Cloudcover: " + info.currently.cloudCover + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Dew Point: " + info.currently.dewPoint + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Humidity: " + info.currently.humidity + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Ozone: " + info.currently.ozone + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Precipitation Intensity: " + info.currently.precipIntensity + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Pressure: " + info.currently.pressure + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Temperature: " + info.currently.temperature + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Time: " + info.currently.time + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Visibility: " + info.currently.visibility + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Wind Bearing: " + info.currently.windBearing + "</li>");
	        		$(".weatherDiv").append("<li id='currentWeatherItem'>Wind Speed: " + info.currently.windSpeed + "</li>");
	        		$(".weatherDiv").append("</ul>");
	        		//<img src='file:///Users/joelzyla/Desktop/FSU/AVF/week2/ios/vfw/www/img/clear-day.png' />
	        	};                       
	        }
	    });
	});
});



