<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$sql = "SELECT id_funcionario, nome_completo, nome_cargo, situacao FROM tb_funcionario INNER JOIN tb_cargo ON tb_funcionario.id_cargo = tb_cargo.id_cargo";

$result = $conn->query($sql);

$cargos = [];

while($row = $result->fetch_assoc()){
    $cargos[] = $row;
}
echo json_encode($cargos);
?>