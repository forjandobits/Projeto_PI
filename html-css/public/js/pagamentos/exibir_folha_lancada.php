<?php 

header("Content-Type: application/json");

include(__DIR__ . "/../../../../banco-de-dados/conexao.php");

$sql = "SELECT id, nome_completo, nome_cargo, mes_referencia FROM tb_folhapagamento JOIN tb_funcionario JOIN tb_cargo 
WHERE tb_folhapagamento.id_funcionario = tb_funcionario.id_funcionario AND tb_funcionario.id_cargo = tb_cargo.id_cargo;";

$resultado = $conn->query($sql);

$beneficios_descontos = [];

while($row = $resultado->fetch_assoc()){
    $beneficios_descontos[] = $row;
}

echo json_encode($beneficios_descontos);

?>