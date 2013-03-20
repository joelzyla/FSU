
//By Joel Zyla

$('#home').on('pageinit', function () {
	//code needed for home page goes here

	$("#browseSciTech").on('click', function () {

		$(function(){
			console.log("browse button click event success");
			$.ajax({    
				url      : "jsonp.php",    
				type     : "GET",    
				//async    : false,
				dataType : "jsonp",    
				success  : function(data, status) {        
					console.log(status, data);  
					alert("JSONP GET SUCCESS");  
				},
				error: function(req, err){ 
					console.log('Errors: ' + err); 
				}
			});
			return false;
		});
	});

	$("#browsePolitics").on('click', function () {

		$(function(){
			console.log("browse button click event success");
			$.ajax({    
				url      : "xml.php",    
				type     : "GET",    
				//async    : false,
				dataType : "xml",    
				success  : function(data, status) {        
					console.log(status, data);  
					alert("XML GET SUCCESS");  
				},
				error: function(req, err){ 
					console.log('Errors: ' + err); 
				}
			});
			return false;
		});
	});



});
		// var jsonpfn = function(response){};

//http://api.bing.net/json.aspx?Appid=<AppID>&query=sushi&sources=web.


		// function search() {
		// 		var search = "&query=" + "apple";
		// 		var fullUri = serviceURI + AppId + search;
		// 		var head = document.getElementsByTagName('head');
		// 		var script = document.createElement('script');
		// 		script.type = "text/javascript";
		// 		script.src = fullUri;
		// 		head[0].appendChild(script);
		// 	}
		// function searchDone(results) {
		// 		var result = null;
		// 		var parent = document.getElementById('resultList');
		// 		parent.innerHTML = '';
		// 		var child = null;

		// 		for (var i = 0; i < results.SearchResponse.Image.Results.length; i++) {
		// 			result = results.SearchResponse.Image.Results[i];
		// 			child = document.createElement('li');
		// 			child.className = "resultlistitem";
		// 			child.innerHTML = '<a href="' + result.Url +'"><img src="' +
		// 			result.Thumbnail.Url +'" alt="' + result.Title +'" /></a>';
		// 			parent.appendChild(child);

		// 		}
		// 	}

		// var AppId = "iE8jByEWBpwij2mBe4JwzwCkRfgzEz8KrvAKdKS9YXg=";
		// var serviceURI = "http://api.bing.net/json.aspx?JsonType=callback&JsonCallback=searchDone&sources=image";



$('#additem').on('pageinit', function () {

		//$('#newSubmissionForm').css("display", "inline");
		//$('#items').css("display", "none");

		//var myForm = $('#addPositionForm');
		var myForm = $('form');
    	myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
				//var data = myForm.serializeArray();
				//var data = $('#newSubmissionForm').serialize();
				

		    //	var data = myForm.serializeArray();
				//console.log('First Data:' + data);	
			key = "";
    			storeData();	
			}

	});


		//var jsonData = {};
		//$.each($('form').serializeArray(), function() {
		 // jsonData[this.name] = this.value;
		//"myNewsCat": ["Category:", "Politics"], 
		//"myDate": ["Date:", "2013-03-13"],
		//"myTags": ["Tags:", "GOOG,google,glass"],
		//"myURL": ["URL:", "http://www.forbes.com/sites/kashmirhill/2013/03/15/google-glass-will-be-incredible-for-the-courtroom/"],
		//"myDescription": ["Description:", "Article about google glass being useful in court."],






	//strjsonData = json.stringify(jsonData);
	//console.log('JSON data:' + jsonData);



			
	//any other code needed for addItem page goes here
	$("#clearSubmissionsButton").on('click', function () {
        clearLocal();
        return false;
    });

	$("#displaySubmissionsButton").on('click', function () {
        getData();
        return false;
    });

	$("#newSubmissionButton").on('click', function () {
		window.location.reload();
		return false;
	});

	return false;
});



var contactGroups = ["--Select--", "Call", "Put", "Stock"], 
	checkValue, 
	AllorNoneValue = "No",
	errMsg = $('errors');


var autoFillData = function(){
	for (var n in json){
		var id = Math.floor(Math.random()*1000005);
		localStorage.setItem(id, JSON.stringify(json[n]));
	} 
};


var storeData = function(key){
	//	console.log('Second Data:' + key);

if(!key){ 

		var id = Math.floor(Math.random()*1000005);
		//console.log('Third Data:' + key);
	}else{
		id = key;
		//console.log('Fourth Data:' + key);
	}
console.log(key);


		//var stData = JSON.stringify(data);
		//console.log('Fifth Data:' + id + stData);

		//localStorage.setItem(id, data);
		//localStorage.setItem(id, data);

		var item 				= {};
			item.myNewsCat 		= ["Category: ", $("#myNewsCat").val()];
			item.myDate 		= ["Submission Date: ", $("#myDate").val()];
			item.myTags			= ["Running Date: ", $("#myTags").val()];
			item.myURL			= ["Properly Hydrated?: ", $("#myURL").val()];
			item.myDescription	= ["Running Comments: ", $("#myDescription").val()];

	// Saves the Data into Local Storage with JSON.stringify
	console.log(this.key);
	localStorage.setItem(id, JSON.stringify(item));
	alert("Position Saved!");
	getData();
	//location.reload();

	//localStorage.setItem(id, stData[n]);
	
}; 



var clearLocal = function(){
	if(localStorage.length === 0) {
		alert("There are no positions to delete.");
	}else{
		var ask = confirm("Are you sure you want to delete all positions?");
		if (ask===true) {
			localStorage.clear();
			window.location.reload(); 
			return false;
		}else{
			return false;
		}
	}
	return false;
};


var getData = function(id){
	//hide();
	$('#newSubmissionForm').css("display", "none");
	//$("#newSubmissionForm").parent().hide();
	//$("#displaySubmissionsButton").hide();
 	$('#clearSubmissionsButton').css("display", "inline");
	$("#newSubmissionButton").show();
	//$('#newSubmissionButton').css("display", "inline");
	$('#items').css("display", "inline");
	$("#displaySubmissionsButton").parent().hide();
// function hide() {
// 	$('#displaySubmissionsButton').css("display", "none");
// }
	//toggleControls("on");

	if(localStorage.length === 0){
		alert("You have not submitted any stories. Default data will be loaded.");
		autoFillData();
	}

	//$('#items').html("<p>hello there</p>");
	//console.log('test');

	//$('#items').append("<ul>");
	//$('#items').append("<img>");
	for (var i=0, len=localStorage.length; i<len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		//var obj = JSON.parse(value);

		//$('#items').append(obj);

		//var myId = Math.floor(Math.random()*1000005);
		//$('#items').append("<ul>");
		//console.log(obj.myNewsCat[1]);

		var myImgSource = "<img src=\"./img/" + obj.myNewsCat[1] + ".png\"</img>";
		//console.log(myImgSource);
		$('#items').append(myImgSource);
		//$('#items').append('<img id="myId">')
		//$('#items').append($('img')).attr("src", mySource);
			for (var n in obj){
				//var itemValues = (obj[n][0] + " " + obj[n][1] + "</br>").html();
				var itemValues = obj[n][0] + " " + obj[n][1];


				//$('<li>' + itemValues + '</li>').appendTo('.formObj');
				//console.log("the image name is" + obj.newscat[1]);
				//$('#items').append(key, value);
				var makeLi = $('#items').append("<li>" + itemValues + "</li>");
				//var paraLinks = $('<p></p>').appendTo(makeLi);
				
			} 
			console.log("getData", key);
			//editDeleteButtons(key);
			$('#items').append(editDeleteButtons(key), "</br>");
		}

};//***END OF GETDATA

var getImage = function(tradeType, makeSubList){
	var imageLi = $('#items').append($('li'));
	$('makeSubList').append($('imageLi'));
	var newImg = $('#items').append($('img'));

	//var newImg = document.createElement('img');

	//var setSrc = newImg.setAttribute("src", "img/" + tradeType + ".png")

	$('imageLi').append($('newImg'));

	//imageLi.appendChild(newImg);
};



var editDeleteButtons = function(key) {
	console.log("editDeleteButtons", key);
	var editButton = $('<a></a>').attr({
		"href": "#",
		"class": "editButton",
		"data-key" : key,
		"data-role": "button",
		"data-inline": "true"
	}).html('Edit Submission').appendTo($('#items'));
	
	var deleteButton = $('<a></a>').attr({
		"href": "#",
		"class": "deleteButton",
		"data-key" : key,
		"data-role": "button",
		"data-theme": "a",
		"data-inline": "true"
	}).html('Delete Submission').appendTo($('#items'));

//$(".myClass").css("border","3px solid red")

	
	//$(".deleteButton").on('click', function () {

	//	key = $(this).data('key'); 
  //      deleteItem(key);
  //      return false;
  //  });


$(".deleteButton").on('click', function(e){
	e.preventDefault();
	key = $(this).data('key'); 
	localStorage.removeItem($(this).data('key'));
	console.log($(this).data('key') + " deleted!");
	window.location.reload();

	//$("item").html("");
	})
//});

    $(".editButton").on('click', function () {
    	key = $(this).data('key');
        editItem(key);
        return false;
        window.location.reload();
    });
    return false;
};


var	deleteItem = function (key){
	var ask = confirm("Are you sure you want to delete this position?");
	if(ask){
		alert("The position has been deleted.");
		localStorage.removeItem(key);
		//window.location.reload(); //refreshes teh page
	}else{
		alert("The position was not deleted.");
	}
	return false;
}; 


var editItem = function(key) {
	console.log("editItem", key);
	// Grabs data from our item from Local Storage
	var value = localStorage.getItem(key);
	console.log("editItem key", key);
	var item = JSON.parse(value);
	console.log("item", item);
	console.log("item.myNewsCat[1] : ", item.myNewsCat[1]);

	$('#newSubmissionForm').css("display", "inline");

	// Populates the Form Fields with current LocalStorage Values
	$('#myNewsCat').val(item.myNewsCat[1]);
	$('#myDate').val(item.myDate[1]);
	$('#myTags').val(item.myTags[1]);
	$('#myURL').val(item.myURL[1]);
	$('#myDescription').val(item.myDescription[1]);
	$('submit').value = "Save Changes";
	var editSubmit = $('submit');
	editSubmit.key = key;
	return false;
};









//PHP can become anything
//can become html, xml, json, javascript
//will end up with script pointing to remote location grabbing file
//linking to a js file would be static
//by linking to php we are dynamic, and can change what we are
//must use url as data delivery method
//this is called get
//cannot use this technique with post


//<script type="text/javascript" src="http://api.search.live.net/json.aspx?Appid=[YOURAPIKEY]&sources=image&query=home&JsonType=callback&JsonCallback=processBingImages"></script>







// $(function(){
// 	$("#browseSciTech").on('click', function () {
// 		$.ajax({
// 			url: 'https://api.datamarket.azure.com/Bing/Search/v1/Composite?Sources=%27news%27&NewsCategory=%27rt_ScienceAndTechnology%27&NewsSortBy=%27Date%27',
// 			//data: {id: 10},
// 			type: 'GET',
// 			dataType: 'json',
// 			context: this,
// 			success: function(r){
// 				//response is json data
// 				console.log(r);
// 			},
// 			beforeSend: function(xhr){
// 				xhr.setRequestHeader('Authorization', 'Basic <encoded_username_and_app_key>);
// 			}
// 		});
// 	        return false;
// 	});
// });


//   $.ajax({
//             type: 'GET',
//             url: searchUri,
//             dataType: "json", 
//             context: this,
//             beforeSend: function(xhr){
//                 //base64 encoded: ignore:key
//                 xhr.setRequestHeader('Authorization', 'Basic <encoded_username_and_app_key>);
//             },
//             success: function(data,status){
//                 //parse data...                
//             }
//         });

// Replace <encoded_username_and_app_key> with a base64 encoded string, where string is composed of your app key prefixed by a colon

// psuedo code for creating <encoded_username_and_app_key>

// base64_encode(':' + <appKey>)





// //site JS
// //callback for ajax request
// //response will be javascript object(arguement response)
// var jsonpfn = function(response){}


// //dynamicly build script tag using .js
// //inject into page
// <script src="url"> 



// //getusers.php
// <?php
// 	$cb = $_GET["callback"];//retrieves value from the URL(variable cb)
// 	$response = $cb . "(" . $json . ");"; //takes name of function
// 	echo $response;


// $(function(){
// 	$("#browseSciTech").on('click', function () {
//         var user = "joel";  
//         var pwd = "iE8jByEWBpwij2mBe4JwzwCkRfgzEz8KrvAKdKS9YXg=";  
//         $.support.cors = true;  
//         $.ajax({  
//             type: "GET",  
//             beforeSend: function (xhr) {  
//                 var bytes = Crypto.charenc.Binary.stringToBytes(user + ":" + pwd);  
//                 var base64 = Crypto.util.bytesToBase64(bytes);  
//                 xhr.setRequestHeader("Authorization", "Basic " + base64);  
//             },  
//             //url: "https://api.datamarket.azure.com/DataGovUK/MetOfficeWeatherOpenData/Site?$top=100&$format=json",  
//             url: "http://api.bing.net/json.aspx&JsonType=callback&JsonCallback=",
//             dataType: "json",                 
//             success: function (data) {  
//                 alert('success!');  
//             },  
//             error: function (jqXHR, textStatus, errorThrown) {                      
//                 alert(errorThrown.message);  
//             }  
//         	});  
// 	});
// });










