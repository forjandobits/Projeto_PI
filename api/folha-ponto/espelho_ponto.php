<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

$id = $conn->real_escape_string($requisicao["id"]);

if (isset($id) && !empty($id)) {
    echo json_encode(["status" => "sucesso", "mensagem" => "tudo certo"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Deu ruim"]);
}
?>