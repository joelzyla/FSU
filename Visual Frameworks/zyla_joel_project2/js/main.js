//Project 2: myOptions
//By Joel Zyla
//FSU Visual Frameworks 1212

// Wait until the DOM is ready. once page loads
// All of the javascript will run within this function
window.addEventListener("DOMContentLoaded", function() {


	//GetElementById Function
	//Type this any time to select HTML element
	//This function is a shortcut
	function $(x) {
		var theElement = document.getElementById(x);
		//When we use this function, we'll send it the ID of the html element.
		return theElement;
	}	

	// ***ARRAY FUNCTION***
	// Write an array functions that populates at least one select form element. 
	// This probably will be for your categories but you may have more select fields for other things depending on the topic you chose. 
	// This will REPLACE your static HTML select element(s) so that you can see an alterative way to create HTML elements.

	//Create select field element and populate with options
	function whichTrade() {
		//select field will go inside form tag.
		var formTag = document.getElementsByTagName("form"), //Gets all elements from form tag. form tag is an array because we used getElementsByTagName
			selectLi = $('callorput'), //variable for list item
			makeSelect = document.createElement('select'); // variable to create select element
			makeSelect.setAttribute("id", "callput"); //groups is name. 
			//new select element now has ID of groups. 
			//Will be dynamically creating a tag.lines above do this.
			//now populate select tab with options
		for (var i=0, j=contactGroups.length; i<j; i++) {
			//this is a loop
			var makeOption = document.createElement('option'); //option tag needs to be used
			var optText = contactGroups[i]; //text to be in option tag
			//this variable will grab the value in the array and save it
			//option tags need a value. 
			makeOption.setAttribute("value", optText);
			//now need to take that text and put it somewhere
			makeOption.innerHTML = optText;
			//that takes the text from the array and puts it between the options tags.
			//now we need to attach it to the document.
			makeSelect.appendChild(makeOption);
			//this all happens 4 times. The text inside the options tags get set
		}
		//now attach to the page
		selectLi.appendChild(makeSelect); //outside loop. only attach tag once
	}


	// ***SAVE DATA FUNCTION*** Now let's make our form actually do something. Let's have it save data submitted through your form into Local Storage
	// Write a saveData function that saves all data input into the form into Local Storage.
	// This means the values for your input, select, radio or checkboxes etc.
	// You should also save a key(random number) for your values(array or object). Each saved entry will be a key:value pair.
	// The key should be a random number which will create a unique id.
	// The value should be an array or object that contains all the values of your form field data.
	// This allows for our form to save multiple submissions into Local Storage without overwriting data.
	// Remember you can test your local storage by using the Web Inspector



	//Find value of checkbox
	function getCheckbox(){
		if($('allornone').checked){
			AllorNoneValue = $('allornone').value;
		}else{
			AllorNoneValue = "No"
		}
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
				$('optionform').style.display = "none";
				//make sure clear data link is showing. with an inline display.
				//clear is on an anchortag
				//want these next to eachother
				$('clear').style.display = "inline";
				//hide display data link because we are already looking at it.
				$('displayLink').style.display = "none";
				//Get back to my form. AddNew button
				//by default is display none. change to inline
				$('addNew').style.display = "inline";
				break;
			//do these when off
			case "off":
				//do these things when on. when i click the "display data link"
				//clear link or add new link etc. when i click the display data link and want to display values.
				//hide my form
				//just like css displaying none
				$('optionform').style.display = "block";
				//make sure clear data link is showing. with an inline display.
				//clear is on an anchortag
				//want these next to eachother
				$('clear').style.display = "inline";
				//hide display data link because we are already looking at it.
				$('displayLink').style.display = "inline";
				//Get back to my form. AddNew button
				//by default is display none. change to inline
				$('addNew').style.display = "none";
				//Lets remove the data from the form so they can put new data in
				$('items').style.display = "none";
				break;
			//do these by default
			default:
				return false;

		}


	}


	//Storage requires 2 things. Key and Data

		function storeData() {
			//We want to create a unique ID
			var id = Math.floor(Math.random()*1000005); //will generate a random number between 1 and 0 multiplied by number.
			//Get data from our form fields and store them in an object.
			//Object properties will contain an array with the form label and the input values.
			getCheckbox(); //run function to get checkbox
			var item = {} //object
				item.callput = ["Contract type:", $(callput).value]; //groups is id of form element we created.
				//its getting the value. do this for each element
				//item.x where x is a property on the fly
				//between quotes is a label.
				item.ssymbol = ["Stock Symbol:", $(ssymbol).value];
				item.sprice = ["Strike Price:", $(sprice).value];
				item.allornone = ["All or none?", AllorNoneValue];
				item.edate = ["Date:", $(edate).value];
				item.notes = ["Notes:", $(notes).value];
				//save data to local storeage using Stringify to convert our object to a string.
				//localstoreage ONLY stores strings. it's currently an array.
				localStorage.setItem(id, JSON.stringify(item)); //will convert item by string separated so we can get them.
				alert("Position Saved!");
			}

			//local storage can only store strings. can pass other things which are converted to strings.
			//localStorage.setItem("test", "test2");
			//alert(localStorage.key(0));
		

	// ***GET DATA*** So now that we have items saved into Local Storage. But that's not really useful to our user's since they can't see what they saved. That means we need to list out our saved data onto the screen.
	// Once data has been submitted through the form, we can grab the data submitted from Local Storage. 
	// List out your saved data from Local Storage on the additem.html document using the Display Data link you created. 
	// Make sure you hide the form when you display your data on screen as shown in the example screenshots. 
	// You can use these the following screenshots as a guideline. 
	// Your project's screen will vary from this example based on your topic.

	function getData(){
		//Toggle elements
		toggleControls("on");
		//write data from local storage to the browser
		var makeDiv = document.createElement('div');
		//give div an attribute. id of items
		makeDiv.setAttribute("id", "items");
		//inside div we'll format items in a way to be semantic. We shall use a list. ul
		var makeList = document.createElement('ul');
		//put the list into the div.
		//this creates a container for our elements.
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		//unordered list to hold the info we want to display
		//how many entries do we have? for loop
		for (var i=0, len=localStorage.length; i<len; i++){
			//this finds all entries(key pairs) in local storage
			//we want to put each into a list item in our list
			var makli = document.createElement('li');
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
			for (var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var SubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}



	function clearLocal() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.")
		}else{
			localStorage.clear(); // this will delete everything.
			alert("All contacts are deleted!");
			window.location.reload(); //windows destination fo page
			return false;
		}
	}



		//Variable defaults
		var contactGroups = ["--Select--", "Call", "Put"], 
			checkValue, 
			AllorNoneValue = "No"
		;
		//Call array function
		whichTrade();



		//Set link and submit click events
		var displayLink = $('displayLink');
		displayLink.addEventListener("click", getData);
		
		//listening for function called 
		var clearLink = $('clear');
		clearLink.addEventListener("click", clearLocal);

		var save = $('saveposition'); //id of save input from html page
		save.addEventListener("click", storeData);


// End of DOM
});














