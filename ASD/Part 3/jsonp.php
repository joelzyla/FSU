<?php
	//header('Access-Control-Allow-Origin: *');
	//$jsonp = {"name": "Mike"};
	//$cb = $_GET["callback"];
	//$response = $cb . "(" . $jsonp . ");";
	//callback({"foo" : "bar"});
	echo $_GET['callback'] . '(' . "{
		'Title: ' : 'Jeff Hansen'
	}" . ')';
	//echo $response;
?>





