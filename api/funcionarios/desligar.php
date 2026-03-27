<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($dados['id_funcionario'])) {
    echo json_encode(["success" => false, "error" => "ID não enviado"]);
    exit;
}

$id = intval($dados['id_funcionario']);

// Atualiza
$stmt = $conn->prepare("UPDATE tb_funcionario SET situacao = 0 WHERE id_funcionario = ?");
$stmt->bind_param("i", $id);

if (!$stmt->execute()) {
    echo json_encode(["success" => false, "error" => $stmt->error]);
    exit;
}

// Busca a situação atualizada
$stmt = $conn->prepare("SELECT situacao FROM tb_funcionario WHERE id_funcionario = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $funcionario = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "situacao" => $funcionario['situacao']
    ]);
} else {
    echo json_encode([
        "success" => false,
        "error" => "Funcionário não encontrado"
    ]);
}
?>