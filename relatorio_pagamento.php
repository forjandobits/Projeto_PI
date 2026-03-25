<?php include "./components/header.php" ?>

<body>
    <table>
      <caption>Folha de Pagamento - <span id="nome-exibido">Nome Funcionário</span> - <span id="cargo-exibido">Nome Cargo</span> - <span id="mes">Mês/Ano</span></caption>
      <?php include "./components/tabela_pagamento.php"?>
    </table>

    <section class="resumo-final">
        <p>Total Líquido (R$): 2000,00</p>
        <button class="botao-imprimir">IMPRIMIR</button>
        <!-- <button href="pagamentos.php">VOLTAR</button> -->
        <button class="botao-retornar"><a href="pagamento.php">VOLTAR</a></button>
    </section>

    <script>
        const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
</body>
<script type="module" src="public/js/pagamentos/relatorio.js"></script>


</html>