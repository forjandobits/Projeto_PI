<?php
include("conexao.php");

$id = $_POST['id'];

$sql = "UPDATE tb_funcionario SET situacao = 0 WHERE id_funcionario = $id";

if (mysqli_query($conn, $sql)) {
    echo "ok";
} else {
    echo "erro";
}
?>