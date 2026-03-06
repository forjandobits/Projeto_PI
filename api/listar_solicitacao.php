<?php

require_once __DIR__ . "/../banco-de-dados/conexao.php";


if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["sucesso" => false, "mensagem" => "Método inválido."]);
    exit;
}

$sql = "SELECT tipo_solicitacao, data_solicitacao, observacao
        FROM tb_solicitacoes";

$result = $conn->query($sql);

$dados = [];

while ($linha = $result->fetch_assoc()) {
    $dados[] = $linha;
}

header("Content-Type: application/json");
echo json_encode($dados);