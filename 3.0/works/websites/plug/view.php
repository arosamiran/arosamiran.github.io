<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Displaying Student Lists</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

<div class="mainWrapper">
	<h1>

	<?php
	# Store the selected course in the $course variable
	$course = $_POST['course'];

	switch ($course) {
		case 'che':
			echo "Chemical Engineering Students";
			break;

		case 'ce':
			echo "Civil Engineering Students";
			break;

		case 'cpe':
			echo "Computer Engineering Students";
			break;

		case 'me':
			echo "Mechanical Engineering Students";
			break;

		case 'ee':
			echo "Electical Engineering Students";
			break;
		case 'ece':
			echo "Electonics and Communications Engineering Students";
			break;

		default:
			echo "Please select a course";
			break;
		}
	?>

	</h1>

	<table class="students-list">
		<tr>
			<th></th>
			<th>Section A</th>
			<th>Section B</th>
		</tr>
		<!-- Code to display First Year Students -->
		<tr>
			<td class="vertical">First year</td>
			<td>
				<ul>
					<?php 
						$year = 1;
						$section = 'A';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
			<td>
				<ul>
					<?php 
						$year = 1;
						$section = 'B';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
		</tr>
		<!-- Code to display Second Year Students -->
		<tr>
			<td>Second year</td>
			<td>
				<ul>
					<?php 
						$year = 2;
						$section = 'A';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
			<td>
				<ul>
					<?php 
						$year = 2;
						$section = 'B';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
		</tr>
		<!-- Code to display Third Year Students -->
		<tr>
			<td>Third year</td>
			<td>
				<ul>
					<?php 
						$year = 3;
						$section = 'A';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
			<td>
				<ul>
					<?php 
						$year = 3;
						$section = 'B';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
		</tr>
		<!-- Code to display Fourth Year Students -->
		<tr>
			<td>Fourth year</td>
			<td>
				<ul>
					<?php 
						$year = 4;
						$section = 'A';
						$query = "SELECT first_name, last_name, gender picture FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
			<td>
				<ul>
					<?php 
						$year = 4;
						$section = 'B';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
					?>
				</ul>
			</td>
		</tr>
			<!-- Code to display Fifth Year Students -->
		<tr>
			<td>Fifth year</td>
			<td>
				<ul>
					<?php 
						$year = 5;
						$section = 'A';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section' ORDER BY last_name ASC";
						displayStudents($query);
					?>
				</ul>
			</td>
			<td>
				<ul>
					<?php 
						$year = 5;
						$section = 'B';
						$query = "SELECT * FROM $course WHERE year = $year AND section = '$section'";
						displayStudents($query);
						closeDatabaseConnection();
					?>
				</ul>
			</td>
		</tr>

	</table>
</div>

<?php

# Function to display list of students
function displayStudents($query)
{
	require_once 'connectvars.php';	

	# Database connection parameters
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Error connecting to MySQL server');
	$result = mysqli_query($dbc, $query) or die('Error querying database');

	# Store a row of data in $row variable
	$row = mysqli_fetch_array($result);

	# If $row has any data, print the data, else echo "There is no data to display"
	if($row) {
		do{
			$fName = $row['first_name'];
			$lName = $row['last_name'];
			$name = $fName . ' ' . $lName;

			echo "<li>$name</li>";
		} while ($row = mysqli_fetch_array($result));
	} else {
		echo "<p>There is no data to display.</p>";
	}
}

# Function to close database connection
function closeDatabaseConnection()
{
	require_once 'connectvars.php';	
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Error connecting to MySQL server');
	mysqli_close($dbc);
}
?>
</body>
</html>