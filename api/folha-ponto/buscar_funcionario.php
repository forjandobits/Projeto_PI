<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

$requisicao = json_decode(file_get_contents("php://input"), true);
$filtro = $requisicao["pesquisa"];

if ($filtro != "") {

    $sql = "SELECT id_funcionario, nome_completo FROM tb_funcionario WHERE nome_completo LIKE ?";
    $stmt = $conn->prepare($sql);

    $param = "%" . $filtro . "%";
    $stmt->bind_param("s", $param);

    if ($stmt->execute()){

        $resultado = $stmt->get_result();

        $dados = [];
        while($row = $resultado->fetch_assoc()) {
            $dados[] = $row;
        }

        echo json_encode(["status"=>"sucesso", "resposta"=>$dados]);
    } else (
        echo json_encode(["status"=>"erro", "resposta"=>"Não foi possivel pesquisar."]);
    )

} else {
    echo json_encode(["status"=>"erro", "resposta"=>"Sem pesquisa."]);
}
?>