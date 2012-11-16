// Joel M. Zyla
// SDI 1211
// Project 3
alert("JavaScript works!");

//VARIABLES
var myNumber = 15.5;
var myString = "25";
var myArray = ["sit", 4, "speak", 6, 9];
var myRegexObj = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var myPhoneNumber = "304-254-1212"

//LIBRARY
var myLibrary = function() {
	
	//FUNCTION 1 - Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.
	var formatMoney = function(number) {
		//remove special characters from number
		number = number.toString().replace(/\$|\,/g,'');
		//If is a real number, lets convert it.
		if(isNaN(number))
			num = "0";
			//absolute value
			sign = (number == (number = Math.abs(number)));
			number = Math.floor(number*100+0.50000000001);
			cents = number%100;
			number = Math.floor(number/100).toString();
				//preceding 0 to cents
				if(cents<10)
					cents = "0" + cents;
						for (var i = 0; i < Math.floor((number.length-(1+i))/3); i++)
						number = number.substring(0,number.length-(4*i+3))+','+
						number.substring(number.length-(4*i+3));
						return (((sign)?'':'-') + '$' + number + '.' + cents);
	}

	//FUNCTION 2 - Given a string version of a number such as "42", return the value as an actual Number, such as 42.
	var stringToNumber = function(string) {
		var convertNumber = Number(string);
		return convertNumber;
	}

	//FUNCTION 3 - Find the total value of just the numbers in an array, even if some of the items are not numbers.
	var totalValue = function(myArray) {
		var myValue = 0;
		for (y=0;y<=myArray.length;y++){
			var myNumber = myArray[y];
			if (isNaN(myNumber) == false) {
				myValue = myValue +	myNumber;
			}
		}
	return myValue;
	}	

	//FUNCTION 4 - Does a string follow a 123-456-7890 pattern like a phone number?
	var ifPhoneNumber = function(myNumber) {
			if(myRegexObj.test(myNumber)) {
				return true;
			} else {
				return false;
			}
	}
			
			
	//FUNCTION 5 - Is the string a URL? (Does it start with http: or https:?)
	
	//Return object to capture what is being returned by the internal function.
	//This function will return a value to myLibrary which then returns it to the code when called upon.
	return {

		"formatMoney": formatMoney,
		"stringToNumber": stringToNumber,
		"totalValue": totalValue,
		"ifPhoneNumber": ifPhoneNumber
	}
	
//END OF LIBRARY
}

//FUNCTION CALLS. can be in the same or separate file. must call it ABOVE the assingment js in the html file
var myLibrary = new myLibrary();

console.log("The number converted to currency is " + myLibrary.formatMoney(myNumber) + ".");

console.log("The string converts to number " + myLibrary.stringToNumber(myString) + ".");

console.log("The total value of the numbers in the array is " + myLibrary.totalValue(myArray) + ".");

console.log("It is " + myLibrary.ifPhoneNumber(myPhoneNumber) + " that " + myPhoneNumber + " is in the correct phone number format (XXX-XXX-XXXX).");