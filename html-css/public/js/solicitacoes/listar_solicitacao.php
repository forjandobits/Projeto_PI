<?php
require_once "../../../../banco-de-dados/conexao.php";

header('Content-Type: application/json; charset=utf-8');

$dados = [];

try {

    if (!$conn) {
        throw new Exception("Falha na conexão com o banco.");
    }

    $sql = "SELECT nome, opcoes, data_solicitacao, status 
            FROM tb_solicitacoes 
            ORDER BY id_solicitacao DESC";

    $resultado = $conn->query($sql);

    if (!$resultado) {
        throw new Exception($conn->error);
    }

    while ($row = $resultado->fetch_assoc()) {
        $dados[] = $row;
    }

    echo json_encode($dados, JSON_UNESCAPED_UNICODE);

} catch (Exception $e) {

    echo json_encode([
        "erro" => true,
        "mensagem" => $e->getMessage()
    ]);
}

$conn->close();
