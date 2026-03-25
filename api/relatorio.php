<?php

require_once __DIR__ . "/../banco-de-dados/conexao.php";

$id = $_GET['id'] ?? 0;

if ($id == 0) {
    die("ID não enviado");
}

// 🔹 FUNCIONÁRIO + CARGO
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

// 🔹 PONTOS DO MÊS
$mesAtual = date('m');
$anoAtual = date('Y');

$sql = "
SELECT data, total_horas_dia, horas_extras, faltas
FROM tb_folhaponto
WHERE id_funcionario = ?
AND MONTH(data) = ?
AND YEAR(data) = ?
";

$stmt = $conn->prepare($sql);
$stmt->bind_param("iii", $id, $mesAtual, $anoAtual);
$stmt->execute();
$resultado = $stmt->get_result();

// 🔹 CÁLCULOS
$totalHoras = 0;
$faltas = 0;
$pontos = [];

while ($row = $resultado->fetch_assoc()) {
    $pontos[] = $row;
    $totalHoras += $row['total_horas_dia'];

    if ($row['faltas'] > 0) {
        $faltas++;
    }
}

$cargaMensal = $func['carga_horaria'] * 4;
$horasExtras = $totalHoras - $cargaMensal;
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Relatório</title>

    <!-- 🔗 CSS SEPARADO -->
    <link rel="stylesheet" href="../public/css/relatorio.css">
</head>

<body>

<h1>Relatório de Ponto</h1>

<div class="info">
    <p><strong>Nome:</strong> <?= $func['nome_completo'] ?></p>
    <p><strong>Cargo:</strong> <?= $func['nome_cargo'] ?></p>
    <p><strong>Carga Horária:</strong> <?= $func['carga_horaria'] ?></p>
    <p><strong>Faltas no mês:</strong> <?= $faltas ?></p>
</div>

<h3>Pontos do mês</h3>

<table>
    <tr>
        <th>Data</th>
        <th>Horas do Dia</th>
        <th>Horas Extras</th>
        <th>Falta</th>
    </tr>

    <?php if (count($pontos) > 0) { ?>
        <?php foreach ($pontos as $p) { ?>
        <tr>
            <td><?= date('d/m/Y', strtotime($p['data'])) ?></td>
            <td><?= $p['total_horas_dia'] ?></td>
            <td><?= $p['horas_extras'] ?></td>
            <td><?= $p['faltas'] > 0 ? 'Sim' : 'Não' ?></td>
        </tr>
        <?php } ?>
    <?php } else { ?>
        <tr>
            <td colspan="4">Nenhum registro encontrado</td>
        </tr>
    <?php } ?>
</table>

<div class="resumo">
    <p><strong>Total de horas no mês:</strong> <?= round($totalHoras, 2) ?></p>
    <p><strong>Horas extras:</strong> <?= round($horasExtras, 2) ?></p>
</div>

<div class="botoes">
    <button class="botao-imprimir">Imprimir / Salvar PDF</button>
    <button class="botao-retornar" onclick="history.back()">Voltar</button>
</div>

<script>
window.onload = function() {

    const botao = document.querySelector('.botao-imprimir');

    if (botao) {
        botao.addEventListener('click', function() {
            window.print();
        });
    }

};
</script>

</body>
</html>