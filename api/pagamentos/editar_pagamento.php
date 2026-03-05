<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    require_once(__DIR__ . "/../../banco-de-dados/conexao.php");

    $dados_pagamento_editado = json_decode(file_get_contents("php://input"), true);

    $idFolha = $conn->real_escape_string($dados_pagamento_editado["idFolha"]);
    $informacoesJSON = $conn->real_escape_string(json_encode($dados_pagamento_editado["valoresUnidos"]));

    if($idFolha){
        echo "Id da Folha: " . $idFolha;
        echo "Informações JSON: " . $informacoesJSON;

        $sql = "UPDATE tb_folhapagamento SET informacoes = '$informacoesJSON' WHERE id = $idFolha";
        
        $conn->query($sql);
        
        echo "Informações atualizadas!";
        echo json_encode(["informacoes" => $informacoesJSON]);
    } else {
        echo "Informações NÃO FORAM atualizadas!";
    }
}




?>