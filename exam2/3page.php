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
  <title>3rd page</title>
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
		<h2>Did you learn about our story?</h2>
<form method="GET" action="./3page.php"  >
<div class="yes"> <input type="submit" name="data" value="yes"> </div>
<div class="no"> <input type="submit" name="data" value="no"> </div>

</form>

</div>
<a href="2page.html">
<img class="three-arrow-left" src="images/arrow-left.png" alt="left-arrow">
</a>
<script src="js/3page.js"></script>
</body>
</html>
