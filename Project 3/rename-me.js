// Joel M. Zyla
// SDI 1211
// Project 3

alert("JavaScript works!");


//************************
//***Global Variables*****
//************************
// String variable
var myDog = "Apollo";
//Number Variable
var dogTreats = 15;
//Array
var dogTricks = ["sit", "lay down", "speak", "shake hands", "roll over"]
var myTrue = true


//************************
//***JSON*****************
//************************

var json = {
	"myObject": myObject = {
		mykey: "Have a nice evening!"
	},
	"myBoolean": true
	
}


//************************
//***Method: Procedure****
//************************

var myProcedureMethod = {
	myTricks: true,
	myFunction: function (myArgument) {
				if (this.myTricks === true) {
						if (this.myTricks === myArgument) {
//send output to console
                                console.log("My dog can do tricks!");
                        } else {
                                console.log("My dog can't even do 5 tricks!");
//Pass control back to main code.
                        };
		
	             } else {
	             };
	 }
};
myProcedureMethod.myFunction(myTrue);


//************************
//***Method: Function*****
//************************

var myFunctionMethod = {
		mykey1: dogTricks,
		myFunction: function (myArgument) {
			var i=0;
			var z=0;
			console.log("The first trick he did was " + myArgument[0] + ".");
//For loop	
//If true go to math with output while in loop

			for (i=1;i<5;i++)
			{
			
				for(z=10;z<11;z++) 
				{
					console.log("And then " + dogTricks[i] + ".");
					}
			};
  
//If false, return array	
  		return myArgument;
  		}
};

var lastTricks = myFunctionMethod.myFunction(dogTricks);
console.log (lastTricks.length);
console.log ("So to sum it up, he was able to " + dogTricks[0] + ", " + dogTricks[1]  + ", " + dogTricks[2] + ", " + dogTricks[3] +  " and " + dogTricks[4] + ".");




//************************
//***Method: Mutator******
//************************

var myMutatorMethod = {
	mykey1: dogTreats,
	mykey2: " treats",
	myFunction: function (myArgument) {
		console.log ("We currently have " + myArgument + this.mykey2)

			while(myArgument < 25) {
				myArgument++;
				}
//mutate mykey1 with the changed value of myargument
this.mykey1 = myArgument
return this.mykey1;

	}
}

var totalTreats = myMutatorMethod.myFunction(dogTreats);
console.log ("But, I think we'll bring " + totalTreats + " treats total.");





//************************
//***Method: Accessor*****
//************************


var myStringMethod = {
			myKey1: "change and then return me!!!",

		myFunction: function (myArgument1,myArgument2) {
			this.myKey1 = "Apollo enjoys " + myArgument1 + " sometimes, but his favorite treat is a "	+ myArgument2 + ".";
			//Concatinated String	
			return this.myKey1;
		}
		
}

var hisFavoriteTreats = myStringMethod.myFunction("Denta Sticks","Puperoni");
console.log(hisFavoriteTreats);




//************************
//***Last Function********
//************************



var myLastFunction = function (myArgument) {
    myGoodbye = myArgument.mykey
	console.log(myGoodbye);
	
	
}
var goodNight = myLastFunction(json.myObject);





