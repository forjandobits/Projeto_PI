<?php
session_start();
require_once __DIR__ . "/../../../../banco-de-dados/conexao.php";

// Redireciona se usuário não estiver logado
if (!isset($_SESSION['id_login'])) {
    header("Location: login.php");
    exit;
}

// Processa apenas se vier POST com os campos corretos
if ($_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['senha_atual'], $_POST['nova_senha'], $_POST['repita_senha'])) {

    $idLogin     = $_SESSION['id_login'];
    $senhaAtual  = $_POST['senha_atual'];
    $novaSenha   = $_POST['nova_senha'];
    $repitaSenha = $_POST['repita_senha'];

    // Campos obrigatórios
    if (empty($senhaAtual) || empty($novaSenha) || empty($repitaSenha)) {
        echo "<p>Preencha todos os campos.</p>";
        exit;
    }

    // Busca senha atual do banco
    $sql = "SELECT senha FROM tb_login WHERE id_login = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $idLogin);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows !== 1) {
        echo "<p>Usuário não encontrado.</p>";
        exit;
    }

    $usuario = $resultado->fetch_assoc();

    // Verifica senha atual (sem hash)
    if ($senhaAtual !== $usuario['senha']) {
        echo "<p>Senha atual incorreta!</p>";
        exit;
    }

    // Verifica se as novas senhas coincidem
    if ($novaSenha !== $repitaSenha) {
        echo "<p>As novas senhas não coincidem!</p>";
        exit;
    }

    // Verifica tamanho mínimo
    if (strlen($novaSenha) < 6) {
        echo "<p>A nova senha deve ter pelo menos 6 caracteres.</p>";
        exit;
    }

    // Atualiza senha no banco
    $update = $conn->prepare("UPDATE tb_login SET senha = ? WHERE id_login = ?");
    $update->bind_param("si", $novaSenha, $idLogin);

    if ($update->execute()) {
        echo "<p>Senha alterada com sucesso!</p>";
    } else {
        echo "<p>Erro ao alterar senha: " . $update->error . "</p>";
    }
}
?>
