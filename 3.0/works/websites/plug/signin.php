<?php 
	session_start();
?>


<!DOCTYPE html>
<html>
<head>
	<title>Sign in</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.message{
			text-align: center;
			margin: 0px auto;
			padding: 20px 0px;
			line-height: 23px;
		}

		.form-holder{
			background-color: #ededed;
			width: 990px;
			display: inline-block;
		}

		select, input[type=password]{
			width: 250px;
			font-size: 1.0001em;
		}

		.form{
			display: block;
			margin: 20px auto;
		}

		.first{
			width: 150px;
		}

		.second{
			width: 350px;
		}
		
	</style>
	<script type="text/javascript" src="scripts/validate.js"></script>
</head>
<body>

<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<p class="h6" id="heading"></p>
	</div>
		<?php

			require_once 'shared/connectvars.php';

			if (isset($_POST['signin'])) {
				# variable declarations
				$sn = $_POST['sn1'] . '-' . $_POST['sn2'];
				$pWord = $_POST['pass'];
				$course = $_POST['course'];
				$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Error connecting to MySQL server');

				# select query
				$query = "SELECT * FROM $course WHERE student_number = '$sn' AND password = '$pWord'";

				# initiate query
				$result = mysqli_query($dbc, $query) or die('<div class="inside"><p class="message">Error querying database<br><a href="signin.php" class="link">Try again<a></p></div>');

				$row = mysqli_fetch_array($result);
				$name = $row['first_name'] . ' ' . $row['last_name'];
				if ($row) {
					echo '<div class="inside"><p class="message" id="success">Welcome ' . $name . '<br>You may now proceed to <a href="home.php" class="link">the dashboard</a>.</p></div>';
					$_SESSION['session_sn'] = $row['student_number'];
					$_SESSION['session_course'] = $course;
					$_SESSION['session_name'] = $row['first_name'] . ' ' . $row['last_name'];
					$_SESSION['session_first_name'] = $row['first_name'];
					$_SESSION['session_last_name'] = $row['last_name'];
					$_SESSION['session_email'] = $row['email'];
					$_SESSION['session_gender'] = $row['gender'];
					$_SESSION['session_pic'] = $row['picture'];
					$_SESSION['session_mobile_number'] =  $row['mobile_number'];
					$_SESSION['session_birthday'] = $row['bday'];
					$_SESSION['session_address'] = $row['address'];
				} else {
					echo '<div class="inside"><p class="message" id="error">Student number, course and password combination may be incorrect. <br> Please <a href="signin.php" class="link">try again</a>.</p></div>';
				}

				mysqli_close($dbc);
			} else {
				# show form
		?>		
		<div class="inside">
			<div class="form-holder" id="form">
				<table class="form">
					<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
						<tr>
							<td class="first"><label for="sn1">Student Number:</label></td>
							<td class="second">
								<input class="sn" type="number" name="sn1" min="100" max="999" size="5" autofocus required placeholder="xxx">-
								<input class="sn" type="number" name="sn2" min="0" max="9999" required placeholder="xxxx">
							</td>
						</tr>
						<tr>
							<td class="first"><label for="course">Course:</label></td>
							<td class="second"><select name="course">
								<option value="ce">Civil Engineering</option>
								<option value="che">Chemical Engineering</option>
								<option value="cpe">Computer Engineering</option>
								<option value="ee">Electrical Engineering</option>
								<option value="ece">Electronics and Communications Engineering</option>
								<option value="me">Mechanical Engineering</option>
							</select></td>
						</tr>
						<tr>
							<td class="first"><label for="pass">Password:</label></td>
							<td class="second"><input placeholder="Minimum of 6 characters" type="password" name="pass" maxlength="16"  required></td>
						</tr>
						<tr>
							<td></td>
							<td><input type="submit" name="signin" value="Sign in" class="button">
							<?php require 'shared/cancel_button.php';?>
							</td>
						</tr>
					</form>
				</table>
			</div>
		</div>
</div>
	<?php
		}
	?>
</body>
</html>