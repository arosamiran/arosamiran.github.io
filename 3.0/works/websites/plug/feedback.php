<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="Angelo Rosamiran">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="main-wrapper">
		<?php require 'shared/logo.php'; ?>
		<div class="heading-holder">
			<p class="h4"><?php $_SESSION['session_name'] ?></p>
		</div>
		<div class="inside">
			<table>
				<form action="feedback.php" method="post">
					<tr>
						<td><label for="subject">Subject:</label></td>
						<td><input type="text" name="subject" value="Feedback" disabled></td>
					</tr>

					<tr>
						<td><label for="message">Message:</label></td>
						<td><textarea name="message"></textarea></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" name="send" value="Send" class="button"></td>
					</tr>
				</form>
			</table>
		</div>
	</div>
</body>
</html>