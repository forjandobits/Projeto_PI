<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../banco-de-dados/conexao.php";

$id = (int)$_GET["id"];

$sql = "SELECT * FROM tb_cargo WHERE id_cargo = '$id'";
$result = $conn->query($sql);

if($row = $result->fetch_assoc()){
    echo json_encode($row);
} else {
    echo json_encode(["erro" => "Cargo não encontrado"]);
}