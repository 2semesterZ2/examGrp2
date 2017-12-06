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
<script src="jquery-3.2.1.js"></script>
	
</head>
	
<body>
	
<h2>Did you enjoy it?</h2>
<form method="GET" action="./index.php">
<input type="submit" name="data" value="NO">
<input type="submit" name="data" value="YES">
</form>

<script type="text/javascript">
	$("form").submit(function (event)){
					  alert("Hello! I am an alert box!!");
					  }
	</script>
</body>
</html>