<?php 

header("Content-Type: application/json");

include(__DIR__ . "/../../../../banco-de-dados/conexao.php");

$folha_selecionada = json_decode(file_get_contents("php://input"), true);

$id_folha = $conn->real_escape_string($folha_selecionada['id_folha']);

$sql = "SELECT id, nome_completo, informacoes, mes_referencia FROM tb_folhapagamento JOIN tb_funcionario JOIN tb_cargo 
WHERE tb_folhapagamento.id_funcionario = tb_funcionario.id_funcionario AND tb_funcionario.id_cargo = tb_cargo.id_cargo AND tb_folhapagamento.id = $id_folha";

$resultado = $conn->query($sql);

$dados_folha_selecionada = [];

while($row = $resultado->fetch_assoc()){
    $dados_folha_selecionada[] = $row;
}

echo json_encode($dados_folha_selecionada);

?>