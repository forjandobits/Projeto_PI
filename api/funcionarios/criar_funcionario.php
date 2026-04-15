<?php
// Essas duas linhas mostram o erro em si ao invez do jason todo quebrado no console
ini_set('display_errors', 0);
error_reporting(E_ALL);


header("Content-Type: application/json");


require_once __DIR__ . "/../../banco-de-dados/conexao.php";


$requisicao = json_decode(file_get_contents("php://input"), true);


if (!$requisicao) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "JSON inválido"
    ]);
    exit;
}


$nomeCompleto = $conn->real_escape_string($requisicao["nomeCompleto"]);
$telefone = $conn->real_escape_string($requisicao["telefone"]);
$email = $conn->real_escape_string($requisicao["email"]);
$dataNasc = $conn->real_escape_string($requisicao["dataNasc"]);
$cpf = $conn->real_escape_string($requisicao["cpf"]);
$rg = $conn->real_escape_string($requisicao["rg"]);
$genero = $conn->real_escape_string($requisicao["genero"]);
$estadoCivil = $conn->real_escape_string($requisicao["estadoCivil"]);
$pisPasep = $conn->real_escape_string($requisicao["pisPasep"]);
$nis = $conn->real_escape_string($requisicao["nis"]);
$nit = $conn->real_escape_string($requisicao["nit"]);
$ctps = $conn->real_escape_string($requisicao["ctps"]);
$rua = $conn->real_escape_string($requisicao["rua"]);
$numeroCasa = $conn->real_escape_string($requisicao["numeroCasa"]);
$complemento = $conn->real_escape_string($requisicao["complemento"]) ?? "";
$bairro = $conn->real_escape_string($requisicao["bairro"]);
$cidade = $conn->real_escape_string($requisicao["cidade"]);
$estado = $conn->real_escape_string($requisicao["estado"]);
$cep = $conn->real_escape_string($requisicao["cep"]);
$cargo = $conn->real_escape_string($requisicao["cargo"]);
$nome_banco = $conn->real_escape_string($requisicao["banco"]);
$agencia = $conn->real_escape_string($requisicao["agencia"]);
$numeroConta = $conn->real_escape_string($requisicao["numeroConta"]);
$chavePix = $conn->real_escape_string($requisicao["chavePix"]);
$num_filhos = $conn->real_escape_string($requisicao["qtdFilhos"]);
$certidaoCasamento = !empty($requisicao["certidaoCasamento"]) ? 1 : 0;
$cnh = !empty($requisicao["cnh"]) ? 1 : 0;
$pcd = !empty($requisicao["pcd"]) ? 1 : 0;
$tem_filho = !empty($requisicao["filhos"]) ? 1 : 0;
$cam = !empty($requisicao["cam"]) ? 1 : 0;




if (empty($nomeCompleto) || empty($email) || empty($telefone) || empty($dataNasc) || empty($cpf) || empty($rg) || empty($genero) || 
empty($estadoCivil) || empty($pisPasep) || empty($rua) || empty($numeroCasa) || empty($bairro) || empty($cidade) || empty ($estado) || 
empty($cep) || empty($cargo) || empty($nome_banco) || empty($agencia) || empty($numeroConta) || empty($chavePix) || empty($nis) || empty($nit) || empty($ctps)) {
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


$sql2 = "INSERT INTO tb_endereco (id_funcionario, cidade, bairro, rua, numero_casa, cep, estado, complemento)
         VALUES ('$idFuncionario', '$cidade', '$bairro', '$rua', '$numeroCasa', '$cep', '$estado', '$complemento')";


$sql3 = "INSERT INTO tb_telefone (id_funcionario, telefone) VALUES ('$idFuncionario', '$telefone')";


$sql4 = "INSERT INTO tb_banco (id_funcionario, agencia, numero_conta, nome_banco, chave_pix)
         VALUES ('$idFuncionario', '$agencia', '$numeroConta', '$nome_banco', '$chavePix')";


$sql5 = "INSERT INTO tb_documento (
            id_funcionario, rg, cpf, pis_pasep, cam, certidao_casamento_nascimento, laudo_pcd, nis, nit, ctps, cnh
         ) VALUES (
            '$idFuncionario', '$rg', '$cpf', '$pisPasep', '$cam', '$certidaoCasamento', '$pcd', '$nis', '$nit', '$ctps', '$cnh'
         )";

$sql6 = "INSERT INTO tb_filho (
            id_funcionario, tem_filho, numero_filho
         ) VALUES (
            '$idFuncionario', '$tem_filho', '$num_filhos'
         )";


if (
    $conn->query($sql2) &&
    $conn->query($sql3) &&
    $conn->query($sql4) &&
    $conn->query($sql5) &&
    $conn->query($sql6) 
) {
    echo json_encode(["status" => "sucesso", "mensagem" => "Funcionário cadastrado com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => $conn->error]);
}

