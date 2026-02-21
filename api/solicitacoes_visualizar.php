<?php

header("Content-Type: application/json");

include(__DIR__ . "/../banco-de-dados/conexao.php");

$id = 1;

$sql = "SELECT * FROM tb_solicitacoes where id = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("i", $id);

$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {

   $dados = $resultado->fetch_assoc();

   echo json_encode($dados);

} else {

echo json_encode(["erro" => "Solicitação com id não encontrado"]);
}



?>
