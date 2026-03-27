<?php
header("Content-Type: application/json");
require_once __DIR__ . "/../../banco-de-dados/conexao.php";




$funcionario_selecionado = json_decode(file_get_contents("php://input"), true);


if (!isset($funcionario_selecionado['id_funcionario'])) {
    echo json_encode(["status" => "erro", "mensagem" => "ID do funcionário não informado"]);
    exit;
}


$id_funcionario = $conn->real_escape_string($funcionario_selecionado['id_funcionario']);


$sql = "
SELECT
    f.*,
    c.nome_cargo,
    b.nome_banco, b.agencia, b.numero_conta, b.chave_pix,
    t.telefone,
    e.rua, e.numero_casa, e.complemento, e.bairro, e.cidade, e.estado, e.cep,
    d.cpf, d.rg, d.pis_pasep, d.certidao_casamento_nascimento, d.cam, d.laudo_pcd
FROM tb_funcionario f
LEFT JOIN tb_cargo c ON f.id_cargo = c.id_cargo
LEFT JOIN tb_banco b ON f.id_funcionario = b.id_funcionario
LEFT JOIN tb_documento d ON f.id_funcionario = d.id_funcionario
LEFT JOIN tb_telefone t ON f.id_funcionario = t.id_funcionario
LEFT JOIN tb_endereco e ON f.id_funcionario = e.id_funcionario
WHERE f.id_funcionario = $id_funcionario
";




$result = $conn->query($sql);


if (!$result) {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
    exit;
}


$funcionarios = [];


while ($row = $result->fetch_assoc()) {
    $funcionarios[] = $row;
}




echo json_encode($funcionarios);
?>


