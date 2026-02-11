<?php 

include("../Projeto_PI/banco-de-dados/conexao.php");

$sql = "SELECT * FROM tb_previsto_beneficios";

$resultado = $conn->query($sql);

$beneficios_descontos = [];

while($row = $resultado->fetch_assoc()){
    $beneficios_descontos[] = $row
}

echo json_encode($beneficios_descontos);

?>