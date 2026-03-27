<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Configura para poder receber requisições
header("Content-Type: application/json");

// Conecta com banco de dados
require_once __DIR__ . "/../banco-de-dados/conexao.php";

// Recebe qualquer requisição que for enviada para cá
$requisicao = json_decode(file_get_contents("php://input"), true);

if (!$requisicao) {
    echo json_encode([
        "status" => "erro",
        "mensagem" => "JSON inválido"
    ]);
    exit;
}

// Pega os valores enviados na requisição
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
$bairro = $conn->real_escape_string($requisicao["bairro"]);
$cidade = $conn->real_escape_string($requisicao["cidade"]); 
$estado = $conn->real_escape_string($requisicao["estado"]); 
$cep = $conn->real_escape_string($requisicao["cep"]); 
$cargo = $conn->real_escape_string($requisicao["cargo"]); 
$cbo = $conn->real_escape_string($requisicao["cbo"]);
$regime = $conn->real_escape_string($requisicao["regime"]);
$remuneracao = $conn->real_escape_string($requisicao["remuneracao"]);
$banco = $conn->real_escape_string($requisicao["banco"]); 
$agencia = $conn->real_escape_string($requisicao["agencia"]); 
$numeroConta = $conn->real_escape_string($requisicao["numeroConta"]); 
$chavePix = $conn->real_escape_string($requisicao["chavePix"]); 
$certidaoCasamento = $conn->real_escape_string($requisicao["certidaoCasamento"] ? 1 : 0); 
$pcd = $conn->real_escape_string($requisicao["pcd"] ? 1 : 0); 
$cam = $conn->real_escape_string($requisicao["cam"] ? 1 : 0); 
$filhos = $conn->real_escape_string($requisicao["filhos"] ? 1 : 0);
$qtdFilhos = $conn->real_escape_string($requisicao["qtdFilhos"]);
// $arquivos = $conn->real_escape_string($requisicao["arquivos"]);


// var_dump($cargo);
// exit;

// Query sql para inserir funcionário
$sql1 = "INSERT INTO tb_funcionario (id_cargo, nome_completo, data_nascimento, sexo, estado_civil, email) VALUES ($cargo, '$nomeCompleto', '$dataNasc', '$genero', '$estadoCivil', '$email')";

// Verifica se é possível rodar a query

if($conn->query($sql1)) {
    

    $idFuncionario = (int)$conn->insert_id;


    $sql2 = "INSERT INTO tb_endereco (id_funcionario, cidade, bairro, rua, numero_casa, cep) VALUES ($idFuncionario, '$cidade', '$bairro', '$rua', '$numeroCasa', '$cep')";

    $sql3 = "INSERT INTO tb_telefone (id_funcionario, telefone) VALUES ($idFuncionario, '$telefone')";

    $sql4 = "INSERT INTO tb_banco (id_funcionario, agencia, numero_conta, tipo_conta, chave_pix) VALUES ($idFuncionario, '$agencia', '$numeroConta', '$banco', '$chavePix')";

    $sql5 = "INSERT INTO tb_documento (id_funcionario, rg, cpf, ctps, pis_pasep, nis, nit, cam, certidao_casamento_nascimento, laudo_pcd) VALUES ('$idFuncionario', 
    '$rg', '$cpf', '$ctps', '$pisPasep', '$nis', '$nit', '$cam', '$certidaoCasamento', '$pcd')";

    if(
        $conn->query($sql2) &&
        $conn->query($sql3) &&
        $conn->query($sql4) &&
        $conn->query($sql5)
    ){
    echo json_encode(["status"=>"ok","mensagem"=>"Funcionário cadastrado"]);
}else{
    echo json_encode(["status"=>"erro","mensagem"=>$conn->error]);
} 
} else {
    echo json_encode([
        "status"=>"erro",
        "mensagem"=>$conn->error
    ]);
}


// if ($conn->query($sql)) {
//     // Se sim envia essa mensagem
//     echo json_encode(["status" => "ok", "mensagem" => "Funcionário cadastrado com sucesso!"]);
// } else {
//     // Se não envia essa mensagem
//     echo json_encode(["status" => "erro", "mensagem" => "Erro ao cadastrar: " . $conn->error]);
// };