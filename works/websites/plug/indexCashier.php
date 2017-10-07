<?php session_start(); ?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="Angelo Rosamiran">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<style type="text/css">
		.inside{
			padding: 10px 0px;
		}

		.second{
			border: 1px dotted #aaa;
			width: 120px;
		}

		input{
			font-size: 1.0001em;
		}

		input[type=radio]{
			margin: 0px 5px;
		}

		.radiosHolder{
			border: 1px dotted #aaa;
		}

		.first{
			width: 150px;
		}

		.button{
			display: block;
			margin: 0px auto;
		}
	</style>
	<script type="text/javascript">
		window.onload = width;

		function width() {
			var theTest = document.getElementById('test');
			console.log(theTest);
		}
	</script>
</head>
<body>
<div class="main-wrapper">
	<?php require 'shared/logo.php'; ?>
	<div class="heading-holder">
		<h1 class="h1">Cashier login</h1>
	</div>
	<?php 

		require_once 'shared/connectvars.php';

	?>

	<div class="inside">
		<div class="form-holder">
			<table class="form">
				<form method="post" action=" <?php echo $_SERVER['PHP_SELF'] ?> ">
					<tr>
						<td class="first"><label for="uname">Username:</label></td>
						<td class="second" id="test"><input type="text" name="uname" required></td>
					</tr>
					<tr>
						<td class="first"><label for="number">Cashier number:</label></td>
						<td class="second">
							<div class="radiosHolder">
								<input type="radio" name="number" value="1">1
								<input type="radio" name="number" value="2">2
								<input type="radio" name="number" value="3">3
							</div>
						</td>
					</tr>
					<tr>
						<td class="first"><label for="password">Password:</label></td>
						<td class="second"><input type="password" name="password" required></td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" name="signinC" value="Sign in" class="button"></td>
					</tr>
				</form>
			</table>
		</div>
	</div>
<?php require 'shared/footer.php'; ?>
</div>
</body>
</html>