<?php
session_start();
// Inclui o arquivo de conexão com o banco de dados __DIR__ retorna o diretório do arquivo atual (processa_login.php)
// O caminho relativo "../../../../banco-de-dados/conexao.php" sobe quatro pastas e entra na pasta "banco-de-dados"
// 'require_once' garante que o arquivo seja incluído apenas uma vez, evitando erros se for chamado novamente
require_once __DIR__ . "/../../../../banco-de-dados/conexao.php";

// Recebe os dados enviados via POST
$usuario = $_POST['usuario'] ?? '';
$senha   = $_POST['senha'] ?? '';

if (empty($usuario) || empty($senha)) {
    echo "Preencha todos os campos.";
    exit;
}

// Prepara a query para evitar SQL Injection
$stmt = $conn->prepare("SELECT * FROM tb_login WHERE nome_usuario = ? AND senha = ?");
// Substitui os placeholders pelos valores reais de $usuario e $senha
// "ss" indica que ambos os parâmetros são strings
// Se você estivesse usando senha com hash (ex: password_hash), aqui precisaria mudar a lógica
$stmt->bind_param("ss", $usuario, $senha); // Se usar hash, aqui muda
$stmt->execute();

// Obtém o resultado da query, que pode ser usado para verificar se encontrou algum registro
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    // Login bem-sucedido
    $user = $result->fetch_assoc();
    $_SESSION['usuario'] = $user['nome_usuario']; // Salva o usuário na sessão
    echo "success"; // Retorno para o JS
} else {
    // Login incorreto
    echo "Usuário ou senha incorretos. Tente novamente";
}
