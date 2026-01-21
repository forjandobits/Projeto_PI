<?php
$host = "localhost";
$user = "root";
$pass = "";
$bd = "bd_humanamente";

$conn = new mysqli($host, $user, $pass, $bd);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}