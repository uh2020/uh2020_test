<?php
if(isset($_GET)) {foreach($_GET as $k => $v) {$$k = $v;}}
	if(isset($_FILES['files']['tmp_name'])) {
		//var_dump($_FILES);
		//move_uploaded_file($_FILES['image']['tmp_name'], $_FILES['image']['name']);
		}
	
include "db.php";
if(isset($proc) and $proc != NULL) {include "processors/".$proc.".php";}
if(isset($page) and $page != NULL) {include "pages/".$page.".php";}
	
$jdata['test'] = 'test';
echo json_encode($jdata);
?>