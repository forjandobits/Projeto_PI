<?php

header("Content-Type: application/json");

include(__DIR__ . "/../banco-de-dados/conexao.php");

$id = 1;

$sql = "UPDATE tb_solicitacoes.*, tb_funcionario.nome_completo 
FROM tb_solicitacoes 
INNER JOIN tb_funcionario ON tb_solicitacoes.id_funcionario = tb_funcionario.id_funcionario
WHERE id_solicitacao = ?";

$consulta = $conn->prepare($sql);
$consulta->bind_param("i", $id);
$consulta->execute();
$resultado = $consulta->get_result();

if ($resultado->num_rows > 0) {

   $dados = $resultado->fetch_assoc();

   echo json_encode($dados);

} else {

echo json_encode(["erro" => "Solicitação com id não encontrado"]);
}



?>
