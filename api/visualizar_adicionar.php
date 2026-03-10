<?php

header("Content-Type: application/json");

// Incluindo o arquivo de conexão com o banco
include(__DIR__ . "/../banco-de-dados/conexao.php");

// Lendo a requisição, transformando em json e armazeando na variável
$dados = json_decode(file_get_contents("php://input"), true);

// Convertendo o valor do id em inteiro
$id = (int)$dados['id_solicitacao'];

$motivo = $conn->real_escape_string($dados["motivo"]);
$status = $conn->real_escape_string($dados["status"]);


// Alterando o motivo e o status
$sql = "UPDATE tb_solicitacoes SET motivo = '$motivo', status = '$status' WHERE id_solicitacao = $id";


if($conn->query($sql)){
   echo json_encode(["status" => "ok"]);
} else {
   echo json_encode(["erro" => "Erro ao atualizar"]);
}

// Fechando a conexão
$conn->close();

?>
