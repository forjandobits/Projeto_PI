 <?php
require_once __DIR__ . "/../../banco-de-dados/conexao.php";


$data = json_decode(file_get_contents("php://input"), true);


$id = $data['id_funcionario'];


// dados
$nome = $data['nome_completo'];
$email = $data['email'];
$data_nascimento = $data['data_nascimento'];
$sexo = $data['sexo'];
$estado_civil = $data['estado_civil'];
$id_cargo = $data['id_cargo'];


$telefone = $data['telefone'];


$rua = $data['rua'];
$numero = $data['numero_casa'];
$bairro = $data['bairro'];
$cidade = $data['cidade'];
$cep = $data['cep'];


$agencia = $data['agencia'];
$conta = $data['numero_conta'];
$pix = $data['chave_pix'];


// FUNCIONÁRIO
$conn->query("UPDATE tb_funcionario SET
nome_completo='$nome',
email='$email',
data_nascimento='$data_nascimento',
sexo='$sexo',
estado_civil='$estado_civil',
id_cargo='$id_cargo'
WHERE id_funcionario=$id");


// TELEFONE
$conn->query("UPDATE tb_telefone SET
telefone='$telefone'
WHERE id_funcionario=$id");


// ENDEREÇO
$conn->query("UPDATE tb_endereco SET
rua='$rua',
numero_casa='$numero',
bairro='$bairro',
cidade='$cidade',
cep='$cep'
WHERE id_funcionario=$id");


// BANCO
$conn->query("UPDATE tb_banco SET
agencia='$agencia',
numero_conta='$conta',
chave_pix='$pix'
WHERE id_funcionario=$id");


echo json_encode(["success" => true]);
