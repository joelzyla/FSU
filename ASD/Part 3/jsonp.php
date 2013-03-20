<?php
	//header('Access-Control-Allow-Origin: *');
	//$jsonp = {"name": "Mike"};
	//$cb = $_GET["callback"];
	//$response = $cb . "(" . $jsonp . ");";
	//callback({"foo" : "bar"});
	echo $_GET['callback'] . '(' . "{
		'Category: ' : 'SciTech',
		'Date submitted: ' : '013-03-13',
		'Tags: ' : 'GOOG,google,glass',
		'URL: ' : 'http://www.forbes.com/sites/kashmirhill/2013/03/15/google-glass-will-be-incredible-for-the-courtroom/',
		'Description:' : 'Article about google glass being useful in court.'
	}" . ')';
	//echo $response;
?>





