<?php include "./components/header.php" ?>

<body>
    <table>
      <caption>Folha de Ponto - <span id="nome-exibido">Nome Funcionário</span> - <span id="data">Mês/Ano</span></caption>
      <thead>
        <tr>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Hora de Entrada*</th>
          <th>Hora de Saída*</th>
          <th>Intervalo Saída*</th>
          <th>Intervalo Retorno*</th>
          <th>Falta</th>
          <th>Férias/Falta Abonada</th>
          <th>Total de Horas*</th>
          <th>Total Intervalo*</th>
          <th>Horas Extras*</th>
        </tr>
      </thead>
      
      <tbody id="tabela-saida-espelho-ponto">
      </tbody>
    </table>

    <section class="resumo-final">
        <p id = "saldo_mes"></p>
        <button class="botao-imprimir">Imprimir</button>
        <!-- <button href="pagamentos.php">VOLTAR</button> -->
        <button class="botao-retornar"><a href="controle_de_ponto.php">Voltar</a></button>
    </section>

    <script>
        const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
</body>
<script type="module" src="public/js/folha-ponto/relatorio.js"></script>


</html>