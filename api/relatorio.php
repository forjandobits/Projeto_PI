<?php

require_once __DIR__ . "/../banco-de-dados/conexao.php";
require_once __DIR__ . "/../fpdf186/fpdf.php";

$id = $_GET['id'] ?? 0;

if ($id == 0) {
    die("ID não enviado");
}

// 🔹 CONSULTA
$sql = "
SELECT 
    f.nome_completo,
    c.nome_cargo,
    c.carga_horaria
FROM tb_funcionario f
JOIN tb_cargo c ON f.id_cargo = c.id_cargo
WHERE f.id_funcionario = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$func = $stmt->get_result()->fetch_assoc();

if (!$func) {
    die("Funcionário não encontrado");
}

// 🔹 PDF
$pdf = new FPDF();
$pdf->AddPage();

$pdf->SetFont('Arial','B',16);
$pdf->Cell(0,10,'Relatorio de Ponto',0,1);

$pdf->SetFont('Arial','',12);
$pdf->Cell(0,10,'Nome: '.$func['nome_completo'],0,1);
$pdf->Cell(0,10,'Cargo: '.$func['nome_cargo'],0,1);
$pdf->Cell(0,10,'Carga Horaria: '.$func['carga_horaria'],0,1);

$pdf->Output();