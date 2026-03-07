<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

$id = (int)$conn->real_escape_string($requisicao["id"]);

if (isset($id) && !empty($id)) {
    $sql = "SELECT * FROM view_espelho_ponto WHERE id_funcionario = ?";
    $sql = $conn->prepare($sql);
    $sql->bind_param("i", $id);

    if ($sql->execute()) {
        $resultado = $sql->get_result();
        $resposta = $resultado->fetch_assoc();
        echo json_encode(["status" => "sucesso", "resposta" => $resposta]);
    } else {
        echo json_encode(["status" => "erro", "mensagem" => "não foi possível executar a consulta sql"]);
    }
} else {
    echo json_encode(["status" => "erro", "mensagem" => "requisição sem id"]);
}
// ?>