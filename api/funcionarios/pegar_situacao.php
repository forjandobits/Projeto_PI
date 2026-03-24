<?php
header("Content-Type: application/json");
// include("conexao.php");
require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$sql = "SELECT situacao FROM tb_funcionario WHERE id_funcionario = ?";

$stmt = $conn->prepare("SELECT situacao FROM tb_funcionario WHERE id_funcionario = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $dados = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "situacao" => $dados['situacao']
    ]);
} else {
    echo json_encode([
        "success" => false,
        "error" => "Funcionário não encontrado"
    ]);
}
?>