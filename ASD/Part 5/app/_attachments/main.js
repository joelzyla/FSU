

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

		var id = "submission" + Math.floor(Math.random()*1000005);
		console.log("No key, assigning: ", id);
		//console.log('Third Data:' + key);
	}else{
		id = key;
		console.log("Keep the current key: ", id);
		//console.log('Fourth Data:' + key);
	}

	//alert("Position Saved!");
	
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

		var name = "theyelencionedstisencoul";
		var pass = "PC7xxs58JYsyhqWfsYp6LPYe"
		function doLogin(name, pass) {
            $.couch.login({name:name, password:pass});


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


			// $.couch.login({
			//     name: "theyelencionedstisencoul",
			//     password: "PC7xxs58JYsyhqWfsYp6LPYe",
			//     success: function(data) {
			//         console.log(data);
			//     },
			//     error: function(status) {
			//         console.log(status);
			//     }
			// });



		 	$("#myAddStoryButton").on('click', function () {
		 		$('#mySubmissionForm')[0].reset();
		 		$('#mySubmissionForm').show();
		 		$('#myStories').hide();
		 		$('#myDisplayStoriesButton').show();
		 		// saveStories();
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



			//saveStories(data._id, data._rev);
			var saveStories = function(key, rev){
			//	console.log('Second Data:' + key);

				if(!key){ 

					var id = "submission" + Math.floor(Math.random()*1001);
					console.log("No key, assigning: ", id);
					//console.log('Third Data:' + key);
				}else{
					var id = key;

					console.log("Keep the current key: ", key);
					console.log("Keep the current revision: ", rev);
				}

				// var item 			= {};
				// item._rev           = rev;
				// item._id 			= id;
				// item.myCategory 	= $("#myNewsCat").val();
				// item.myDate			= $("#myDate").val();
				// item.myDescription	= $("#myDescription").val();
				// item.myTags			= $("#myTags").val();
				// item.myURL			= $("#myURL").val();


				var item = {
					'_rev' : rev,
					'_id' : id,
					'myNewsCat' : ["Category" , $("#myNewsCat").val()],
					'myDate' : ["Date" , $("#myDate").val()],
					'myDescription' : ["Description" , $("#myDescription").val()],
					'myTags' : ["Tags" , $("#myTags").val()],
					'myURL' : ["URL" , $("#myURL").val()]
				}





							// var couchNewsCat = submission.value.category;
							// var couchURL = submission.value.url;
							// var couchTags = submission.value.tags;
							// var couchDate = submission.value.date;
						 //    var couchDescription = submission.value.description;
				 console.log("FINAL ITEM", item);
				 $.couch.db('project5').saveDoc(item, {
				 	success: function(data){
				 		console.log("success", data);
				 		alert("Submission Saved");

				 	},
				 	error: function(data) {
				 		console.log("error", data);
				 	}
				 });


				//alert("Position Saved!");
				//window.location.reload();
			}; 








			$(function() {
				$.couch.urlPrefix = "https://cloudant.com/db/joelzyla";
				console.log("Stories page loaded");
				//https://cloudant.com/db/joelzyla/project5/_design/app/_view/myItems
				$.couch.db("project5").view("app/myItems", {
					success: function(data) {
						console.log(data);
						$('#myStories').empty();
						$.each(data.rows, function(index, submission) {
							var myID = submission.id;
							// var myRev = "data." + myID + "._rev";

							// console.log("myRev: ", myRev);
							console.log("myID: ", myID);
							var couchRev = submission.value._rev;
							console.log(couchRev);
							var couchNewsCat = submission.value.category;
							var couchURL = submission.value.url;
							var couchTags = submission.value.tags;
							var couchDate = submission.value.date;
						    var couchDescription = submission.value.description;

							$('#myStories').append(
							    "<ul>" + 
							    "<li>" + "Submission ID: " + myID + "</li>" +
						  		"<li>" + couchNewsCat[0] + ":" + couchNewsCat[1] + "</li>" +
						  		"<li>" + couchURL[0] + ":" + couchURL[1] + "</li>" +
						  		"<li>" + couchTags[0] + ":" + couchTags[1] + "</li>" +
						  		"<li>" + couchDate[0] + ":" + couchDate[1] + "</li>" +
						  		"<li>" + couchDescription[0] + ":" + couchDescription[1] +
					  		"</ul>"
					  		);
					  		$('#myStories').append(myEditDeleteButtons(myID), "</br>");
						});
					}
				});

				return false;
			});



			var myEditDeleteButtons = function(myID) {
				//console.log("Delete button is getting data" + data);
				//console.log("editDeleteButtons", key);
				console.log("Edit and delete buttons getting myID:", myID);
				var editButton = $('<a></a>').attr({
					"href": "#",
					"class": "myEditButton",
					"data-key" : myID,
					"data-role": "button",
					"data-inline": "true"
				}).html('Edit Submission').appendTo($('#myStories'));
				
				var deleteButton = $('<a></a>').attr({
					"href": "#",
					"class": "myDeleteButton",
					"data-key" : myID,
					"data-role": "button",
					"data-theme": "a",
					"data-inline": "true"
				}).html('Delete Submission').appendTo($('#myStories'));


				$(".myDeleteButton").on('click', function(e){
					e.preventDefault();

					deleteKey = $(this).data('key'); 
					console.log("deleteKey: ", deleteKey);

					var deleteConfirmation = confirm("Are you sure you want to delete this submission?");
					if(deleteConfirmation === true){	
						$.couch.db('project5').openDoc(deleteKey, {
							success: function(data){
								//var item = {};
								//item._id = data._id;
								//item._rev = data._rev;
								$.couch.db('project5').removeDoc(data, {
									success: function(data){
								window.location.reload();
								alert("Submission Deleted");
									}
								});
							}
						});
						return false;
					}
						return false;
					//});
					//localStorage.removeItem($(this).data('key'));
					//console.log($(this).data('key') + " deleted!");
					//window.location.reload();
				});


			    $(".myEditButton").one('click', function (e) {
			    	e.preventDefault();
			    	key = $(this).data('key');
			        editStory(key);
			        console.log("edit button click key: ", key);
			        //window.location.reload();
			        return false
			    });


			}

			var editStory = function(key) {
				console.log("editStory key:", key);
				$('#mySubmissionForm').show();
		 		$('#myStories').hide();
		 		$('#myDisplayStoriesButton').show();

				$.couch.db('project5').openDoc(key,{
					success: function(data){
						//var myID = submission.id;
						//var couchRev = submission.value._rev;
						console.log("edit item data", data);
						//console.log("category", data.submission.myCategory);
						$('#myNewsCat').val(data.myNewsCat[1]);
						$('#myDate').val(data.myDate[1]);
						$('#myTags').val(data.myTags[1]);
						$('#myURL').val(data.myURL[1]);
						$('#myDescription').val(data.myDescription[1]);

						//$('#submitStoryButton').val("Submit").attr({'key': data._id, 'rev': data._rev}); 
						console.log("editStory data._id: ", data._id);
						saveStories(data._id, data._rev);
						
					}
				});
			return false;
			};





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

			return false;
	});


