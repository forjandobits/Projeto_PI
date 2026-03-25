<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id_funcionario"]) || !isset($requisicao["mes_fechar"])) {
    echo json_encode(["status" => "erro", "resposta" => "requisição inválida"]);
    exit;
}

$id_funcionario = (int)$requisicao["id_funcionario"];
$mes_fechar = (int)$requisicao["mes_fechar"];

$sql = "SELECT fechado FROM tb_folhaponto WHERE id_funcionario = ?";
$stmt1 = $conn->prepare($sql);
$stmt1->bind_param("i", $id_funcionario);

if ($stmt1->execute()) {
    $stmt1->close();
    $erro = false;
    $sql = "UPDATE tb_folhaponto SET fechado = 1 WHERE id_funcionario = ? AND MONTH(data) = ?";
    $stmt2 = $conn->prepare($sql);
    $stmt2->bind_param("ii", $id_funcionario, $mes_fechar);

    if ($stmt2->execute()) {
        echo json_encode(["status" => "sucesso", "resposta" => "mês fechado com sucesso!"]);
    } else {
        echo json_encode(["status" => "erro", "resposta" => "erro ao fechar o mês!"]);
    }
} else {
    echo json_encode(["status" => "erro", "resposta" => "não foi possível executar a consulta sql"]);
}
?>