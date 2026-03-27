<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

// Validação básica (evita undefined)
if (
    !isset($requisicao["cbo"]) ||
    !isset($requisicao["nomeCargo"]) ||
    !isset($requisicao["salario"]) ||
    !isset($requisicao["cargaHoraria"]) ||
    !isset($requisicao["regime"])
) {
    echo json_encode(["status" => "erro", "mensagem" => "Dados incompletos"]);
    exit;
}

// Sanitização
$cbo = $conn->real_escape_string($requisicao["cbo"]);
$nomeCargo = $conn->real_escape_string($requisicao["nomeCargo"]);
$salario = $conn->real_escape_string($requisicao["salario"]);
$cargaHoraria = $conn->real_escape_string($requisicao["cargaHoraria"]);
$regime = $conn->real_escape_string($requisicao["regime"]);


$sql = "INSERT INTO tb_cargo 
(nome_cargo, salario, carga_horaria, regime_trabalhista, cbo) 
VALUES ('$nomeCargo', '$salario', '$cargaHoraria', '$regime', '$cbo')";


if ($conn->query($sql)) {
    echo json_encode([
        "status" => "ok",
        "mensagem" => "Cargo cadastrado com sucesso!"
    ]);
} else {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Erro ao cadastrar: " . $conn->error
    ]);
}