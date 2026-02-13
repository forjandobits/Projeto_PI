<?php
// incluindo o arquivo referente a conexao
include ".../banco-de-dados/conexao.php";

//criando a consulta para exibição dos funcionarios cadastrados no bd
// por hora estamos mostrando apenas o nome e o banco de horas, pois ainda nao temos a tabela solicitações com a situação do funcionario
$sql = "SELECT 
    n.nome_completo,
    SUM(p.total_horas_dia) - c.carga_horaria AS banco_horas

FROM tb_funcionario n 
JOIN tb_cargo c 
    ON n.id_cargo = c.id_cargo
JOIN tb_folhaponto p 
    ON n.id_funcionario = p.id_funcionario

GROUP BY n.id_funcionario, n.nome_completo, c.carga_horaria;
";

$result = $conn->query($sql);

//criamos uma variável chamada dados para receber os dados da consulta sql
$dados=[];

//percorrendo os dados e transformando em linhas
while($row = $result->fetch_assoc()){//Pega a próxima linha do resultado como um array associativo
    $dados[] = $row;
}
var_dump($dados);
echo json_encode($dados);//Converte o array PHP para JSON.
?>