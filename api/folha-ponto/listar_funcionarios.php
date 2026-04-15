<?php

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

//esta somando todos os meses, precisamos fazer por mes
// $sql = "SELECT 
//     v.id_funcionario,
//     f.nome_completo,
//     SUM(v.diferenca_horas) AS diferenca_horas,
//     MAX(v.situacao) AS situacao,
//     s.saldo_mes
//     FROM view_folha_ponto v
//     JOIN view_saldo_mensal s 
//         ON v.id_funcionario = s.id_funcionario
//     JOIN tb_funcionario f 
//         ON v.id_funcionario = f.id_funcionario
//     GROUP BY v.id_funcionario, f.nome_completo, s.saldo_mes";
// ------------------------------------------------------------------

// Esta calculando o saldo/ diferença de horas do mes corrente dos funcionarios
// pega as diferenças semanais, descobre quais semanas pertencem ao mês atual e soma tudo para gerar o saldo mensal

$sql = "SELECT
    f.id_funcionario,
    f.nome_completo,

    TIME_FORMAT(
        SEC_TO_TIME(
            COALESCE(SUM(
                TIME_TO_SEC(p.total_horas_dia)
                -
                ((c.carga_horaria * 3600) / 5)
            ), 0)
        ),
        '%H:%i'
    ) AS banco_horas,

    CASE
        WHEN COALESCE(SUM(
            TIME_TO_SEC(p.total_horas_dia)
            -
            ((c.carga_horaria * 3600) / 5)
        ), 0) > 0 THEN 'Crédito'

        WHEN COALESCE(SUM(
            TIME_TO_SEC(p.total_horas_dia)
            -
            ((c.carga_horaria * 3600) / 5)
        ), 0) < 0 THEN 'Débito'

        ELSE 'Regular'
    END AS situacao

FROM tb_funcionario f

JOIN tb_cargo c 
    ON f.id_cargo = c.id_cargo

LEFT JOIN tb_folhaponto p 
    ON f.id_funcionario = p.id_funcionario

LEFT JOIN tb_jornada j 
    ON j.id_ponto = p.id_ponto
    AND j.id_funcionario = f.id_funcionario
    AND j.confirmado = 1  

GROUP BY f.id_funcionario, f.nome_completo;
";

$result = $conn->query($sql);

// criamos uma variável chamada dados para receber os dados da consulta sql
$dados=[];

//percorrendo os dados e transformando em linhas
while($row = $result->fetch_assoc()){//Pega a próxima linha do resultado como um array associativo
    $dados[] = $row;
}
//var_dump($dados);
echo json_encode($dados);
?>