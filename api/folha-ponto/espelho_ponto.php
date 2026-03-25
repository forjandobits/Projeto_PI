<?php
header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao || !isset($requisicao["id"])) {
    echo json_encode(["status" => "erro", "resposta" => "requisição inválida"]);
    exit;
}

$id = (int)$requisicao["id"];
$mes = $requisicao["mes"] ?? date("Y-m");
$dataInicio = $mes . "-01";
$dataFim = date("Y-m-d", strtotime("$dataInicio +1 month"));

// Buscar dados do espelho de ponto

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

    // Cálculo do banco de horas

    // $sqlBanco = "SELECT 
    //     SEC_TO_TIME(
    //         SUM(
    //             CASE
    //                 WHEN v.faltas = 1 THEN 0
    //                 WHEN DAYOFWEEK(v.data) IN (1,7) THEN 0
    //                 ELSE TIME_TO_SEC(v.total_horas_dia) -
    //                     ((c.carga_horaria * 3600) / 5)
    //             END
    //         )
    //     ) AS banco_horas

    //     FROM view_espelho_ponto v

    //     JOIN tb_funcionario f
    //     ON v.id_funcionario = f.id_funcionario

    //     JOIN tb_cargo c
    //     ON f.id_cargo = c.id_cargo

    //     WHERE v.id_funcionario = ?
    //     AND v.data >= ?
    //     AND v.data < ?";

$sqlBanco = "SELECT
        TIME_FORMAT(
            SEC_TO_TIME(SUM(saldo_mes_segundos)),
        '%H:%i') AS saldo_acumulado
        FROM (

            SELECT
            SUM(TIME_TO_SEC(v.total_horas_dia))
            -
            COUNT(v.data) * ((c.carga_horaria * 3600)/5)
            AS saldo_mes_segundos

            FROM view_espelho_ponto v

            JOIN tb_funcionario f
            ON v.id_funcionario = f.id_funcionario

            JOIN tb_cargo c
            ON f.id_cargo = c.id_cargo

            WHERE v.id_funcionario = ?

            GROUP BY YEAR(v.data), MONTH(v.data)

        ) meses";

$stmtBanco = $conn->prepare($sqlBanco);
$stmtBanco->bind_param("i", $id);

$stmtBanco->execute();
$resultBanco = $stmtBanco->get_result();
// $bancoHoras = [];
// while ($row = $resultBanco->fetch_assoc()){
//     $bancoHoras[] = $row;
// }
$bancoHoras = $resultBanco->fetch_assoc();

$saldo_acumulado = $bancoHoras["saldo_acumulado"] ?? "00:00";
    

//Retorna os dados no json

    echo json_encode(["status" => "sucesso", "resposta" => $dados, "saldo_acumulado" => $saldo_acumulado]);
} else {
    echo json_encode(["status" => "erro", "resposta" => "não foi possível executar a consulta sql"]);
}

?>