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
</head>
<body>
<h2>Did you enjoy it?</h2>
<form method="GET" action="./index.php">

	<input type="radio" name="data" value="yes">YES<br>
  <input type="radio" name="data" value="no"> NO<br>
<input type="submit" value="Submit">
</form>


</body>
</html>