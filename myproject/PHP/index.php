<?php
    header('content-type:text/html;charset=utf-8');
	 $conn=mysql_connect('localhost','root','');
	if(!$conn){
		die('数据库连接失败'.mysql_error());
	}
	mysql_select_db('myproject');
	mysql_query('SET NAMES UTF8');
	$query1='select * from index_subnav';
	$result1=mysql_query($query1);
	$arr1=array();
	for($i=0;$i<mysql_num_rows($result1);$i++){
		$arr1[$i]=mysql_fetch_array($result1,MYSQL_ASSOC);
	}
	$query2='select * from index_lunbo';
	$result2=mysql_query($query2);
	$arr2=array();
	for($i=0;$i<mysql_num_rows($result2);$i++){
		$arr2[$i]=mysql_fetch_array($result2,MYSQL_ASSOC);
	}
	$query3='select * from index_shengdian';
	$result3=mysql_query($query3);
	$arr3=array();
	for($i=0;$i<mysql_num_rows($result3);$i++){
		$arr3[$i]=mysql_fetch_array($result3,MYSQL_ASSOC);
	}
	$arr=array('subnav'=>$arr1,'lunbo'=>$arr2,'shengdian'=>$arr3);
	echo json_encode($arr);	
?>