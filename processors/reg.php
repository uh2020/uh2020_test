<?php
if(!empty($tel)) {$mm = $tel[0].$tel[1];}
if(!empty($mail)) {$mm = $mail[0].$mail[1];}
$stime = time();
$nik = $contry.$mm.(string)$stime;
$i = 0;
$query = mysqli_query($db, "SELECT nik, mail, tel FROM users WHERE mail='$mail' OR tel='$tel' OR nik='$nik'");
while ($podrow=mysqli_fetch_array($query)) {
	if($podrow["mail"] == $mail or $podrow["tel"] == $tel) {
		echo "Пользователь с такими данными уже есть.";
		$i++; break;
		}
	else {
		if($nik == $podrow["nik"]) {
			$stime = time()+rand(1000, 9000);
			$nik = $contry.$mm.$stime;
			}
		}
	}
if($i == 0) {
	$rty = mysqli_query($db, "INSERT INTO `users` (`nik`, `mail`, `tel`, `pass`, `country`) VALUES ('$nik', '$mail', '$tel', '$pass', '$contry');");
	if($rty) {echo "Регистрация успешна.";}
	}
?>