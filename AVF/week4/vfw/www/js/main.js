
//*************************************************
//***
//***    By: Joel Zyla
//***    IOS Phonegap Application
//***    AVF 1306
//***
//*************************************************



//************** Begin Home Page ******************

$("#homepage").on('pageinit', function () {
	console.log("Demo page loaded!");



	//change button text based on whether iPad or iPhone
	var myDeviceInfo = device.name;
	if ( "iPad" == myDeviceInfo ) {
		$("#deviceInfoPage").text("iPad Info");
	}
	if ( myDeviceInfo == "iPhone" ) {
		$("#deviceInfoPage").text("iPhone Info");
	}
	else {
		$("#deviceInfoPage").text("Device Info");
	}
	//correct isue where button size messes up(loses padding) when replacing the button text.
	$("#deviceInfoPage").css('padding',"0.6em 20px");

});


//************** Begin Camera Page *************
$("#camerapage").on('pageinit', function () {
	console.log("Camera page loaded!");


	$("#takePicture").on('click', function () {

		//open camera, put image on demo page.
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
		    destinationType: Camera.DestinationType.FILE_URI }); 

		function onSuccess(imageURI) {
		    var image = document.getElementById('myImage');
		    image.src = imageURI;
		    
		}
		function onFail(message) {
		    console.log('Failed because: ' + message);
		}
	});

});

//************** Begin Device Info Page *************
$("#deviceinfopage").on('pageinit', function () {
	console.log("Camera page loaded!");

	//Display device properties
	$("#deviceProperties").append("Device Name: " + device.name + "<br />" + "Device Cordova: " + device.cordova + "<br />" + "Device Platform: " + device.platform + "<br />" + "Device UUID: " + device.uuid + "<br />" + "Device Model: " + device.model + "<br />" + "Device Version: " + device.version  + "<br />");
});


//************** Begin Instagram Page *************

$("#instagrampage").on('pageinit', function () {
	console.log("Instagram pageinit loaded!");
	//hide previous and next buttons. they will be shown based on scroll position
	$('.prevnextButtons').hide();
	// $(".prevnextButtons").hide();

	//listen for swipe to open left panel
	$("#instagrampage").on( "swipeleft swiperight", function( e ) {
		if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
			if ( e.type === "swiperight"  ) {
				$( "#left-panel" ).panel( "open" );
			} 
		}
	});
	
	//open instagram images in child browser
	$('#instaDiv').on('click', 'li', function(e) {
		e.preventDefault();
		var url = $(this).children('a').attr('href');
		console.log(url);
		window.open(url, '_blank', 'location=yes');
	  	console.log("instaLink CLICKED WOOHOOOOOOOOO about time!");
	});

	//array to determine block class. jquery grid requires use of blocks.
	var instaBlock = new Array();
	instaBlock[0] = "ui-block-a";
	instaBlock[1] = "ui-block-b";
	instaBlock[2] = "ui-block-c";


	//ajax to get instagram data. default 
	$(function() {
	    $.ajax({
	    	type: "GET",
	        dataType: "jsonp",
	        cache: false,
	        //url: "https://api.instagram.com/v1/locations/search?lat=48.858844&lng=2.294351?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        // url: "https://api.instagram.com/v1/media/popular?&callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
	        url: "https://api.instagram.com/v1/tags/snow/media/recent?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a&count=30",
	        success: function(data) {
	        	console.log("Instagram popular ajax request success!");
	        	console.log(data);
	        	// loop through instagram data as we display
	        	// loop through instaBlock array to determine block
	        	var instaCount = 0;
	            for (var i = 0; i < 14; i++) {
	            	if (instaCount > 2) {
	            		instaCount = 0;
	            	}
            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
            		// console.log(instaCount); 
      				instaCount ++;
	      		};  

				$(".instaNext").on('click', function () {
					$('.prevnextButtons').hide(0);
					$("#instaDiv").html("");
					var instaCount = 0;
		            for (var i = 14; i < 29; i++) {
		            	if (instaCount > 2) {
		            		instaCount = 0;
		            	}
		        		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
		        		// console.log(instaCount); 
		  				instaCount ++;
		      		};            
				}); 

				$(".instaPrev").on('click', function () {
					$('.prevnextButtons').hide(0);
					$("#instaDiv").html("");
					var instaCount = 0;
		            for (var i = 0; i < 14; i++) {
		            	if (instaCount > 2) {
		            		instaCount = 0;
		            	}
		        		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
		        		// console.log(instaCount); 
		  				instaCount ++;
		      		};            
				});                   
	        }
	    });

	});


	//This popular endpoint works every time. See the nearme endpoint which works 1/3 of the time in the next section below.
	$("#instaPopular").on('click', function () {
		console.log("Instagram popular clicked!");
		$( "#left-panel" ).panel( "close" );
		$("#instaDiv").html("");
		$('#instaDiv').on('click', 'li', function(e) {
			e.preventDefault();
			var url = $(this).children('a').attr('href');
			console.log(url);
			window.open(url, '_blank', 'location=yes');
		});

		var instaBlock = new Array();
		instaBlock[0] = "ui-block-a";
		instaBlock[1] = "ui-block-b";
		instaBlock[2] = "ui-block-c";

		$(function() {
		    $.ajax({
		    	type: "GET",
		        dataType: "jsonp",
		        cache: false,
		        url: "https://api.instagram.com/v1/media/popular?callback=?&amp;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
		        success: function(data) {
		        	console.log("Instagram popular ajax request success!");
		        	console.log(data);
		        	var instaCount = 0;
		            for (var i = 0; i < 15; i++) {
		            	if (instaCount > 2) {
		            		instaCount = 0;
		            	}
	            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' class='instaLink' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></li></a></div>"); 
	      				instaCount ++;

		      		};      


		        }
		    });
		});
	});

	//The nearme endpoint only returns results 1/3 times. Even if entering the URL directly into the browser
	$("#instaNearMe").on('click', function () {
		console.log("Instagram Near Me clicked!");
		$( "#left-panel" ).panel( "close" );
		$("#instaDiv").html("");

		var instaBlock = new Array();
		instaBlock[0] = "ui-block-a";
		instaBlock[1] = "ui-block-b";
		instaBlock[2] = "ui-block-c";

		$(function() {
		    $.ajax({
		    	type: "GET",
		        dataType: "jsonp",
		        cache: false,
		        url: "https://api.instagram.com/v1/media/search?lat=48.858844&lng=2.294351;client_id=6a46e3b2ad4d45469ce7a38f5387986a",
		        success: function(data) {
		        	console.log("nearme ajax success");
		        	console.log(data);
		        	var instaCount = 0;
		            for (var i = 0; i < 15; i++) {
		            	if (instaCount > 2) {
		            		instaCount = 0;
		            	}
	            		$("#instaDiv").append("<li class='" + instaBlock[instaCount] + "'><a target='_blank' href='" + data.data[i].link +"'><img class='instaImage' src='" + data.data[i].images.standard_resolution.url +"' /></a></li>");  
	            		console.log(instaCount); 
	      				instaCount ++;
		      		};                    
		        }
		    });
		});
	});

	//Detect when a user has scrolled close to the bottom of the page.
	$(window).scroll(function() {

		// fix for issue where page hasn't fully rendered.
		// if($(window).scrollTop() > 1) { 

			//if window close to bottom
	    	if($(window).scrollTop() + $(window).height() > $(document).height() - 5) {
        		console.log("close to bottom");
	        	//Show next and previous buttons
        		$('.prevnextButtons').show(0);
        		// $('.prevnextButtons').css("display","normal");
			}

			//if window not close to bottom
			else {
				// $('.prevnextButtons').css("display","none");
				$('.prevnextButtons').hide(0);
			}
	   // }
	});


//End Instagram Page
});


//************** Begin Weather Page **************

$("#weatherpage").on('pageinit', function () {

	var onSuccess = function(position) {
		console.log(position.coords.latitude);
		console.log(position.coords.longitude);
   
		$(function() {
		    $.ajax({
		    	type: "GET",
		        dataType: "jsonp",
		        cache: false,
		        url: "https://api.forecast.io/forecast/5c0045fc0ae053e170f4174e9ec88ae4/" + position.coords.latitude + "," + position.coords.longitude + "?callback=?",
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
		        	};                       
		        }
	    	});
		});
	 };

	function onError(error) {
	    alert('code: '    + error.code    + '\n' +
	          'message: ' + error.message + '\n');
	}

	//get geolocation data from Forecast.io
	navigator.geolocation.getCurrentPosition(onSuccess, onError);

//End Weather Page
});



