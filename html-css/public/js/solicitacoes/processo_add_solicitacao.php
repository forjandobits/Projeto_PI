<?php
include "conexao.php";
session_start();
require_once __DIR__ . "/../../../../banco-de-dados/conexao.php";

// processo dos campos
if ($_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['id_solicitacao'],$_POST['nome'],$_POST['opcoe'],$_POST['observacoes'],
    $_POST['dataFormatada'],$_POST['status'])){

    $idSolicitacao   = $_POST['id_solicitacao'];
    $nome_completo   = $_POST['nome'];
    $opcao           = $_POST['opcao'];
    $observacoes     = $_POST['observacoes'];
    $dataFormata     = $_POST['dataFormatada'];
    $status          = $_POST['status'];

    // Fala quais campos são obrigatorios
    if (empty($nome_completo)|| empty($opcao) || empty($observacoes)){
        echo "<p>Preencha os campos obrigatorios.</p>";
        exit;
    }

    // Buscando colaborador no banco
    $sql = "SELECT nome_completo FROM tb_funcionario WHERE id_funcionario = ?";
    $stmt = $conn->prepare($sql);
    $stmt->blind_param("i",id_funcionario);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows !== 1){
        echo "<p>Colaborador não encontrado.</p>";
        exit;
    }

}
?>