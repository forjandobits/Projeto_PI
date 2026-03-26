<?php

header("Content-Type: application/json");

// Incluindo o arquivo de conexão com o banco
include(__DIR__ . "/../banco-de-dados/conexao.php");

// Lendo a requisição, transformando em json e armazeando na variável
$dados = json_decode(file_get_contents("php://input"), true);

// Convertendo o valor do id em inteiro
$id = (int)$dados['id_solicitacao'];

$motivo = $dados["motivo"];
$status = $dados["status"];


// Alterando o motivo e o status
$sql = "UPDATE tb_solicitacoes SET motivo = ?, status = ? WHERE id_solicitacao = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $motivo, $status, $id);

if($stmt->execute()){
   echo json_encode(["status" => "ok"]);
} else {
   echo json_encode(["erro" => "Erro ao atualizar"]);
}

// Fechando a conexão
$stmt->close();
$conn->close();

?>