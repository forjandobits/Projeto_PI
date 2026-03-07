<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$funcionario_selecionado = json_decode(file_get_contents("php://input"), true);

$id_funcionario = $conn->real_escape_string($funcionario_selecionado['id_funcionario']);

$sql = "SELECT * FROM tb_funcionario JOIN tb_cargo JOIN tb_banco JOIN tb_documento JOIN tb_arquivo JOIN tb_telefone WHERE
tb_documento.id_documento = tb_arquivo.id_documento
AND tb_documento.id_funcionario = tb_funcionario.id_funcionario
AND tb_banco.id_funcionario = tb_funcionario.id_funcionario
AND tb_cargo.id_cargo = tb_funcionario.id_cargo
AND tb_telefone.id_funcionario = tb_telefone.id_funcionario
AND tb_funcionario.id_funcionario = tb_telefone.id_funcionario
AND tb_funcionario.id_funcionario = $id_funcionario";

$result = $conn->query($sql);

$funcionarios = [];

while($row = $result->fetch_assoc()){
    $funcionarios[] = $row;
}
echo json_encode($funcionarios);
?>