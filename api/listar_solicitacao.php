<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../banco-de-dados/conexao.php";

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Método inválido."
    ]);
    exit;
}

// incluir s.id_solicitaçao
$sql = "SELECT
        s.id_solicitacao, 
        f.id_funcionario,
        s.tipo_solicitacao,
        f.nome_completo,
        DATE_FORMAT(s.data_solicitacao, '%d/%m/%Y') AS data_solicitacao,
        s.observacao,
        s.status
    FROM tb_solicitacoes s
    JOIN tb_funcionario f 
        ON s.id_funcionario = f.id_funcionario
    ORDER BY 
    (s.status = 'pendente') DESC,(s.status = 'aprovado') DESC,(s.status = 'negado') DESC,
    s.data_solicitacao DESC"; 

$result = $conn->query($sql);

if (!$result) {
    echo json_encode([
        "sucesso" => false,
        "erro" => $conn->error
    ]);
    exit;
}

$dados = [];

while ($linha = $result->fetch_assoc()) {
    $dados[] = $linha;
}

echo json_encode($dados);