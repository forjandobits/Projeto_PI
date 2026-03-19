<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id_funcionario"]) || !isset($requisicao["id_jornada"])) {
    echo json_encode(["status" => "erro", "resposta" => "requisição inválida"]);
    exit;
}

$id_funcionario = (int)$requisicao["id_funcionario"];
$id_jornada = (int)$requisicao["id_jornada"];
$hora_entrada = (string)$requisicao["hora_entrada"];
$hora_saida = (string)$requisicao["hora_saida"];
$intervalo_inicio = (string)$requisicao["intervalo_inicio"];
$intervalo_fim = (string)$requisicao["intervalo_fim"];
$ferias_falta = (int)$requisicao["ferias_falta"];

$sql = "UPDATE tb_jornada SET hora_entrada = ?, hora_saida = ?, intervalo_inicio = ?, intervalo_fim = ? WHERE id_funcionario = ? AND id_jornada = ?;";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssii", $hora_entrada, $hora_saida, $intervalo_inicio, $intervalo_fim, $id_funcionario, $id_jornada);

if ($stmt->execute()) {
    echo json_encode(["status" => "sucesso", "resposta" => "ponto atualizado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "não foi possível atualizar o ponto"]);
}
?>