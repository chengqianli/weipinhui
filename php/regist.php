<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"];
	$pw = $_POST["password"];
	$conn = new mysqli("","root");
	$conn->select_db("weipinhui");
	$sql = "select * from users where tel = '$username'";
	$result = $conn->query($sql);
	if($result->num_rows == 0){
		echo "1";
		$sql = "insert into users (tel,pw) values ('$username','$pw')";
		$conn->query($sql);	
	}else{
		echo "0";
	}
	
	
?>