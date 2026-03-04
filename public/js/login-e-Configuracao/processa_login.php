<?php
session_start(); // Inicia sessão para armazenar usuário logado
require_once __DIR__ . "/../../../../banco-de-dados/conexao.php"; // Conecta ao banco

// Recebe dados enviados via POST do formulário
$usuario = $_POST['usuario'] ?? '';
$senha   = $_POST['senha'] ?? '';

// Verifica se campos estão preenchidos
if (empty($usuario) || empty($senha)) {
    echo "Preencha todos os campos.";
    exit;
}

// Busca usuário pelo nome
$stmt = $conn->prepare("SELECT id_login, nome_usuario, senha FROM tb_login WHERE nome_usuario = ?");
$stmt->bind_param("s", $usuario); // Substitui o placeholder
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();

    // Verifica senha **sem hash**
    if ($senha === $user['senha']) {
        session_regenerate_id(true); // Segurança extra para sessão
        $_SESSION['id_login'] = $user['id_login'];
        $_SESSION['usuario']  = $user['nome_usuario'];
        echo "success"; // Retorno para o JS
    } else {
        echo "Usuário ou senha incorretos.";
    }
} else {
    echo "Usuário ou senha incorretos.";
}
?>