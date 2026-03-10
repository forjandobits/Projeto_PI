<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
    require_once(__DIR__ . "/../../banco-de-dados/conexao.php");

    $dados = json_decode(file_get_contents("php://input"), true);

    echo $dados;

    $nomeFuncionario = $conn->real_escape_string($dados["nomeFuncionario"]);

    if($nomeFuncionario){
        echo "Nome Inserido: " . $nomeFuncionario;

        $sql = "SELECT salario, nome_cargo, nome_completo FROM tb_cargo JOIN tb_funcionario 
            WHERE tb_funcionario.id_cargo = tb_cargo.id_cargo AND tb_funcionario.nome_completo = '$nomeFuncionario'";
        
        $resultado = $conn->query($sql);

        $salario = [];

        while($row = $resultado->fetch_assoc()){
            $salario[] = $row;
        }

        echo json_encode($salario);
    } else {
        echo "Nome não inserido!";
    }
}

?>