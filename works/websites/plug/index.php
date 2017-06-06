<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="author" content="Angelo Rosamiran">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.menu a{
			font-size: 1.15em;
			color: #000;
		}

		.menu{
			margin: 0px auto;
			border-spacing: 20px;
		}

		.menuHolder div{
			width: 990px;
			background-color: #ededed;
		}

	</style>
</head>
<body>	

<div class="main-wrapper">
	<?php 
		require 'shared/logo.php';
	 ?>
	<div class="heading-holder">
		<h1 class="h1">Welcome to Plug!</h1>
	</div>
	
	<div class="inside">
	<div class="menuHolder">	
		<table class="menu">
			<tr>
				<td><a href="signin.php" class="link">Sign in</a></td>
			</tr>
			<tr>
				<td><a href="signup.php" class="link">Sign up</a></td>
			</tr>
		</table>
	</div>
	</div>
	<div>
		<?php require 'shared/footer.php'; ?>
	</div>
</div>

</body>
</html>