<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<p class="h6">Thank you for signing up</p>
	</div>
	<div>
		<?php
			require_once 'shared/connectvars.php';
			require_once 'shared/appvars.php';

			# Open connection to database server
			$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Error connecting to MySQL server');

			# Store record in the database
			$query = "INSERT INTO $course (student_number, password, first_name, last_name, email, gender, picture) VALUES ('$sn', '$password', '$fName', '$lName', '$email', '$gender', '$pic')";

			# Initiate query
			$result = mysqli_query($dbc, $query)  or die('Student number isn\'t unique');

			# Move uploaded picture to proper storage
			move_uploaded_file($_FILES['student_picture']['tmp_name'], $target);

			# Confirm successful query
			echo "$name is successfully plugged.";

			# Close database connection
			mysqli_close($dbc);
		?>
	</div>
	
</div>



</body>
</html>