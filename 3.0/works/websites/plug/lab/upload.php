<!DOCTYPE html>
<html>
<head>
	<title>Upload</title>
</head>
<body>

<?php 
	if (isset($_POST['submit'])) {
		$pic = $_FILES['picture']['name'];
		$course = $_POST['course'];
		define('PATH', 'images/cen/' . $course . '/');
		$target = PATH . time() . $pic;
		if (move_uploaded_file($_FILES['picture']['tmp_name'], $target)) {
			$dbc = mysqli_connect('localhost', 'root', '', 'plug_lab');
			$query = "INSERT INTO pictures (file_name) VALUES('$pic')";
			$result = mysqli_query($dbc, $query);
			mysqli_close($dbc);
		};
		echo "Upload successful!";
	} else {
?>

<form enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
	<select name="course">
	<option value='che'>Chemical Engineering</option>
	<option value='ce'>Civil Engineering</option>
	<option value='cpe'>Computer Engineering</option>
	<option value='ee'>Electical Engineering</option>
	<option value='ece'>Electronics and Communications Engineering</option>
	<option value='me'>Mechanical Engineering</option>
</select><br>
	<input type="file" name="picture"><br>
	<input type="submit" name="submit" value="Submit">
</form>

<?php
	}
?>

</body>
</html>