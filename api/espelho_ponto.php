<?php

die("DEBUG API ESPelho");

header("Content-Type: application/json");

require_once __DIR__ . "/../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);
echo json_encode(["debug" => "entrei no espelho_ponto"]);
exit;

if (!$requisicao || !isset($requisicao["id"])) {
    echo json_encode(["status" => "erro", "resposta" => "requisição inválida"]);
    exit;
}

$id = (int)$requisicao["id"];
$mes = $requisicao["mes"] ?? date("Y-m");
$dataInicio = $mes . "-01";
$dataFim = date("Y-m-d", strtotime("$dataInicio +1 month"));

echo json_encode([
    "mes_recebido" => $mes,
    "data_inicio" => $dataInicio,
    "data_fim" => $dataFim
]);
exit;


$sql = "SELECT * 
        FROM view_espelho_ponto 
        WHERE id_funcionario = ?
        AND data >= ?
        AND data < ?";



$stmt = $conn->prepare($sql);
$stmt->bind_param("iss", $id, $dataInicio, $dataFim);

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