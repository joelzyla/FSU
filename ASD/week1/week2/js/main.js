
//By Joel Zyla


$('#home').on('pageinit', function () {
	//code needed for home page goes here
	return false;
	});
$('#additem').on('pageinit', function () {

	var myForm = $('#addPositionForm');
    myForm.validate({
		invalidHandler: function(form, validator) {
		},
		submitHandler: function() {

		//var data = $( '#test' ).serializeObject()
		var data = myForm.serialize();


		//var data = "test";

	    //console.log(data);

		//var data = myForm.serialize();

		//var data = myForm.serializeArray();

		//var data = myForm.serialize();
		console.log('First Data:' + data);
		storeData(data);

		}
	});
		
	//any other code needed for addItem page goes here
	$("#clearPositionsButton").on('click', function () {
        clearLocal();
        return false;
    });

	$("#displayPositionsButton").on('click', function () {
        getData();
        return false;
    });

	$("#addPositionButton").on('click', function () {
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


var storeData = function(data, key){
		console.log('Second Data:' + data);
if(!key){ 
		var id = Math.floor(Math.random()*1000005);
		console.log('Third Data:' + data);
	}else{
		id = key;
		console.log('Fourth Data:' + data);
	}

	for (var n in data){
		var stData = JSON.stringify(data);
		console.log('Fifth Data:' + id + stData);

		//localStorage.setItem(id, data);
		localStorage.setItem(id, JSON.stringify(data));
	}
	alert("Position Saved!");

}; 


var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this position?");
	if(ask){
		alert("The position has been deleted.");
		localStorage.removeItem(this.key);
		window.location.reload(); //refreshes teh page
	}else{
		alert("The position was not deleted.");
	}
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




var getData = function(){
	$('#addPositionForm').css("display", "none");
	$('#displayPositionsButton').css("display", "none");
	$('#clearPositionsButton').css("display", "inline");
	$('#addPositionButton').css("display", "inline");
	$('#items').css("display", "inline");

	//toggleControls("on");

	if(localStorage.length === 0){
		alert("You have not submitted any stories. Default data will be loaded.");
		autoFillData();
	}

	//$('#items').html("<p>hello there</p>");
	//console.log('test');

	$('#items').append("<ul>");
	//$('#items').append("<img>");
	for (var i=0, len=localStorage.length; i<len; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var myId = Math.floor(Math.random()*1000005);
		$('#items').append("<ul>");
		//console.log(obj.myNewsCat[1]);
		//var myImgSource = "<img src=\"./img/" + obj.myNewsCat[1] + ".png\"</img>";
		//console.log(myImgSource);
		//$('#items').append(myImgSource);
		//$('#items').append('<img id="myId">')
		//$('#items').append($('img')).attr("src", mySource);
			for (var n in obj){
				//var itemValues = (obj[n][0] + " " + obj[n][1] + "</br>").html();
				var itemValues = obj[n][0] + " " + obj[n][1];


				//$('<li>' + itemValues + '</li>').appendTo('.formObj');
				//console.log("the image name is" + obj.newscat[1]);
				$('#items').append("<li>" + itemValues + "</li>");
			} 
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


var toggleControls = function(n) {
	switch(n){  
		case "on":
			$('#addPositionForm').css("display", "none");
			$('#clearPositionsButton').css("display", "inline");
			$('#displayPositionsButton').css("display", "none");
			$('#addPositionButton').css("display", "inline");
			$('#items').css("display", "inline");
			break;
		case "off":
			$('#addPositionForm').css("display", "block");
			$('#clearPositionsButton').css("display", "inline");
			$('#displayPositionsButton').css("display", "inline");
			$('#addPositionButton').css("display", "none");
			$('#items').css("display", "none");
			break;
		default:
			return false;
	}
	return false;
};


