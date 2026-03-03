<?php
header("Content-TYpe: application/json");

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao) {
    echo json_encode(["status" => "erro", "mensagem" => "Requisição vazia ou sem chave!"]);
} else {
    $valor = $requisicao["valor"];

    echo json_encode(["mensagem" => "Funcionario chegou!"]);
}
?>