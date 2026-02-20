<?php 

header("Content-Type: application/json");

include(__DIR__ . "/../../../../banco-de-dados/conexao.php");

$sql = "SELECT * FROM tb_proventos";

$resultado = $conn->query($sql);

$beneficios_descontos = [];

while($row = $resultado->fetch_assoc()){
    $beneficios_descontos[] = $row;
}

echo json_encode($beneficios_descontos);

?>