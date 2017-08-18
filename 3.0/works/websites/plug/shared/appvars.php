<?php 
	$sn = $_POST['sn1'] . '-' . $_POST['sn2'];
	$fName = $_POST['firstname'];
	$lName = $_POST['lastname'];
	$name = $fName . ' ' . $lName;
	$email = $_POST['email_ad'];
	$gender = $_POST['gender'];
	$course = $_POST['course'];
	$pic = $_FILES['student_picture']['name'];
	if (!empty()) {
		# code...
	}
	$password = $_POST['pass'];
	
	define('UPLOAD_PATH', 'images/' . $sn . '-');
	$target = UPLOAD_PATH . $pic;
	define('MAXFILESIZE', 2048000)
?>