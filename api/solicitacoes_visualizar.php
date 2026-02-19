<?php

header("Content-Type: application/json");

include(__DIR__ . "/../../../../banco-de-dados/conexao.php");


$sql = "SELECT *from solicitacoes where id"
$resultado = $conn->query($sql);

$informacao = [];

while($row = $resultado->fetch_assoc()) {
   $solicitacoes[]  = $row;
}

?>
