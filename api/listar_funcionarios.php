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

// Puxando apenas nome dos funcionarios
$sql = "SELECT DISTINCT nome_completo FROM tb_funcionario";

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