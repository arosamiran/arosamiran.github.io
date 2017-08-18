<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Plug a student</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.message{
			text-align: center;
			margin: 0px auto;
			padding: 20px 0px;
			line-height: 23px;
		}

		.form{
			padding: 20px 0px;
			margin: 0px auto;
			display: block;
		}

		.first{
			width: 150px;
		}

		.second{
			width: 350px;
		}

		input[type=text], select, input[type=email], input[type=password]{
			width: 250px;
		}
	</style>
	<script type="text/javascript">
		window.onload = errorMessage;

		function errorMessage() {
			var errorMessageHandler = document.getElementById('error');
			console.log(errorMessageHandler);

			if(errorMessageHandler){
				var headingHandler = document.getElementById('heading');
				console.log(headingHandler);

				headingHandler.innerHTML = "Error signing up";
			}
		}

		// function birthdayFormat() {
		// 	var bdayHandler = document.getElementById('bday');
		// 	var bdayYear = bdayHandler.value.slice(6,10);
		// 	var bdayMonth = bdayHandler.value.slice(0,2);
		// 	var bdayDay = bdayHandler.value.slice(3,5);
		// 	var bdayDB = bdayYear + "/" + bdayDay + "/" + bdayMonth;
		// 	console.log(bdayDB);
		// 	return bdayDB;
		}
	</script>
</head>
<body>

<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<p id="heading" class="h5">Please fill-up the form below.</p>
	</div>
	<?php 
	// function birthdayFormat()
	// 		{
	// 			$bdayYear = $_POST['bday'].slice(6,10);
	// 			$bdayMonth = $_POST['bday'].slice(0,2);
	// 			$bdayDay = $_POST['bday'].slice(3,5);
	// 			$bdayDB = $bdayYear . "/" . $bdayDay . "/" . $bdayMonth;
	// 			echo $bdayDB;
	// 		}
	# if the sign up button has been set, initialize the variable first, else show the form to fill the $_POST array with data
		if (isset($_POST['signup'])) {

			
			$sn = $_POST['sn1'] . '-' . $_POST['sn2'];

			# personal information
			$fName = $_POST['firstname'];
			$lName = $_POST['lastname'];
			$name = $fName . ' ' . $lName;
			$gender = $_POST['gender'];
			$address = $_POST['address'];
			// $birthday = birthdayFormat();

			# classifications
			$course = $_POST['course'];

			# contacts
			$mobile = $_POST['num'];

			$pWord = $_POST['pass'];
			
			$pic = $_FILES['picture']['name'];
			
			
			define('UPLOAD_PATH', 'images/cen/' . $course . '/');
			$target = UPLOAD_PATH . $sn . '-' . $pic;

			require_once 'shared/connectvars.php';

			# create connection to database
			$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('<div class="inside"><p id="error" class="message">Error connecting to MySQL server<br><a href="signup" class="link">Try again</a></p></div>');

			# insert query
			$query = "INSERT INTO $course (student_number, password, first_name, last_name, address, mobile_number, gender, picture) VALUES ('$sn', '$pWord', '$fName', '$lName', '$address', '$mobile', '$gender', '$target')";

			# initiate query
			$result = mysqli_query($dbc, $query)  or die('<div class="inside"><p id="error" class="message">Error querying database.<br><a href="signup.php" class="link">Try again</a></p></div>');
		
			# Close database connection
			mysqli_close($dbc);

			# Move uploaded picture to proper storage
			move_uploaded_file($_FILES['picture']['tmp_name'], $target);

			# Confirm successful query
			echo '<div class="inside"><p class="message">' . $name . ' is successfully plugged.<br><a href="signin.php" class="link">Sign in</a></p></div>';

		} else {
	?>
	<div class="inside">
		<table class="form">
			<!-- Self-referencing form, function is to insert user data into database -->
			<form enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
			<!-- Maximum of 10MB -->
			<input type="hidden" name="MAX_FILE_SIZE" value="2048000">
				<tr>
					<td class="first"><label for="sn1">Student Number:</label></td>
					<td class="second"><input type="number" class="sn" name="sn1" id="sn1" min="100" max="999" placeholder="xxx" autofocus>-<input type="number" class="sn" name="sn2" id="sn2" min="0001" max="9999" size="4" placeholder="xxxx"></td>
				</tr>
				<tr>
					<td class="first"><label for="firstname">First Name:</label></td>
					<td class="width"><input type="text" name="firstname" placeholder="Maximum of 20 characters" maxlength="20"></td>
				</tr>
				<tr>
					<td class="first"><label for="lastname">Last Name:</label></td>
					<td class="width"><input type="text" name="lastname" placeholder="Maximum of 20 characters"></td>
				</tr>
				<tr>
					<td class="first"><label for="address">Address:</label></td>
					<td class="second"><input type="text" name="address"></td>
				</tr>
				<!-- <tr>
					<td class="first"><label for="bday">Birthday:</label></td>
					<td class="second"><input id="bday" type="date" name="bday" placeholder="mm/dd/yyyy" required></td>
				</tr> -->

				<!-- Code for college selection 
				<tr>
					<td class="first"><label for="college">College:</label></td>
					<td>
						<select name="college">
							<option value="cafa">Architecture and Fine Arts (CAFA)</option>
							<option value="cas">Arts and Sciences (CAS) </option>
							<option value="cen">Engineering (CEN)</option>
							<option value="cpac">Public Administration and Criminology (CPAC)</option>
						</select>
					</td>
				</tr> -->
				<tr>
					<td class="first"><label for="num">Mobile number:</label></td>
					<td>+63&nbsp;<input type="number" name="num" max="9999999999" placeholder="xxxxxxxxxx"></td>
				</tr>
				<!--<tr>
					<td class="first"><label for="email">Email address:</label></td>
					<td class="second"><input type="email" name="email_ad"></td>
				</tr>-->
				<tr>
					<td class="first"><label for="gender">Gender:</label></td>
					<td class="second">
						<input type="radio" name="gender" value="male">Male
						<input type="radio" name="gender" value="female">Female
					</td>
				</tr>
				<tr>
					<td class="first"><label for="course">Course:</label></td>
					<td class="second">
						<select name="course">
							<option value='che'>Chemical Engineering</option>
							<option value='ce'>Civil Engineering</option>
							<option value='cpe'>Computer Engineering</option>
							<option value='ee'>Electical Engineering</option>
							<option value='ece'>Electronics and Communications Engineering</option>
							<option value='me'>Mechanical Engineering</option>
						</select>
					</td>
				</tr>
<!-- 				<tr>
					<td class="first"><label for="year">Year:</label></td>
					<td><select name="year">
						<option value="1">1st year</option>
						<option value="2">2nd year</option>
						<option value="3">3rd year</option>
						<option value="4">4th year</option>
						<option value="5">5th year</option>
					</select></td>
				</tr> 
				<tr>
					<td class="first"><label for="section">Section:</label></td>
					<td>
						<select name="section">
							<option value="A">A</option>
							<option value="B">B</option>
						</select>
					</td>
				</tr> -->
				<tr>
					<td class="first"><label for="picture">Upload your picture:</label></td>
					<td class="second"><input type="file" name="picture"></td>
				</tr>
				<tr>
					<td class="first"><label for="pass">Password:</label></td>
					<td class="second"><input type="password" name="pass" minlength="6" placeholder="Minimum of 6 characters"></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" name="signup" value="Plug"  class="button">
					<?php require 'shared/cancel_button.php'; ?></td>
				</tr>
			</form>
		</table>
	</div>
</div>
	<?php
		}
	?>
</body>
</html>