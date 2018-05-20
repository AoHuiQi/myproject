<?php
   header('content-type:text/html;charset=utf-8');	
    $conn=mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('myproject');
	if(isset($_POST['name']) || isset($_POST['submit'])){
		$username=@$_POST['name'];
	}else{
		exit('非法操作');
	}
	$query1="select * from reg_admin where username='$username'";
	$result=mysql_query($query1);
	
	if(mysql_fetch_array($result)){
		echo true;//1
	}else{
		echo false;//空
	}
	
	if(isset($_POST['submit'])){
		$user=$_POST['username'];//用户名
		$pass=md5($_POST['password']);//密码
		$query="insert reg_admin values(null,'$user','$pass')";
		mysql_query($query);
		header('login.html');
	}
?>