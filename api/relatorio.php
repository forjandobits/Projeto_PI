<?php
require_once __DIR__ . "/../banco-de-dados/conexao.php";
require_once __DIR__ . "/../fpdf186/fpdf.php";

$id = $_GET['id'] ?? 0;

// 🔹 Pegar funcionário
$sql = "SELECT nome_completo, id_cargo, total_horas_dia FROM tb_funcionario WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$func = $stmt->get_result()->fetch_assoc();

// 🔹 Pegar pontos do mês atual
$mesAtual = date('m');
$anoAtual = date('Y');

$sql = "SELECT data, entrada, saida 
        FROM tb_folhaponto
        WHERE id_funcionario = ?
        AND MONTH(data) = ?
        AND YEAR(data) = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iii", $id, $mesAtual, $anoAtual);
$stmt->execute();
$resultado = $stmt->get_result();

// 🔹 Calcular dados
$totalHoras = 0;
$faltas = 0;

$pontos = [];

while ($row = $resultado->fetch_assoc()) {

    $pontos[] = $row;

    if (!$row['entrada'] || !$row['saida']) {
        $faltas++;
        continue;
    }

    $entrada = strtotime($row['entrada']);
    $saida = strtotime($row['saida']);

    $horas = ($saida - $entrada) / 3600;
    $totalHoras += $horas;
}

// 🔹 Horas extras
$cargaMensal = $func['total_horas_dia'] * 4;
$horasExtras = $totalHoras - $cargaMensal;

// 🔹 Criar PDF
$pdf = new FPDF();
$pdf->AddPage();

// Título
$pdf->SetFont('Arial', 'B', 16);
$pdf->Cell(0, 10, 'Relatorio de Ponto', 0, 1);

// Dados do funcionário
$pdf->SetFont('Arial', '', 12);

$pdf->Cell(0, 10, 'Nome: ' . $func['nome_completo'], 0, 1);
$pdf->Cell(0, 10, 'Cargo: ' . $func['id_cargo'], 0, 1);
$pdf->Cell(0, 10, 'Carga Horaria: ' . $func['total_horas_dia'], 0, 1);
$pdf->Cell(0, 10, 'Faltas no Mes: ' . $faltas, 0, 1);

$pdf->Ln(5);

// 🔹 Tabela de pontos
$pdf->SetFont('Arial', 'B', 12);

$pdf->Cell(50, 10, 'Data', 1);
$pdf->Cell(50, 10, 'Entrada', 1);
$pdf->Cell(50, 10, 'Saida', 1);
$pdf->Ln();

$pdf->SetFont('Arial', '', 12);

foreach ($pontos as $p) {
    $pdf->Cell(50, 10, $p['data'], 1);
    $pdf->Cell(50, 10, $p['entrada'], 1);
    $pdf->Cell(50, 10, $p['saida'], 1);
    $pdf->Ln();
}

$pdf->Ln(5);

// Totais
$pdf->Cell(0, 10, 'Total de Horas: ' . round($totalHoras, 2), 0, 1);
$pdf->Cell(0, 10, 'Horas Extras: ' . round($horasExtras, 2), 0, 1);

// Gerar PDF
$pdf->Output();