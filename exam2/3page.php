<!doctype html>
<?php
if(isSet($_GET['data'])){
$answer = strip_tags($_GET['data']);
if($answer != ""){
file_put_contents("./data.txt", "$answer\n", FILE_APPEND);
}
}
?> 
<html>
<head>

  <meta charset="utf-8">

  <title>hallo</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/style.css">
	 

</head>

	
	
	
<body>
	<div class="dick">
		<h2>Did you enjoy it?</h2>
<form method="GET" action="./3page.php"  >
<div class="yes"> <input type="submit" name="data" value="yes"> </div>
<div class="no"> <input type="submit" name="data" value="no"> </div>

</form>
	</div>
	

		

	
	
	
</body>
</html>
