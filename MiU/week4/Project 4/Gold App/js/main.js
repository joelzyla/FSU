//Project 2: myOptions
//By Joel Zyla
//MUI

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#addPositionForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data, key){ //Don't need key yet, but may once I start passing it around for edit item etc.

		var id = Math.floor(Math.random()*1000005);
	//we want id to be key. maybe exisiting from local storage.
	//same key passed along from the editsumbit event handler.
	//to the validate function, and then passed here into the storeData function.
		id = key;
		//We want to create a unique ID
		//var id = Math.floor(Math.random()*1000005); //will generate a random number between 1 and 0 multiplied by number.
		//Get data from our form fields and store them in an object.
		//Object properties will contain an array with the form label and the input values.
		var item = data;
			localStorage.setItem(id, JSON.stringify(item)); //will convert item by string separated so we can get them.
			alert("Position Saved!");
		console.log(data);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

