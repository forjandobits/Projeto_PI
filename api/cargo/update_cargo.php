<?php
header("Content-Type: application/json");

// MOSTRAR ERROS (apenas dev)
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

// 🔹 pega JSON enviado
$requisicao = json_decode(file_get_contents("php://input"), true);

// 🔹 validação básica
if (
    !isset($requisicao["id_cargo"]) ||
    !isset($requisicao["cbo"]) ||
    !isset($requisicao["nomeCargo"]) ||
    !isset($requisicao["salario"]) ||
    !isset($requisicao["cargaHoraria"]) ||
    !isset($requisicao["regime"])
) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Dados incompletos"
    ]);
    exit;
}

// 🔹 sanitização
$id = $conn->real_escape_string($requisicao["id_cargo"]);
$cbo = $conn->real_escape_string($requisicao["cbo"]);
$nomeCargo = $conn->real_escape_string($requisicao["nomeCargo"]);
$salario = $conn->real_escape_string($requisicao["salario"]);
$cargaHoraria = $conn->real_escape_string($requisicao["cargaHoraria"]);
$regime = $conn->real_escape_string($requisicao["regime"]);

// 🔹 query UPDATE
$sql = "UPDATE tb_cargo SET 
    cbo = '$cbo',
    nome_cargo = '$nomeCargo',
    salario = '$salario',
    carga_horaria = '$cargaHoraria',
    regime_trabalhista = '$regime'
    WHERE id_cargo = '$id'
";

// 🔹 executa
if ($conn->query($sql)) {
    echo json_encode([
        "status" => "ok",
        "mensagem" => "Cargo atualizado com sucesso!"
    ]);
} else {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Erro ao atualizar: " . $conn->error
    ]);
}