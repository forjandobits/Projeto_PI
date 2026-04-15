<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id_funcionario"]) || !isset($requisicao["id_jornada"]) || !isset($requisicao["id_ponto"])) {
    echo json_encode(["status" => "erro", "resposta" => "Requisição inválida"]);
    exit;
}

$id_funcionario = (int)$requisicao["id_funcionario"];
$id_jornada = (int)$requisicao["id_jornada"];
$id_ponto = (int)$requisicao["id_ponto"];
$hora_entrada = (string)$requisicao["hora_entrada"];
$hora_saida = (string)$requisicao["hora_saida"];
$intervalo_inicio = (string)$requisicao["intervalo_inicio"];
$intervalo_fim = (string)$requisicao["intervalo_fim"];
$ferias_falta = (int)$requisicao["ferias_falta"];

$sql = "UPDATE tb_jornada SET hora_entrada = ?, hora_saida = ?, intervalo_inicio = ?, intervalo_fim = ? WHERE id_funcionario = ? AND id_jornada = ?;";
$stmt1 = $conn->prepare($sql);
$stmt1->bind_param("ssssii", $hora_entrada, $hora_saida, $intervalo_inicio, $intervalo_fim, $id_funcionario, $id_jornada);
$sql = "UPDATE tb_folhaponto SET ferias_falta_abonada = ? WHERE id_funcionario = ? AND id_ponto = ?";
$stmt2 = $conn->prepare($sql);
$stmt2->bind_param("iii", $ferias_falta, $id_funcionario, $id_ponto);

if ($stmt1->execute() && $stmt2->execute()) {
    echo json_encode(["status" => "sucesso", "resposta" => "Ponto atualizado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "Não foi possível atualizar o ponto"]);
}
?>