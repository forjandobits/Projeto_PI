<?php

require_once __DIR__ . "/../banco-de-dados/conexao.php";
// include __DIR__ . "/../banco-de-dados/conexao.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["sucesso" => false, "mensagem" => "Método inválido."]);
    exit;
}

// ======================
// DADOS RECEBIDOS
// ======================

$dadosFormulario = json_decode(file_get_contents("php://input"), true);

$nome_funcionario = $dadosFormulario['nome_funcionario'] ?? null;
$data_solicitacao = $dadosFormulario['data_solicitacao'] ?? null;
$tipo_solicitacao = $dadosFormulario['tipo_solicitacao'] ?? null;
$observacao       = $dadosFormulario['observacao'] ?? null;
$motivo           = $dadosFormulario['motivo'] ?? null;
$status           = "Pendente";

if (!$nome_funcionario || !$tipo_solicitacao || !$observacao) {
    echo json_encode(["sucesso" => false, "mensagem" => "Campos obrigatórios não preenchidos."]);
    exit;
}

// ======================
// BUSCAR ID DO FUNCIONÁRIO
// ======================

$sqlBusca = "SELECT id_funcionario FROM tb_funcionario WHERE nome_completo = ?";
$stmtBusca = $conn->prepare($sqlBusca);
$stmtBusca->bind_param("s", $nome_funcionario);
$stmtBusca->execute();
$resultado = $stmtBusca->get_result();

if ($resultado->num_rows === 0) {
    echo json_encode(["sucesso" => false, "mensagem" => "Funcionário não encontrado."]);
    exit;
}

$dadosFuncionario = $resultado->fetch_assoc();
$id_funcionario = $dadosFuncionario['id_funcionario'];

$stmtBusca->close();

// ======================
// INSERIR SOLICITAÇÃO
// ======================

$sqlInsert = "INSERT INTO tb_solicitacoes 
(id_funcionario, data_solicitacao, tipo_solicitacao, observacao, motivo, status)
VALUES (?, ?, ?, ?, ?, ?)";

$stmtInsert = $conn->prepare($sqlInsert);
$stmtInsert->bind_param(
    "isssss",
    $id_funcionario,
    $data_solicitacao,
    $tipo_solicitacao,
    $observacao,
    $motivo,
    $status
);

if ($stmtInsert->execute()) {
    echo json_encode([
        "sucesso" => true,
        "mensagem" => "Solicitação cadastrada com sucesso."
    ]);
} else {
    echo json_encode([
        "sucesso" => false,
        "mensagem" => "Erro ao cadastrar solicitação."
    ]);
}

$stmtInsert->close();
$conn->close();
