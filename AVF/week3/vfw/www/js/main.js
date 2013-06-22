
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

	$("#takePicture").on('click', function () {

		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
		    destinationType: Camera.DestinationType.FILE_URI }); 

		function onSuccess(imageURI) {
		    var image = document.getElementById('myImage');
		    image.src = imageURI;
		    
		}

		function onFail(message) {
		    alert('Failed because: ' + message);
		}


	});

	var element = document.getElementById('deviceProperties');
    element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
                        'Device Cordova: '  + device.cordova + '<br />' + 
                        'Device Platform: ' + device.platform + '<br />' + 
                        'Device UUID: '     + device.uuid     + '<br />' + 
                        'Device Model: '    + device.model     + '<br />' + 
                        'Device Version: '  + device.version  + '<br />';

});



//************** Begin Instagram Page *************



$("#instagrampage").on( "swipeleft swiperight", function( e ) {
	if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
		if ( e.type === "swiperight"  ) {
			$( "#left-panel" ).panel( "open" );
		} 
	}
});
			


$("#instaNearMe").on('click', function () {
	console.log("Instagram near me clicked!");
	$( "#left-panel" ).panel( "close" );
	$("#instaDiv").html("");

	//array to determine block
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
	        url: "https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        success: function(data) {
	        	console.log("nearme ajax success");
	        	console.log(data);
	        	// loop through instagram data as we display
	        	// loop through instaBlock array to determine block
	        	var instaCount = 0
	            for (var i = 0; i < 15; i++) {
	            	if (instaCount > 2) {
	            		instaCount = 0
	            	}
            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></a></li>");  
            		//$("#instaDiv").append("<div class='" + instaBlock[instaCount] + "'><li><a target='_blank' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
            		console.log(instaCount); 
      				instaCount ++
	      		};                    
	        }
	    });
	});
});

$("#instaPopular").on('click', function () {
	console.log("Instagram popular clicked!");
	$( "#left-panel" ).panel( "close" );
	$("#instaDiv").html("");
	$('#instaDiv').on('click', 'li', function(e) {
		e.preventDefault();
		url = $(this).children('a').attr('href');
		console.log(url);
		window.open(url, '_blank', 'location=yes');
	  	console.log("instaLink CLICKED WOOHOOOOOOOOO about time!");
	});

	//array to determine block
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
	        //url: "https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        url: "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        success: function(data) {
	        	console.log("Instagram popular ajax request success!");
	        	console.log(data);
	        	// loop through instagram data as we display
	        	// loop through instaBlock array to determine block
	        	var instaCount = 0
	            for (var i = 0; i < 15; i++) {
	            	if (instaCount > 2) {
	            		instaCount = 0
	            	}
            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
            		// console.log(instaCount); 
      				instaCount ++
	      		};                    
	        }
	    });
	});
});

$("#instagrampage").on('pageinit', function () {
	function onConfirm(buttonIndex) {
	    alert('Swipe right to open the navigation!');
	}
	console.log("Instagram page loaded!");
	
	$('#instaDiv').on('click', 'li', function(e) {
		e.preventDefault();
		url = $(this).children('a').attr('href');
		console.log(url);
		window.open(url, '_blank', 'location=yes');
	  	console.log("instaLink CLICKED WOOHOOOOOOOOO about time!");
	});

	//array to determine block
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
	        //url: "https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        url: "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        success: function(data) {
	        	console.log("Instagram popular ajax request success!");
	        	console.log(data);
	        	// loop through instagram data as we display
	        	// loop through instaBlock array to determine block
	        	var instaCount = 0
	            for (var i = 0; i < 15; i++) {
	            	if (instaCount > 2) {
	            		instaCount = 0
	            	}
            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
            		// console.log(instaCount); 
      				instaCount ++
	      		};                    
	        }
	    });
	});
});



//************** Begin Weather Page **************

$("#weatherpage").on('pageinit', function () {
	// code for weather page goes here
	
	
	
		// Get Geo Coordinates
	var onSuccess = function(position) {
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
   
	//     alert('Latitude: '          + position.coords.latitude          + '\n' +
	//           'Longitude: '         + position.coords.longitude         + '\n' +
	//           'Altitude: '          + position.coords.altitude          + '\n' +
	//           'Accuracy: '          + position.coords.accuracy          + '\n' +
	//           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
	//           'Heading: '           + position.coords.heading           + '\n' +
	//           'Speed: '             + position.coords.speed             + '\n' +
	//           'Timestamp: '         + new Date(position.timestamp)      + '\n');
		$(function() {
		    $.ajax({
		    	type: "GET",
		        dataType: "jsonp",
		        cache: false,
		        url: "https://api.forecast.io/forecast/5c0045fc0ae053e170f4174e9ec88ae4/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?",
		        //url: "https://api.forecast.io/forecast/5c0045fc0ae053e170f4174e9ec88ae4/37.8267,-122.423?callback=?",
		        success: function(info) {
		        	console.log(info);
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
	 };

	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	}

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	
	
	
	

});



