<?php
// Essas duas linhas mostram o erro em si ao invez do jason todo quebrado no console
ini_set('display_errors', 0);
error_reporting(E_ALL);


header("Content-Type: application/json");


require_once __DIR__ . "/../banco-de-dados/conexao.php";


$requisicao = json_decode(file_get_contents("php://input"), true);


if (!$requisicao) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "JSON inválido"
    ]);
    exit;
}


$nomeCompleto = isset($requisicao["nomeCompleto"]) ? $conn->real_escape_string($requisicao["nomeCompleto"]) : '';
$telefone = isset($requisicao["telefone"]) ? $conn->real_escape_string($requisicao["telefone"]) : '';
$email = isset($requisicao["email"]) ? $conn->real_escape_string($requisicao["email"]) : '';
$dataNasc = isset($requisicao["dataNasc"]) ? $conn->real_escape_string($requisicao["dataNasc"]) : '';
$cpf = isset($requisicao["cpf"]) ? $conn->real_escape_string($requisicao["cpf"]) : '';
$rg = isset($requisicao["rg"]) ? $conn->real_escape_string($requisicao["rg"]) : '';
$genero = isset($requisicao["genero"]) ? $conn->real_escape_string($requisicao["genero"]) : '';
$estadoCivil = isset($requisicao["estadoCivil"]) ? $conn->real_escape_string($requisicao["estadoCivil"]) : '';
$pisPasep = isset($requisicao["pisPasep"]) ? $conn->real_escape_string($requisicao["pisPasep"]) : '';
$rua = isset($requisicao["rua"]) ? $conn->real_escape_string($requisicao["rua"]) : '';
$numeroCasa = isset($requisicao["numeroCasa"]) ? $conn->real_escape_string($requisicao["numeroCasa"]) : '';
$bairro = isset($requisicao["bairro"]) ? $conn->real_escape_string($requisicao["bairro"]) : '';
$cidade = isset($requisicao["cidade"]) ? $conn->real_escape_string($requisicao["cidade"]) : '';
$estado = isset($requisicao["estado"]) ? $conn->real_escape_string($requisicao["estado"]) : '';
$cep = isset($requisicao["cep"]) ? $conn->real_escape_string($requisicao["cep"]) : '';
$cargo = isset($requisicao["cargo"]) ? $conn->real_escape_string($requisicao["cargo"]) : '';
$cbo = isset($requisicao["cbo"]) ? $conn->real_escape_string($requisicao["cbo"]) : '';
$regime = isset($requisicao["regime"]) ? $conn->real_escape_string($requisicao["regime"]) : '';
$remuneracao = isset($requisicao["remuneracao"]) ? $conn->real_escape_string($requisicao["remuneracao"]) : '';
$banco = isset($requisicao["banco"]) ? $conn->real_escape_string($requisicao["banco"]) : '';
$agencia = isset($requisicao["agencia"]) ? $conn->real_escape_string($requisicao["agencia"]) : '';
$numeroConta = isset($requisicao["numeroConta"]) ? $conn->real_escape_string($requisicao["numeroConta"]) : '';
$chavePix = isset($requisicao["chavePix"]) ? $conn->real_escape_string($requisicao["chavePix"]) : '';
$certidaoCasamento = !empty($requisicao["certidaoCasamento"]) ? 1 : 0;
$pcd = !empty($requisicao["pcd"]) ? 1 : 0;
$cam = !empty($requisicao["cam"]) ? 1 : 0;
$filhos = !empty($requisicao["filhos"]) ? 1 : 0;
$qtdFilhos = isset($requisicao["qtdFilhos"]) ? $conn->real_escape_string($requisicao["qtdFilhos"]) : '';




if (!$nomeCompleto || !$email || !$telefone) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "Campos obrigatórios faltando"
    ]);
    exit;
}




$sql1 = "INSERT INTO tb_funcionario (id_cargo, nome_completo, data_nascimento, sexo, estado_civil, email)
         VALUES ('$cargo', '$nomeCompleto', '$dataNasc', '$genero', '$estadoCivil', '$email')";


if (!$conn->query($sql1)) {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
    exit;
}


$idFuncionario = $conn->insert_id;


$sql2 = "INSERT INTO tb_endereco (id_funcionario, cidade, bairro, rua, numero_casa, cep)
         VALUES ('$idFuncionario', '$cidade', '$bairro', '$rua', '$numeroCasa', '$cep')";


$sql3 = "INSERT INTO tb_telefone (id_funcionario, telefone) VALUES ('$idFuncionario', '$telefone')";


$sql4 = "INSERT INTO tb_banco (id_funcionario, agencia, numero_conta, tipo_conta, chave_pix)
         VALUES ('$idFuncionario', '$agencia', '$numeroConta', '$banco', '$chavePix')";


$sql5 = "INSERT INTO tb_documento (
            id_funcionario, rg, cpf, pis_pasep, comprovante_escolaridade, cam, certidao_casamento_nascimento, laudo_pcd
         ) VALUES (
            '$idFuncionario', '$rg', '$cpf', '$pisPasep', '', '$cam', '$certidaoCasamento', '$pcd'
         )";


if (
    $conn->query($sql2) &&
    $conn->query($sql3) &&
    $conn->query($sql4) &&
    $conn->query($sql5)
) {
    echo json_encode(["status" => "ok", "mensagem" => "Funcionário cadastrado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
}

