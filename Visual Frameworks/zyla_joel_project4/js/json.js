
//Project 4: myOptions
//By Joel Zyla
//FSU Visual Frameworks 1212

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
	"position2": {
		"callput": ["Contract type:", "Put"],
		"ssymbol": ["Stock Symbol:", "FB"],
		"sprice": ["Strike Price:", "28"],
		"allornone": ["All or none?", "yes"],
		"edate": ["Date:", "2013-01-20"],
		"notes": ["Notes:", "Sell at 25."]
	},
	"position3": { 
		"callput": ["Contract type:", "Call"],
		"ssymbol": ["Stock Symbol:", "GRPN"],
		"sprice": ["Strike Price:", "5"],
		"allornone": ["All or none?", "yes"],
		"edate": ["Date:", "2013-03-20"],
		"notes": ["Notes:", "Sell at 6."]
	}
}
