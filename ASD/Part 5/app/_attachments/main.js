

//By Joel Zyla

$('#home').on('pageinit', function () {
	//code needed for home page goes here




	

$("#browseSciTech").on('click', function () {

		$(function() {
			console.log("browseSciTech click event success");
			$.ajax({    
				url      : "jsonp.php",    
				type     : "GET",    
				//async    : false,
				dataType : "jsonp",    
				success  : function(data, status) {        
					console.log(status, data);  
					alert("JSONP GET SUCCESS"); 
					displayJSONP(data); 
				},
				error: function(req, err) { 
					console.log('Errors: ' + err); 
				}
			});
			//return false;
		});
    
	});







	$("#browsePolitics").on('click', function () {

		$(function() {
			console.log("browsePolitics click event success");
			$.ajax({    
				url      : "xml.php",    
				type     : "GET",    
				//async    : false,
				dataType : "xml",    
				success  : function(data, status) {        
					console.log(status, data);  
					alert("XML GET SUCCESS"); 
					displayXML(data); 
				},
				error: function(req, err){ 
					console.log('Errors: ' + err); 
				}
			});
			return false;
		});
	});

});



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

var displayJSONP = function(myJSONP) {
	//$("#remoteDataFrontpage").html("<p>TEST</p>");
	// for (var i=0, len=myJSONP.length; i<len; i++){
			$("#remoteDataFrontpage").html("");
		for (var n in myJSONP){
			console.log(myJSONP);
			var jsonItems = n + " " + myJSONP[n];
			$("#remoteDataFrontpage").append("<li>" + jsonItems + "</li>");
			console.log(jsonItems);
		}
	// }

};

var displayXML = function(myXML) {
		$("#remoteDataFrontpage").html("");
		$("#remoteDataFrontpage").append("<ul></ul>");

		$(myXML).find('item').each(function(){
        var xmlCategory = $(this).find('Category').text();
        var xmlDate= $(this).find('Date').text();
        var xmlTags= $(this).find('Tags').text();
        var xmlURL= $(this).find('URL').text();
        var xmlDescription= $(this).find('Description').text();


        $("#remoteDataFrontpage").html(
        	"<li>" + xmlCategory + "</li>" +
        	"<li>" + xmlDate + "</li>" +
        	"<li>" + xmlTags + "</li>" +
        	"<li>" + xmlURL + "</li>" +
        	"<li>" + xmlDescription
        	).appendTo("#remoteDataFrontpage ul");
    });





		// assume that the XML above is in a string named "xml"    
		//var data = $.parseXML(myXML); 
		//var data = myXML;   
		// wrap the XML in a jQuery object to make it easier to work with    
		//var items = $( data );    
		//items.find("item").each(function(){        
			//var item = $(this);        
			//console.log("Category: ", item.find("Category"));    
		//});
	};


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

		var myImgSource = "<img src=\"" + obj.myNewsCat[1] + ".png</img>";
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
	$('imageLi').append($('newImg'));

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



	$(".deleteButton").on('click', function(e){
	e.preventDefault();
	key = $(this).data('key'); 
	localStorage.removeItem($(this).data('key'));
	console.log($(this).data('key') + " deleted!");
	window.location.reload();


	});


    $(".editButton").on('click', function () {
    	key = $(this).data('key');
        editItem(key);
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
	var value = localStorage.getItem(key);
	console.log("editItem key", key);
	var item = JSON.parse(value);
	console.log("item", item);
	console.log("item.myNewsCat[1] : ", item.myNewsCat[1]);
	$('#newSubmissionForm').css("display", "inline");
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

















	$("#browseStories").on('pageinit', function () {


			var myForm = $('form');
    		myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
			key = "";
    		saveStories();	
			}
			});
			$('#mySubmissionForm').hide(); 
			$('#myDisplayStoriesButton').hide();
			$('#myStories').show();

			// $('#mySubmissionForm').css("display", "none");
			// $('#myStories').css("display", "inline");



		 	$("#myAddStoryButton").on('click', function () {
		 		$('#mySubmissionForm').show();
		 		$('#myStories').hide();
		 		$('#myDisplayStoriesButton').show();
		 		return false;

		 		// $('#mySubmissionForm').css("display", "inline");
		 		// $('#myStories').css("display", "none");
			});



			$("#myDisplayStoriesButton").on('click', function () {
		 		$('#mySubmissionForm').hide();
		 		$('#myStories').show();
		 		$('#myDisplayStoriesButton').hide();

		 		// $('#mySubmissionForm').css("display", "inline");
		 		// $('#myStories').css("display", "none");
		 		return false;
			});



			var saveStories = function(key){
			//	console.log('Second Data:' + key);

				if(!key){ 

				var id = Math.floor(Math.random()*1000005);
				//console.log('Third Data:' + key);
				}else{
				id = key;
				//console.log('Fourth Data:' + key);
				}
				console.log(key);

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
	
			}; 








			$(function() {
				console.log("Stories page loaded");
//https://cloudant.com/db/joelzyla/project5/_design/app/_view/myItems
				$.couch.db("project5").view("app/myItems", {
					success: function(data) {
						console.log(data);
					}
				});

				return false;
			});
			return false;



				// $.ajax({    
				// 	url      : "_view/myItems",    
				// 	//type     : "GET",    
				// 	//async    : false,
				// 	dataType : "json",    
				// 	success  : function(data, status) {        
				// 		console.log(status, data);  
				// 		$.each(data.rows, function(index, submission){
				// 			console.log("submission.value: ", submission.value.category);
				// 			//console.log("submission.value category: ", submission.value.0);
				// 			var couchNewsCat = submission.value.category;
				// 			var couchURL = submission.value.url;
				// 			var couchTags = submission.value.tags;
				// 			var couchDate = submission.value.date;
				// 		    var couchDescription = submission.value.description;
				// 		    $('#myStories').append(
				// 		    "<ul>" +
				// 	  		"<li>" + couchNewsCat[0] + ":" + couchNewsCat[1] + "</li>" +
				// 	  		"<li>" + couchURL[0] + ":" + couchURL[1] + "</li>" +
				// 	  		"<li>" + couchTags[0] + ":" + couchTags[1] + "</li>" +
				// 	  		"<li>" + couchDate[0] + ":" + couchDate[1] + "</li>" +
				// 	  		"<li>" + couchDescription[0] + ":" + couchDescription[1] +
				// 	  		"</ul>"
				// 	  		);
				// 	  		$('#myStories').append(editDeleteButtons(key), "</br>");
				// 		});
				// 		//$('#myStories').listview('refresh');
				// 	},
				// 	error: function(req, err) { 
				// 		console.log('Errors: ' + err); 
				// 	}
				// });

	});


