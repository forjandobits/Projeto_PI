<?php 
$id = $_GET['id'] ?? 0;

require_once __DIR__ . "../banco-de-dados/conexao.php";

// 🔹 Buscar funcionário
$sqlFunc = "SELECT nome_completo FROM tb_funcionario WHERE id_funcionario = ?";
$stmtFunc = $conn->prepare($sqlFunc);
$stmtFunc->bind_param("i", $id);
$stmtFunc->execute();
$func = $stmtFunc->get_result()->fetch_assoc();

// 🔹 Buscar pontos do funcionário (SEM JOIN)
$sqlPontos = "
SELECT data, total_horas_dia, horas_extras, faltas
FROM tb_folhaponto
WHERE id_funcionario = ?
";

$stmtPontos = $conn->prepare($sqlPontos);
$stmtPontos->bind_param("i", $id);
$stmtPontos->execute();
$resultado = $stmtPontos->get_result();

// 🔹 Buscar jornada (fixa)
$sqlJornada = "SELECT hora_entrada, hora_saida, intervalo_inicio, intervalo_fim FROM tb_jornada LIMIT 1";
$jornada = $conn->query($sqlJornada)->fetch_assoc();
?>

<?php include "./components/header.php" ?>
<?php include "./components/sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Controle de Ponto - Visualização</h1>
  </article>

  <article>
    <form>
      <section class="areas-form">
        <div class="grupo-campo">
          <div class="campo">
            <label>Mês de Referência:</label>
            <input type="month">
          </div>
        </div>
      </section>
    </form>
  </article>

  <article>
    <table>
      <caption>
        Espelho de Ponto - <?= $func['nome_completo'] ?? 'Funcionário não encontrado' ?>
      </caption>

      <thead>
        <tr>
          <th>Data</th>
          <th>Dia</th>
          <th>Entrada</th>
          <th>Saída</th>
          <th>Intervalo Saída</th>
          <th>Intervalo Retorno</th>
          <th>Total Intervalo</th>
          <th>Falta</th>
          <th>Abono</th>
          <th>Total Horas</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

      <?php if ($resultado->num_rows > 0) { ?>

        <?php while($row = $resultado->fetch_assoc()) { ?>

        <?php
        $dias = [
            'Sunday' => 'Domingo',
            'Monday' => 'Segunda',
            'Tuesday' => 'Terça',
            'Wednesday' => 'Quarta',
            'Thursday' => 'Quinta',
            'Friday' => 'Sexta',
            'Saturday' => 'Sábado'
        ];

        $diaSemana = $dias[date('l', strtotime($row['data']))];

        // 🔹 calcular intervalo
        $intervalo = "-";
        if ($jornada['intervalo_inicio'] && $jornada['intervalo_fim']) {
            $inicio = strtotime($jornada['intervalo_inicio']);
            $fim = strtotime($jornada['intervalo_fim']);
            $intervalo = gmdate("H:i", $fim - $inicio);
        }
        ?>

        <tr>
            <td><?= date('d/m/Y', strtotime($row['data'])) ?></td>
            <td><?= $diaSemana ?></td>
            <td><?= $jornada['hora_entrada'] ?></td>
            <td><?= $jornada['hora_saida'] ?></td>
            <td><?= $jornada['intervalo_inicio'] ?></td>
            <td><?= $jornada['intervalo_fim'] ?></td>
            <td><?= $intervalo ?></td>
            <td><?= $row['faltas'] > 0 ? 'Sim' : 'Não' ?></td>
            <td>-</td>
            <td><?= $row['total_horas_dia'] ?></td>
            <td><button type="button">...</button></td>
        </tr>

        <?php } ?>

      <?php } else { ?>

        <tr>
            <td colspan="11">Nenhum ponto encontrado</td>
        </tr>

      <?php } ?>

      </tbody>
    </table>

    <section class="resumo-final">
      <p>* Dados em HH:MM</p>
    </section>

    <section class="resumo-final">
      <p>Banco de Horas: 02:34</p>

      <button type="button">Pendências</button>

      <a href="/Projeto_PI/api/relatorio.php?id=<?= $id ?>">
    <button type="button">Gerar PDF</button>
      </a>

      <button type="button">Salvar</button>
    </section>
  </article>

</main>