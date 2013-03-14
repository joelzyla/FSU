
//By Joel Zyla


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



$("#clearPositionsButton").bind('click', function(){
             clearLocal();
           }
      );

$("#displayPositionsButton").bind('click', function(){
             getData();
           }
      );

});




		var contactGroups = ["--Select--", "Call", "Put", "Stock"], 
			checkValue, 
			AllorNoneValue = "No",
			errMsg = $('errors')
		;




//The functions below can go inside or outside the pageinit function for the page in which it is needed.
var autoFillData = function (){
		//The actual JSON OBJECT data required for this to work is coming from our
		//json.js file which is loaded from our html page.
		//We need to store the JSON OBJECT into local storage.
		//We will loop through the object putting it into LS.
		for (var n in json){
			var id = Math.floor(Math.random()*1000005);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
			 //json is our json object. they can see eachother because both files loaded in same page.
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
		if(localStorage.length === 0) {
			alert("There are no positions to delete.")
		}else{
			var ask = confirm("Are you sure you want to delete all positions?");
			if (ask==true) {
			localStorage.clear(); // this will delete everything.
		//	alert("All positions have been removed!");
			window.location.reload(); //windows destination fo page
			return false;
			} else
			return false;
		}
};














$('.container').append($('h2'));




	function getData(){
		//Toggle elements
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no positions saved in local storage. Default data will be loaded.");
			autoFillData();
		}
		//write data from local storage to the browser
		
		var makeDiv = $('#items').append($('div'));
		//var makeDiv = document.createElement('div');
		
		//give div an attribute. id of items
		//makeDiv.setAttribute("id", "items");
		//inside div we'll format items in a way to be semantic. We shall use a list. ul
		$('.container').append($('h2'));
		var makeList = document.createElement('ul');
		//put the list into the div.
		//this creates a container for our elements.
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('#items').css("display", "block");
		//unordered list to hold the info we want to display
		//how many entries do we have? for loop
		for (var i=0, len=localStorage.length; i<len; i++){
			//this finds all entries(key pairs) in local storage
			//we want to put each into a list item in our list
			var makeli = document.createElement('li');
			
			var linksLi = document.createElement('li');
			
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key); //this gets the value of the item with this key.
			//getting key number from localstorage.key. i determines the value by looping though.
			//value is a gaint string. We need to get it back into an object.
			var obj = JSON.parse(value); //this takes the string and parses into an object.
			//let's loop through the data in this object we made, to put it on the page.
			//loop inside a loop
			//list items need to be in unordered list
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.callput[1], makeSubList);
			for (var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
				
			}
			//pass each item's key into this function as it loops through
			makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons for each item in localstorage
		}
	}
	
	function getImage(tradeType, makeSubList){
		//get the image for the right contract type
		var imageLi = document.createElement('Li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "img/" + tradeType + ".png")
		imageLi.appendChild(newImg);
	}
	
	//Make item links function
	//this will create the edit and delete buttons for each stored item when displayed
	function makeItemLinks (key, linksLi){
		//add edit single item link
		var editLink = document.createElement('a');
		editLink.href = "#";
		//we need to know which unique identifier
		//the value "key" will come from localStorage.key
		editLink.key = key;
		//Give our button text
		var editText = "Edit position";
		//Run the function to actually edit the item
		editLink.addEventListener("click", editItem);
		//Assign text for anchor tag
		editLink.innerHTML = editText; //set to the text we created
		//append the elemnt we created to the empty list item in getData function
		linksLi.appendChild(editLink);
		
		//add linebreak
		var breakTag = document.createElement('br');
		//append to page
		linksLi.appendChild(breakTag);
		
		//now delete link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete position";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
		
		
	}
	
	function autoFillData(){
		//The actual JSON OBJECT data required for this to work is coming from our
		//json.js file which is loaded from our html page.
		//We need to store the JSON OBJECT into local storage.
		//We will loop through the object putting it into LS.
		for (var n in json){
			var id = Math.floor(Math.random()*1000005);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
			 //json is our json object. they can see eachother because both files loaded in same page.
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this position?");
		//confirm has cancel button or okay button
		if(ask){
			alert("The position has been deleted.");
			localStorage.removeItem(this.key);
			window.location.reload(); //refreshes teh page
		}else{
			alert("The position was not deleted.");
		}
	}

	function editItem(){
		//grab the data from our item from local storage
		//when we click the button, we will go back to the form page and populate them with data from localstorage
		var value = localStorage.getItem(this.key);
		//above in editLinnk we created a property called key
		//because we added event listener to editLink, we can access its key property.
		//referring back to itself.
		//the edititemfuction is attached to the var editText above in getdata by addeventlisteener
		var item = JSON.parse(value);//this does the opposite of stringify(turns back into object)
		toggleControls("off"); //hides the displayed items and shows our form again so we can edit item
		//populate the form fields with the current localStorage values
		
		//assign this the value of our object
		//property of group. index of 1
		//1 grabs the value(for the form items)
		//do for each form element
		$('callput').value = item.callput[1];
		$('ssymbol').value = item.ssymbol[1];
		$('sprice').value = item.sprice[1];
		$('allornone').value = item.allornone[1];
		$('edate').value = item.edate[1];
		$('notes').value = item.notes[1];
		//set attribute of checkbox again bc value is static. need to change checked attribute of button
		if (item.allornone[1] == "Yes"){ //sees if allornone is yes in localstorage
			$('allornone').setAttribute("checked", "checked"); //check teh checkbox
		}
		// remove initial listener from input 'save contact' button.
		//initially we call storeData function, but when editing item we dont want to run this.
		save.removeEventListener("click", storeData);
		//change submit button value to say Edit Button
		$('saveposition').value = "Finished editing";
		var editSubmit = $('saveposition');
		editSubmit.addEventListener("click", validate);
		//save the key we established in edititem fuction
		//above we added editLink.key = key
		//Save tehy key value established in this function as a property of the editSubmit event 
		//so we can use that value when we save the data we edited.
		editSubmit.key = this.key;
		
	}

	function toggleControls(n){

		switch(n){  //switchcase conditional
			//we will dynamicaly change css to change properties of html element
			//to show or not show the element
			case "on":
				//do these things when on. when i click the "display data link"
				//clear link or add new link etc. when i click the display data link and want to display values.
				//hide my form
				//just like css displaying none
				//$('optionform').style.display = "none";
				$('#addPositionForm').css("display", "none");
				//make sure clear data link is showing. with an inline display.
				//clear is on an anchortag
				//want these next to eachother
				$('#clearPositionsButton').css("display", "inline");
				//hide display data link because we are already looking at it.
				$('#displayPositionsButton').css("display", "none");
				//Get back to my form. AddNew button
				//by default is display none. change to inline
				$('#addPositionButton').css("display", "inline");
				break;
			//do these when off
			case "off":
				//do these things when on. when i click the "display data link"
				//clear link or add new link etc. when i click the display data link and want to display values.
				//hide my form
				//just like css displaying none
				$('#addPositionForm').css("display", "block");
				//make sure clear data link is showing. with an inline display.
				//clear is on an anchortag
				//want these next to eachother
				$('#clearPositionsButton').css("display", "inline");
				//hide display data link because we are already looking at it.
				$('#displayPositionsButton').css("display", "inline");
				//Get back to my form. AddNew button
				//by default is display none. change to inline
				$('#addPositionButton').css("display", "none");
				//Lets remove the data from the form so they can put new data in
				$('#items').css("display", "none");
				break;
			//do these by default
			default:
				return false;

		}


	}

