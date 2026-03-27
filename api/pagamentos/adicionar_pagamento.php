<?php 

header("Content-Type: application/json");

require_once(__DIR__ . "/../../banco-de-dados/conexao.php");

$dados_pagamento = json_decode(file_get_contents("php://input"), true);


if(!$dados_pagamento) {
    echo json_encode(["erro" => "Dados nao recebidos"]);
    exit;
} else {
    echo "Valores recebidos: \n";
}

$id_funcionario = $conn->real_escape_string($dados_pagamento["id_funcionario"]);
$mes = $conn->real_escape_string($dados_pagamento["mes_referencia"]);
$informacoesJSON = json_encode($dados_pagamento["valoresUnidos"]);

echo "ID do Funcionário:" . $id_funcionario;
echo "Mês de Referência: " . $mes;
echo "Informações JSON: " . $informacoesJSON;

$sql = "INSERT INTO tb_folhapagamento (id_funcionario, informacoes, mes_referencia) VALUES ('$id_funcionario', '$informacoesJSON', '$mes')";

$conn->query($sql);

echo json_encode(["id_funcionario"=> $id_funcionario, "mes_referencia"=> $mes, "informacoes" => $informacoesJSON]);

?>