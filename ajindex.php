<?php
//session_start();
//echo session_id();
?>
<?php
/*if(isset($_POST)) {
	foreach($_POST as $k => $v) {
		echo 'POST!!!';
		}
	}*/
	
if(isset($_GET)) {
	foreach($_GET as $k => $v) {$$k = $v;}
	}
	if(isset($_FILES['files']['tmp_name'])) {
		echo 'test1';
		//var_dump($_FILES);
		//move_uploaded_file($_FILES['image']['tmp_name'], $_FILES['image']['name']);
		}
	else {echo 'test0';}
	

if(isset($proc) and $proc != NULL) {
	//include "db.php";
	//include "processors/".$proc.".php";
	}
if(isset($page) and $page != NULL) {
	//include "db.php";
	//include "pages/".$page.".php";
	}

	//тест
	
	
$jdata['test'] = 'test';
	echo json_encode($jdata);
?>