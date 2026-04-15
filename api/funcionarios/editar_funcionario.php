 <?php
require_once __DIR__ . "/../../banco-de-dados/conexao.php";


$data = json_decode(file_get_contents("php://input"), true);


$id = $data['id_funcionario'];


// dados
$nome = $data['nome_completo'];
$telefone = $data['telefone'];
$email = $data['email'];
$data_nascimento = $data['data_nascimento'];
$cpf = $data['cpf'];
$rg = $data['rg'];
$sexo = $data['sexo'];
$estado_civil = $data['estado_civil'];
$id_cargo = $data['id_cargo'];


$rua = $data['rua'];
$numero = $data['numero_casa'];
$bairro = $data['bairro'];
$complemento = $data['complemento'];
$cidade = $data['cidade'];
$estado = $data['estado'];
$cep = $data['cep'];


$banco = $data['banco'];
$agencia = $data['agencia'];
$conta = $data['numero_conta'];
$pix = $data['chave_pix'];

$certidaoCasamento = $data['certidaoCasamento'];
$laudo_pcd = $data['pcd'];
$cam = $data['cam'];
$cnh = $data['cnh'];
$pisPasep = $data['pisPasep'];
$nis = $data['nis'];
$nit = $data['nit'];
$ctps = $data['ctps'];
$filho = $data['filhos'];
$num_filho = $data['qtdFilhos'];


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
complemento='$complemento',
bairro='$bairro',
cidade='$cidade',
cep='$cep',
estado='$estado'
WHERE id_funcionario=$id");


// BANCO
$conn->query("UPDATE tb_banco SET
nome_banco='$banco',
agencia='$agencia',
numero_conta='$conta',
chave_pix='$pix'
WHERE id_funcionario=$id");

// Documento
$conn->query("UPDATE tb_documento SET
certidao_casamento_nascimento='$certidaoCasamento',
laudo_pcd='$laudo_pcd',
cam='$cam',
cnh='$cnh',
pis_pasep='$pisPasep',
nis='$nis',
nit='$nit',
ctps='$ctps'
WHERE id_funcionario=$id");

// Filhos
$conn->query("UPDATE tb_filho SET
tem_filho='$filho',
numero_filho='$num_filho'
WHERE id_funcionario=$id");

echo json_encode(["status" => "sucesso"]);
