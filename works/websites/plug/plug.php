<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Plug a student</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.width{
			width: 100px;
		}
		
		.main-wrapper{
			padding-bottom: 5px;
		}

		.button{
			font-size: 1.1em;
			border-radius: 4px;
			background-color: transparent;
			color: #ECF0F1;
			text-align: center;
			padding: 10px 30px;
			transition: opacity, 0.2s;
			cursor: pointer;
			margin: 5px;
			border: 1px solid #ECF0F1;
			font-family: Corbel, Calibri, sans-serif;
			opacity: 0.5;
		}

		.button:hover{
			opacity: 1;
		}
	</style>
</head>
<body>

<div class="main-wrapper">
	
	<?php
		require 'shared/logo.php';
	?>

	<div class="heading-holder">
		<p class="h4">Please fill-up the form below.</p>
	</div>

	<div>
		<table class="form">
			<!-- Insert data to database -->
			<form enctype="multipart/form-data" method="post" action="submit.php">
			<!-- Maximum of 1MB -->
			<input type="hidden" name="MAX_FILE_SIZE" value="1000">
				<tr>
					<td class="first"><label for="sn1">Student Number:</label></td>
					<td class="second"><input type="text" name="sn1" maxlength="3" size="3" placeholder="xxx">-<input type="text" name="sn2" maxlength="4" size="4" placeholder="xxxx"></td>
				</tr>
				<tr>
					<td class="first"><label for="firstname">First Name:</label></td>
					<td class="width"><input type="text" name="firstname" placeholder="Maximum of 20 characters" maxlength="20"></td>
				</tr>
				<tr>
					<td class="first"><label for="lastname">Last Name:</label></td>
					<td class="width"><input type="text" name="lastname" placeholder="Maximum of 20 characters"></td>
				</tr>

				<!-- Code for course selection 
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
					<td class="first"><label for="email">Email address:</label></td>
					<td class="width"><input type="email" name="email_ad"></td>
				</tr>
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
					<td class="first"><label for="student_picture">Upload your picture:</label></td>
					<td class="second"><input type="file" name="student_picture"></td>
				</tr>
				<tr>
					<td class="first"><label for="pass">Password:</label></td>
					<td class="width"><input type="password" name="pass" maxlength="16"></td>
				</tr>
				<tr>
					<td></td>
					<td><input type="submit" value="Plug" class="button"></td>
				</tr>
			</form>
		</table>
	</div>
</div>

</body>
</html>