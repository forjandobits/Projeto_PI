<?php
header("Content-Type: application/json");

// MOSTRAR ERROS (apenas para desenvolvimento)
ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . "/../../banco-de-dados/conexao.php";

try {

    $respostaCargo = json_decode(file_get_contents("php://input"), true);

    // Validação do ID
    if (!isset($respostaCargo['id_cargo'])) {
        echo json_encode([
            "success" => false,
            "error" => "ID não enviado"
        ]);
        exit;
    }

    $id = intval($respostaCargo['id_cargo']);

    $stmt = $conn->prepare("SELECT 
        nome_cargo,
        salario,
        carga_horaria,
        regime_trabalhista,
        cbo 
        FROM tb_cargo 
        WHERE id_cargo = ?");

    if (!$stmt) {
        throw new Exception("Erro no prepare: " . $conn->error);
    }

    $stmt->bind_param("i", $id);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $cargo = $result->fetch_assoc();

        echo json_encode($cargo);
    } else {
        echo json_encode([
            "success" => false,
            "error" => "Cargo não encontrado"
        ]);
    }

} catch (Exception $e) {
    // garante que SEMPRE retorna JSON
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ]);
}
?>