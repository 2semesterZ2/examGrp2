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

  <title>3 Page</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>




<body>




<div id="spasiba">
<h1>Thank you for calling.<br>Hope to hear you again!  </h1>
<div class="restart">
    <a class="button" href="hallo.html">restart</a>
</div>

</div>


	<div class="question">
		<h2>Did you enjoy it?</h2>
<form method="GET" action="./3page.php"  >
<div class="yes"> <input type="submit" name="data" value="yes"> </div>
<div class="no"> <input type="submit" name="data" value="no"> </div>

</form>

</div>



<script type="text/javascript">
if (window.location.search.indexOf("data") !== -1){
  $("#spasiba").show();
}










</script>



</body>
</html>
