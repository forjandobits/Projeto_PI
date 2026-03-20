<?php
header("Content-Type: application/json");
include("conexao.php");

$id = intval($_POST['id']);

$sql = "UPDATE tb_funcionario SET situacao = 1 WHERE id_funcionario = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => $conn->error]);
}
?>