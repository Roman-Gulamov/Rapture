<?php
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_STRING);

    $mysql = new mysqli ('localhost', 'root', '', 'rapture');
    $mysql->query("SET NAMES 'utf8'");
    $mysql->query("INSERT INTO `email` (`email`) VALUES('$email')");
    $mysql->close ();

    header('location: http://localhost/rapture/assets/build');
?>