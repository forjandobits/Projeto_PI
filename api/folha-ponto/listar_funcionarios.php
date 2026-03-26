<?php
// incluindo o arquivo referente a conexao
//include "../banco-de-dados/conexao.php";

require_once __DIR__ . "/../../banco-de-dados/conexao.php";


// qdo tiver a tabela situação alterar essa consulta ou aterar a view_folha_ponto

// $sql = "SELECT
//     v.id_funcionario,
//     v.nome_completo,

//     TIME_FORMAT(
//         SEC_TO_TIME(
//             SUM(
//                 TIME_TO_SEC(v.total_horas_dia)
//                 -
//                 ((c.carga_horaria * 3600) / 5)
//             )
//         ),
//     '%H:%i') AS saldo_mes

// FROM view_espelho_ponto v

// JOIN tb_funcionario f
// ON v.id_funcionario = f.id_funcionario

// JOIN tb_cargo c
// ON f.id_cargo = c.id_cargo

// WHERE v.id_funcionario = ?
// AND MONTH(v.data) = ?
// AND YEAR(v.data) = ?

// GROUP BY v.id_funcionario";

// $stmtBanco = $conn->prepare($sqlBanco);

// $stmtBanco->bind_param("iii", $id, $mes, $ano);

// $stmtBanco->execute();

// $resultBanco = $stmtBanco->get_result();

// $bancoHoras = $resultBanco->fetch_assoc();

// $saldoMes = $bancoHoras["saldo_mes"] ?? "00:00";

//A view folha_ponto retorna a diferença de hr previstas - as horas trabalhadas por SEMANA

//$sql = "SELECT id_funcionario, nome_completo, diferenca_horas, situacao FROM view_folha_ponto";


$sql = "SELECT 
    v.id_funcionario,
    f.nome_completo,
    MAX(v.diferenca_horas) AS diferenca_horas,
    MAX(v.situacao) AS situacao,
    s.saldo_mes
    FROM view_folha_ponto v
    JOIN view_saldo_mensal s 
        ON v.id_funcionario = s.id_funcionario
    JOIN tb_funcionario f 
        ON v.id_funcionario = f.id_funcionario
    GROUP BY v.id_funcionario, f.nome_completo, s.saldo_mes";



$result = $conn->query($sql);

// criamos uma variável chamada dados para receber os dados da consulta sql
$dados=[];

//percorrendo os dados e transformando em linhas
while($row = $result->fetch_assoc()){//Pega a próxima linha do resultado como um array associativo
    $dados[] = $row;
}
//var_dump($dados);
echo json_encode($dados);//Converte o array PHP para JSON.
?>