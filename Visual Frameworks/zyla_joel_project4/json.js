




var json = {
	//object should be consistant with form. 
	//use the same properties as the storedata object
	//so data in local storage is consistant with json data
	"position1": { //object name
		//first property group : value of group
		"callput": ["Contract type:", "Call"], //property value pair
		"ssymbol": ["Stock Symbol:", "AAPL"],
		"sprice": ["Strike Price:", "600"],
		"allornone": ["All or none?", "yes"],
		"edate": ["Date:", "2013-06-20"],
		"notes": ["Notes:", "Sell at 610."]
	},
	"position2": { //object name
		//first property group : value of group
		"callput": ["Contract type:", "Put"], //property value pair
		"ssymbol": ["Stock Symbol:", "FB"],
		"sprice": ["Strike Price:", "28"],
		"allornone": ["All or none?", "yes"],
		"edate": ["Date:", "2013-01-20"],
		"notes": ["Notes:", "Sell at 25."]
	},
	"position3": { //object name
		//first property group : value of group
		"callput": ["Contract type:", "Call"], //property value pair
		"ssymbol": ["Stock Symbol:", "GRPN"],
		"sprice": ["Strike Price:", "5"],
		"allornone": ["All or none?", "yes"],
		"edate": ["Date:", "2013-03-20"],
		"notes": ["Notes:", "Sell at 6."]
	}
}







var item = {} //object
				item.callput = ["Contract type:", $("callput").value]; //groups is id of form element we created.
				//its getting the value. do this for each element
				//item.x where x is a property on the fly
				//between quotes is a label.
				item.ssymbol = ["Stock Symbol:", $("ssymbol").value];
				item.sprice = ["Strike Price:", $("sprice").value];
				item.allornone = ["All or none?", AllorNoneValue];
				item.edate = ["Date:", $("edate").value];
				item.notes = ["Notes:", $("notes").value];
				//save data to local storeage using Stringify to convert our object to a string.
				//localstoreage ONLY stores strings. it's currently an array.
				localStorage.setItem(id, JSON.stringify(item)); //will convert item by string separated so we can get them.
				alert("Position Saved!");
			}
