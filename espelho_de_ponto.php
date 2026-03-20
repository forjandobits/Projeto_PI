<?php 
$id = $_GET['id'] ?? 0;

require_once __DIR__ . "/banco-de-dados/conexao.php";

// 🔹 Buscar funcionário
$sql = "SELECT nome_completo FROM tb_funcionario WHERE id_funcionario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();
$func = $stmt->get_result()->fetch_assoc();
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
        <!-- EXEMPLO (depois a gente liga com banco) -->
        <tr>
          <td>12/11/2025</td>
          <td>Quarta</td>
          <td>09:00</td>
          <td>18:00</td>
          <td>12:00</td>
          <td>13:00</td>
          <td>01:00</td>
          <td>Não</td>
          <td>Não</td>
          <td>08:00</td>
          <td><button type="button">...</button></td>
        </tr>
      </tbody>
    </table>

    <section class="resumo-final">
      <p>* Dados em HH:MM</p>
    </section>

    <section class="resumo-final">
      <p>Banco de Horas: 02:34</p>

      <button type="button">Pendências</button>

      <!-- 🔥 BOTÃO RELATÓRIO -->
      <a href="/Projeto_PI/api/relatorio.php?id=<?= $id ?>">
        <button type="button">Relatório</button>
      </a>

      <button type="button">Salvar</button>
    </section>
  </article>

</main>