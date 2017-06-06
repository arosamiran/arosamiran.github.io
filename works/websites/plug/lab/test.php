<!DOCTYPE html>
<html>
<head>
	<title>Self-referencing Form</title>
</head>
<body>

<?php 
	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		echo 'Hello ' . $name;
	} else {
?>
	<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		Name: <input type="text" name="name">
		<input type="submit" name="submit" value="Submit">
	</form>
<?php
	}
?>


</body>
</html>