<?php

header("Content-Type: application/json");

// Incluindo o arquivo de conexão com o banco
include(__DIR__ . "/../banco-de-dados/conexao.php");

$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

// Buscando os dados da solicitação
$sql = "SELECT tb_solicitacoes.*, tb_funcionario.nome_completo 
FROM tb_solicitacoes 
INNER JOIN tb_funcionario ON tb_solicitacoes.id_funcionario = tb_funcionario.id_funcionario
WHERE id_solicitacao = ?";

// Preparando a query
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute(); // Consultando o bd
$resultado = $stmt->get_result(); // Pega o resultado da consulta

// Verifica se a consulta realmente retornou um registro
if ($resultado->num_rows > 0) {

   $dados = $resultado->fetch_assoc(); // pega os dados como array

   echo json_encode($dados); // Converte o array em JSON

} else { // se não encontrar o array reotorna a mensagem

echo json_encode(["erro" => "Solicitação com id não encontrado"]);
}

// fecha a consulta e a conexão com o bd
$stmt->close();
$conn->close();

?>


