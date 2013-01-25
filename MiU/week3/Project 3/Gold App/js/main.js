$('#home').on('pageinit', function(){
	//code needed for home page goes here

	

});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#addPositionForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {},
			submitHandler: function() {
		var data = myForm.serializeArray(); //converts to arrays and objects
			storeData(data);
		}
	});
	

	//any other code needed for addItem page goes here





/*

	//Storage requires 2 things. Key and Data
var storeData =	function storeData(key) {
	if(!key){ //if not key
	//set up new random number
		var id = Math.floor(Math.random()*1000005);
	}else{
	//we want id to be key. maybe exisiting from local storage.
	//same key passed along from the editsumbit event handler.
	//to the validate function, and then passed here into the storeData function.
		id = key;
	}
		//We want to create a unique ID
		//var id = Math.floor(Math.random()*1000005); //will generate a random number between 1 and 0 multiplied by number.
		//Get data from our form fields and store them in an object.
		//Object properties will contain an array with the form label and the input values.
		getCheckbox(); //run function to get checkbox
		var item = {} //object
			item.callput = ["Contract type:", $("#callput").va()]; //groups is id of form element we created.
			//its getting the value. do this for each element
			//item.x where x is a property on the fly
			//between quotes is a label.
			item.ssymbol = ["Stock Symbol:", $("#ssymbol").val()];
			item.sprice = ["Strike Price:", $("#sprice").val()];
			item.allornone = ["All or none?", AllorNoneValue()];
			item.edate = ["Date:", $("#edate").val()];
			item.notes = ["Notes:", $("#notes").val()];
			//save data to local storeage using Stringify to convert our object to a string.
			//localstoreage ONLY stores strings. it's currently an array.
			localStorage.setItem(id, JSON.stringify(item)); //will convert item by string separated so we can get them.
			alert("Position Saved!");
		}

		//local storage can only store strings. can pass other things which are converted to strings.
		//localStorage.setItem("test", "test2");
		//alert(localStorage.key(0));


	function getCheckbox(){
		if($('allornone').checked){
			AllorNoneValue = $('allornone').value;
		}else{
			AllorNoneValue = "No"
		}
	}
*/







});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	console.log(data);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};