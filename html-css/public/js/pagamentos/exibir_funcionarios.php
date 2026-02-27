<?php 

header("Content-Type: application/json");

include(__DIR__ . "/../../../../banco-de-dados/conexao.php");

$sql = "SELECT id_funcionario, nome_completo FROM tb_funcionario";

$resultado = $conn->query($sql);

$nome_funcionario = [];

while($row = $resultado->fetch_assoc()){
    $nome_funcionario[] = $row;
}

echo json_encode($nome_funcionario);

?>