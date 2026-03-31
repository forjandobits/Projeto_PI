<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../banco-de-dados/conexao.php";

$sql = "SELECT id_cargo, nome_cargo FROM tb_cargo";
$result = $conn->query($sql);

$cargos = [];

while($row = $result->fetch_assoc()){
    $cargos[] = $row;
}

echo json_encode($cargos);