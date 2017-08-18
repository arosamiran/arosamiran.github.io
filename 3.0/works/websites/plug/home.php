<?php session_start() ?>

<!DOCTYPE html>
<html lang="en">
<head id="head">
	<meta charset="utf-8">
	<meta name="author" content="Angelo Rosamiran">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel='stylesheet' type='text/css' href='css/calendar.css'>
	<link rel="stylesheet" type="text/css" href="css/home.css">
	<link rel="stylesheet" type="text/css" href="css/feedback.css">
	<script type="text/javascript" src="scripts/tabs.js"></script>
</head>
<body>

<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<?php echo '<p class="h6">' . $_SESSION['session_name'] . '</p>'; ?>
	</div>
	<div id="inside" class="inside">
	<div class="info-wrapper">
		<aside id="quick-info" class="quick-info">
			<div class="studentPicture"><img src="<?php echo $_SESSION['session_pic']; ?>" alt="Student picture"></div>
			<div class="studentNumber"><?php echo $_SESSION['session_sn']; ?></div>
			<div class="menu">
				<ul class="tab">
					<li><a href="#" class="tablinks" onclick="openTab(event, 'info')">My Information</a></li>
					<!-- <li><a href="#" class="tablinks" onclick="openTab(event, 'events')">Upcoming Events</a></li> -->
					<li><a href="#" class="tablinks" onclick="openTab(event, 'calendar')">School Calendar</a></li>
					<li><a class="tablinks" disabled>Cashier</a></li>
					<li id="logout"><a href="logout.php">Logout</a></li>
					<!-- <li id="feed"><a class="tablinks" onclick="openTab(event, 'feedback')">...</a></li> -->					
				</ul>
			</div>
		</aside>

		<section class="container">
			<div id="info" class="tabcontent">

					<fieldset>
						<legend>Personal Information</legend>
						
						<div class="paragraph-container">
							<p class="half"><span class="label">First name:</span>&nbsp;<?php echo $_SESSION['session_first_name']; ?></p>
						
							<p class="half"><span class="label">Last name:</span>&nbsp;<?php echo $_SESSION['session_last_name']; ?></p>
						
							<p class="half"><span class="label">Gender:</span>&nbsp;<?php
								switch ($_SESSION['session_gender']) {
									case 'male':
										echo "Male";
										break;

									case 'female':
										echo "Female";
										break;
									
									default:
										echo "undefined";
										break;
									}
						 		?>
						 	<p><span class="label">Address:</span>&nbsp;<?php echo $_SESSION['session_address']; ?></p>
							</p>
						</div>
					</fieldset>
					<fieldset>
						<legend>Contacts</legend>
						<div class="paragraph-container">
							<p class="half"><span class="label">Mobile number:</span>&nbsp;+63<?php echo $_SESSION['session_mobile_number']; ?></p>
						</div>
					</fieldset>
					<fieldset>
						<legend>Classifications</legend>
						<div class="paragraph-container">
							<p class="half"><span class="label">Course:</span>&nbsp;<?php
								# echo appropriate course names based on the course code
									switch ($_SESSION['session_course']) {
										case 'ce':
											echo "Civil Engineering";
											break;

										case 'che':
											echo "Chemical Engineering";
											break;

										case 'cpe':
											echo "Computer Engineering";
											break;

										case 'ee':
											echo "Electrical Engineering";
											break;

										case 'ece':
											echo "Electronics and Communications Engineering";
											break;

										case 'me':
											echo "Mechanical Engineering";
											break;
										
										default:
											echo "undefined";
											break;
									}
								?>
							</p>
						<div class="half">
							<p><span class="label">College:</span>&nbsp;College of Engineering (CEN)</p>
						</div>
					</fieldset>
				</div>

			<div id="calendar" class="tabcontent">
			<div class="month">
			  <ul>
				<li><span id="month"></span><br>
			      <span id="year"></span>
			    </li>
			  </ul>
			</div>

			<ul class="weekdays">
			  <li>Su</li>
			  <li>Mo</li>
			  <li>Tu</li>
			  <li>We</li>
			  <li>Th</li>
			  <li>Fr</li>
			  <li>Sa</li>
			</ul>

			<ul class="days">
			  <li id="1" class="sunday">1</li>
			  <li id="2">2</li>
			  <li id="3">3</li>
			  <li id="4">4</li>
			  <li id="5">5</li>
			  <li id="6">6</li>
			  <li id="7">7</li>
			  <li id="8" class="sunday">8</li>
			  <li id="9" class="holiday tooltip">9<div class="tooltiptext">Feast of the Black Nazarene</div></li>
			  <li id="10">10</li>
			  <li id="11">11</li>
			  <li id="12">12</li>
			  <li id="13">13</li>
			  <li id="14">14</li>
			  <li id="15" class="sunday holiday tooltip">15<div class="tooltiptext">Feast of Sto. Niño</div></li>
			  <li id="16">16</li>
			  <li id="17">17</li>
			  <li id="18">18</li>
			  <li id="19">19</li>
			  <li id="20">20</li>
			  <li id="21">21</li>
			  <li id="22" class="sunday">22</li>
			  <li id="23">23</li>
			  <li id="24">24</li>
			  <li id="25">25</li>
			  <li id="26">26</li>
			  <li id="27">27</li>
			  <li id="28" class="tooltip">28<div class="tooltiptext">Chinese New Year</div></li>
			  <li id="29" class="sunday">29</li>
			  <li id="30">30</li>
			  <li id="31">31</li>
			</ul>
			</div>


			<div id="feedback" class="tabcontent">
				<h4 class="h4">Send a feedback</h4>
				<hr>
				<div>
					<table class="form-holder">
						<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
							<tr>
								<td class="label"><label for="subject">Subject:</label></td>
								<td><input type="text" name="subject" value="Feedback" disabled></td>
							</tr>

							<tr>
								<td class="label"><label for="message">Message:</label></td>
								<td><textarea name="message" rows="4" cols="30" autofocus ></textarea></td>
							</tr>
							<tr>
								<td></td>
								<td><input type="submit" onclick="feedbackSent()" name="send" value="Send" class="button"></td>
							</tr>
						</form>
					</table>
				</div>
			</div>
		</section>
		
	</div>
	</div>
</div>

</body>
</html>/