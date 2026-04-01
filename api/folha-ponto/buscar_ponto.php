<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id_funcionario"]) || !isset($requisicao["id_jornada"])) {
    echo json_encode(["status" => "erro", "resposta" => "Requisição inválida"]);
    exit;
}

$id_funcionario = (int)$requisicao["id_funcionario"];
$id_jornada = (int)$requisicao["id_jornada"];

$sql = "SELECT data, dia_semana, hora_entrada, hora_saida, intervalo_inicio, intervalo_fim FROM view_espelho_ponto WHERE id_funcionario = ? AND id_jornada = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $id_funcionario, $id_jornada);

if ($stmt->execute()) {
    $resultado = $stmt->get_result();

    $dados = [];
    while($row = $resultado->fetch_assoc()) {
        $dados[] = $row;
    }

    echo json_encode(["status" => "sucesso", "resposta" => $dados]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "Não foi possível executar a consulta sql"]);
}
?>