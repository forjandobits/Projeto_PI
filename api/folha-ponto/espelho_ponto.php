<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id"])) {
    echo json_encode(["status" => "erro", "resposta" => "requisição inválida"]);
    exit;
}

$id = (int)$requisicao["id"];

$sql = "SELECT * FROM view_espelho_ponto WHERE id_funcionario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);

if ($stmt->execute()) {
    $resultado = $stmt->get_result();

    $dados = [];
    while($row = $resultado->fetch_assoc()) {
        $dados[] = $row;
    }

    // echo json_encode($dados);
    echo json_encode(["status" => "sucesso", "resposta" => $dados]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "não foi possível executar a consulta sql"]);
}
?>