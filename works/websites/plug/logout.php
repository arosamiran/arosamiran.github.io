<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Angelo Rosamiran">
	<title>Logout</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.message{
			text-align: center;
			margin: 0px auto;
			padding: 20px 0px;
			line-height: 23px;
		}
	</style>
</head>
<body>
<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<p class="h4">Sign out successful</p>
	</div>
	<div class="inside">
		<p class="message">You are successfully signed out.<br><a href="index.php" class="link">Home</a></p>
		<?php 
			// remove all session variables
			session_unset();

			// destroy the session
			session_destroy();
			require 'shared/footer.php';
		 ?>
	</div>
</div>
</body>
</html>