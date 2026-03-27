<?php
session_start();
require_once __DIR__ . "/../../banco-de-dados/conexao.php";

header("Content-Type: application/json");

// ======================
// VALIDAÇÃO
// ======================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["sucesso" => false, "mensagem" => "Método inválido."]);
    exit;
}

// ======================
// DADOS RECEBIDOS
// ======================

$dados = json_decode(file_get_contents("php://input"), true);

$id_funcionario = $dados['id_funcionario'] ?? null;
$data_demissao  = $dados['data_demissao'] ?? null;

if (!$id_funcionario || !$data_demissao) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Dados incompletos."
    ]);
    exit;
}

// ======================
// UPDATE FUNCIONÁRIO
// ======================

$sql = "UPDATE tb_funcionario 
        SET data_demissao = ?, situacao = 0
        WHERE id_funcionario = ?";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro SQL: " . $conn->error
    ]);
    exit;
}

$stmt->bind_param("si", $data_demissao, $id_funcionario);

if ($stmt->execute()) {
    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Funcionário desligado com sucesso."
    ]);
} else {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao atualizar funcionário."
    ]);
}

$stmt->close();
$conn->close();