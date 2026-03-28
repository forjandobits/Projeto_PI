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
  v.id_funcionario,
  v.nome_completo,
  SUM(v.diferenca_horas) AS saldo_mes,
  CASE
      WHEN SUM(v.diferenca_horas) > 0 THEN 'Crédito'
      WHEN SUM(v.diferenca_horas) < 0 THEN 'Débito'
      ELSE 'Regular'
  END AS situacao
FROM view_folha_ponto AS v
WHERE
  YEAR(STR_TO_DATE(CONCAT(v.ano,' ',LPAD(v.semana,2,'0'),' 1'), '%X %V %w')) = YEAR(CURDATE())
  AND MONTH(STR_TO_DATE(CONCAT(v.ano,' ',LPAD(v.semana,2,'0'),' 1'), '%X %V %w')) = MONTH(CURDATE())
GROUP BY v.id_funcionario, v.nome_completo";

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