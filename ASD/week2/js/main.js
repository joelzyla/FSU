
//By Joel Zyla

$('#home').on('pageinit', function () {
	//code needed for home page goes here
	return false;
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
				

		    	var data = myForm.serializeArray();
				console.log('First Data:' + data);	
    			storeData(data);	
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

	//for (var n in data){
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
	//}
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




		//	item.myNewsCat 		= ["Category: ", $("#myNewsCat").val()];
		//	item.myDate 		= ["Submission Date: ", $("#myDate").val()];
		//	item.myTags			= ["Running Date: ", $("#myTags").val()];
		//	item.myURL			= ["Properly Hydrated?: ", $("#myURL").val()];
		//	item.myDescription	= ["Running Comments: ", $("#myDescription").val()];











