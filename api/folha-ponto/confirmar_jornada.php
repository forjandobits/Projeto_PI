<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id_funcionario"]) || !isset($requisicao["id_jornada"])) {
    echo json_encode(["status" => "erro", "resposta" => "Requisição inválida"]);
    exit;
}

$id_funcionario = (int) $requisicao["id_funcionario"];
$id_jornada = (int) $requisicao["id_jornada"];

$sql = "UPDATE tb_jornada SET confirmado = 1 WHERE id_funcionario = ? AND id_jornada = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $id_funcionario, $id_jornada);

if ($stmt->execute()) {
    echo json_encode(["status" => "sucesso", "resposta" => "Jornada confirmado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "Prro ao confirmar ponto!"]);

}
?>