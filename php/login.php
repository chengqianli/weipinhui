<?php
	header("content-type:text/html;charset=utf-8");
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["tel"];
	$password = $_POST["password"];
	$conn = new mysqli("","root");
	$conn->select_db("weipinhui");
	/*$sql = "select * from users where tel = '$username' and pw = '$password'";
	$result = $conn->query($sql);*/
	$sql = "select * from users where tel = '$username'";
	$un = $conn->query($sql);
	$sql = "select * from users where pw = '$password'";
	$pw = $conn->query($sql);
	if($un->num_rows==0){
		echo "0";
	}else if(($un->num_rows>0)&&($pw->num_rows==0)){
		echo "1";
	}else{
		echo "2";
	}
?>