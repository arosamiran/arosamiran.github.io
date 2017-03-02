<!DOCTYPE html>
<html>
<head>
	<title>Parallax demo</title>
	<style type="text/css">
		body, html{
			height: 100%;
			margin: 0;
		}

		.parallax{
			/* Full height */
			height: 100%; 

			/* Create the parallax scrolling effect */
			background-attachment: fixed;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			/*filter: blur(5px);*/
		}

		#bg1{
			background-image: url('images/coffee-beans.png');
			background-color: #d9ad7c;
		}

		#bg2{
			background-image: url('images/Background.jpg');
			background-color: #f5f5f5;
		}

		.text{
			height: 100%;
			font-size: 2em;
			color: #fff;
			padding: 20px;
			background-color: #000;
		}
	</style>
</head>
<body>
<div class="parallax" id="bg1"></div>
<div class="text">
	<p>This is the parallax effect</p>
</div>
<div class="parallax" id="bg2"></div>
</body>
</html>