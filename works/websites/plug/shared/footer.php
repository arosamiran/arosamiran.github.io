<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<script type="text/javascript" src="scripts/currentYear.js"></script>
	<style type="text/css">
		#year{
			/*position: absolute;
			right: 20px;*/
			opacity: 0.5;
			margin-bottom: 200px;
		}

		#doodlr{
			/*float: right;
			position: absolute;
			right: 70px;
			bottom: 5px;*/
			width: 40px;
			opacity: 0.5;
			transition: opacity, 0.2s;
		}

		a #doodlr:hover{
			opacity: 1;
		}

		#footer{
			text-align: right;
			/*display: inline;*/
			position: absolute;
			right: 10px;
			bottom: 0px;
		}
	</style>
</head>
<body>
	<table id="footer">
		<tr>
			<td><a href="http://www.about.me/arosamiran"><img id="doodlr" src="images/logos/doodlr.png"></a></td>
			<td id="year"></td>
		</tr>
	</table>
</body>
</html>