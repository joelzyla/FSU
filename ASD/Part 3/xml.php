<?php
header("Content-type: text/xml");
	echo $_GET['callback'] . "<?xml version='1.0' encoding='ISO-8859-1'?>" . 
		"<item>" .
		"<Category>Politics</Category>" .
		"<Date>2013-03-13</Date>" .
		"<Tags>politics,court,google,glass</Tags>" .
		"<URL>http://www.forbes.com/sites/kashmirhill/2013/03/15/google-glass-will-be-incredible-for-the-courtroom/</URL>" .
		"<Description>Article about google glass being useful in court.</Description>" .
		"</item>"
?>

