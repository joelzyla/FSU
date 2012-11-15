// Joel M. Zyla
// SDI 1211
// Project 3
alert("JavaScript works!");



//LIBRARY
var myLibrary = function() {
	
//FUNCTION 1 - Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
	var checkNumberic = function(val) {
		if(isnan(val)){
			return false;	
		} else {
			return true
		}
//FUNCTION 2 - Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var checkName = function(val){
	   	if (val === "Lee") {
		   	return true;	
	   	} else {
		   	return false;
	   	}
	   	}
    
//FUNCTION 3 - Find the total value of just the numbers in an array, even if some of the items are not numbers.
//FUNCTION 4 - Does a string follow a 123-456-7890 pattern like a phone number?
//FUNCTION 5 - Is the string a URL? (Does it start with http: or https:?)




//Return object to capture what is being returned by the internal function.
//This function will return a value to myLibrary which then returns it to the code when called upon.
	return {
		"checkNumeric": checkNumeric,
		"checkName": checkName
	}
	
//END OF LIBRARY
}
