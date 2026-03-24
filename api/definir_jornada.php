<?php

header("Content-Type: application/json");

include(__DIR__ . "/../banco-de-dados/conexao.php");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["sucesso" => false, "mensagem" => ])
}

?>
