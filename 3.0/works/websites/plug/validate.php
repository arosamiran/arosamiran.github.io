<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title id="title"></title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<!-- <script type="text/javascript" src="validate.js"></script> -->
	<style type="text/css">
		.error{
			text-align: center;
		}

		.bottom{
			padding-bottom: 10px;
		}

		.link{
			text-decoration: none;
			color: #ECF0F1;
			opacity: 0.8;
			transition: all, 0.2s;
		}

		.link:hover{
			opacity: 1;
			border-bottom: 1px dotted #ECF0F1;
		}
	</style>
</head>
<body>

<div class="main-wrapper">

	<div class="heading-holder">
		<p class="h4">
			<?php
				require_once 'shared/connectvars.php';
				$sn = $_POST['sn1'] . '-' . $_POST['sn2'];
				$pWord = $_POST['pass'];
				$course = $_POST['course'];
				?>
		</p>
	</div>

	<div>
		<?php 
				if ($row) {
					echo 'Hello';
				} else {
					echo "<p class='error'>Student number, course and password combination may be incorrect.</p>";
					echo "<p class='error bottom'><a href='signin.php' class='link'>Try again</a></p>";
				}
			?>
	</div>


</div>

</body>
</html>