<?php
// incluindo o arquivo referente a conexao
include "../banco-de-dados/conexao.php";

// qdo tiver a tabela situação alterar essa consulta ou aterar a view_folha_ponto

$sql = "SELECT nome_completo, diferenca_horas AS banco_horas FROM view_folha_ponto";

$result = $conn->query($sql);

//criamos uma variável chamada dados para receber os dados da consulta sql
$dados=[];

//percorrendo os dados e transformando em linhas
while($row = $result->fetch_assoc()){//Pega a próxima linha do resultado como um array associativo
    $dados[] = $row;
}
//var_dump($dados);
echo json_encode($dados);//Converte o array PHP para JSON.
?>