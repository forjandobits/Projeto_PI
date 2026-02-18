<?php
require_once "../../../../banco-de-dados/conexao.php";

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nome = trim($_POST["Nome"]);
    $tipo = $_POST["Opcoes"];
    $observacoes = trim($_POST["Observacoes"]);
    $pendencia = isset($_POST["Pendencia"]);

    // =============================
    // VALIDAÇÕES
    // =============================
    if (strlen($nome) < 3) {
        echo json_encode(["sucesso" => false, "mensagem" => "Nome inválido"]);
        exit;
    }

    if (strlen($observacoes) < 10) {
        echo json_encode(["sucesso" => false, "mensagem" => "Observação muito curta"]);
        exit;
    }

    // =============================
    // DADOS GERADOS PELO SISTEMA
    // =============================
    $status = $pendencia ? "Pendente" : "Resolvida";
    $data = date("Y-m-d");

    // =============================
    // INSERIR NO BANCO
    // =============================
    $sql = "INSERT INTO tb_solicitacoes 
            (nome_colaborador, tipo_solicitacao, observacoes, data_solicitacao, status)
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome, $tipo, $observacoes, $data, $status);

    if ($stmt->execute()) {

        echo json_encode([
            "sucesso" => true,
            "nome" => $nome,
            "tipo" => $tipo,
            "data" => date("d/m/Y"),
            "status" => $status
        ]);

    } else {
        echo json_encode(["sucesso" => false, "mensagem" => "Erro ao salvar"]);
    }
}
