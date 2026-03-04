<?php
// Configura para poder receber requisições
header("Content-Type: application/json");

// Conecta com banco de dados
require_once __DIR__ . "/../banco-de-dados/conexao.php";

// Recebe qualquer requisição que for enviada para cá
$requisicao = json_decode(file_get_contents("php://input"), true);

// Pega os valores enviados na requisição
$cbo = $conn->real_escape_string($requisicao["cbo"]);
$nomeCargo = $conn->real_escape_string($requisicao["nomeCargo"]);
$salario = $conn->real_escape_string($requisicao["salario"]);
$cargaHoraria = $conn->real_escape_string($requisicao["cargaHoraria"]);
$regime = $conn->real_escape_string($requisicao["regime"]);
$escala = $conn->real_escape_string($requisicao["escala"]);

// Query sql para inserir funcionário
$sql = "INSERT INTO tb_cargo (nome_cargo, salario, carga_horaria, regime_trabalhista, escala, cbo) VALUES ('$nomeCargo', '$salario', '$cargaHoraria', '$regime', '$escala', '$cbo')";

// Verifica se é possível rodar a query
if ($conn->query($sql)) {
    // Se sim envia essa mensagem
    echo json_encode(["status" => "ok", "mensagem" => "Funcionário cadastrado com sucesso!"]);
} else {
    // Se não envia essa mensagem
    echo json_encode(["status" => "erro", "mensagem" => "Erro ao cadastrar: " . $conn->error]);
};