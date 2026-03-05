<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../banco-de-dados/conexao.php";

$sql = "UPDATE tb_funcionario SET situacao = 1 WHERE"; // PEGAR PELO id DO FUNCIONÁRIO?

$result = $conn->query($sql);

$desligado = [];

while($row = $result->fetch_assoc()){
    $desligado[] = $row;
}
echo json_encode($desligado);
?>