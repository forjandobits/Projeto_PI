<?php

// Configura para poder receber requisições
header("Content-Type: application/json");

require_once __DIR__ . "/../banco-de-dados/conexao.php";

$nome = $_GET['nome_completo'] ?? '';

$sql = "SELECT nome_completo FROM tb_funcionario WHERE nome_completo LIKE ? LIMIT 10";
$stmt = $conn->prepare($sql);

$param = "%" .$nome."%";
$stmt->bind_param("s", $param);

$stmt->execute();
$resultado = $stmt->get_result();

$dados = [];

while ($row = $resultado->fetch_assoc()) {
    $dados[] = $row['nome_completo'];
}

echo json_encode($dados);