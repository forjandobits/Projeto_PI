<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>


<main>
  <article class="cabecalhos">
    <h1>Controle de Ponto - Visualização</h1>
  </article>
  
  <!-- Para marcar o início e o fim da visualização desejada -->
  <article>
    <form id="busca-pagamentos">
      <section class="areas-form">
        <div class="grupo-campo">
          <div class="campo">
            <label for="data-inicio">Mês de Referência:</label>
            <input type="month" name="Mes-Ano" id="data-mes-ano">
          </div>
        </div>
      </section>
    </form>
  </article>
  
  <article>
    <table>
      <caption id="saida-nome-funcionario-espelho-ponto">Espelho de Ponto - </caption>
      <thead>
        <tr>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Hora de Entrada*</th>
          <th>Hora de Saída*</th>
          <th>Intervalo Saída*</th>
          <th>Intervalo Retorno*</th>
          <th>Total Intervalo*</th>
          <th>Falta</th>
          <th>Férias/Falta Abonada</th>
          <th>Total de Horas*</th>
          <th></th>
        </tr>
      </thead>
      
      <tbody id="tabela-saida-espelho-ponto">
      </tbody>
    </table>

    <article>
      <section class="resumo-final">
        <p id="saida-erros"></p>
      </section>
    </article>
    
    <section class="resumo-final">
      <p>* Todos os dados exibidos estão no formato horas e minutos (HH:MM)</p>
    </section>
    
    <section class="resumo-final">
      <p>Banco de Horas(*): 02:34</p>
      <button>Pendências</button>
      <button>Relatório</button>
      <button>Salvar</button>
    </section>
  </article>

  <article class="modal">
    <section>
      <h3>Editar Pontos</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">
        <p>12/11/2025 - Quarta-feira:</p>
        <div class="campo-linha">
          <label for="tempo-entrada">Entrada 1:</label>
          <input type="time" name="Entrada1" id="tempo-entrada">
        </div>
        <div class="campo-linha">
          <label for="tempo-entrada2">Entrada 2:</label>
          <input type="time" name="Entrada2" id="tempo-entrada2">
        </div>
        <div class="campo-linha">
          <label for="tempo-entrada3">Entrada 3:</label>
          <input type="time" name="Entrada3" id="tempo-entrada3">
        </div>
        <div class="campo-linha">
          <label for="tempo-entrada4">Entrada 4:</label>
          <input type="time" name="Entrada4" id="tempo-entrada4">
        </div>
        <button type="button" class="button-claro">Adicionar outra batida</button>
        <button type="submit">Salvar</button>
      </form>
    </section>
  </article>
</main>

<script>
  const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>
<script type="module" src="public/js/folha-ponto/espelho_ponto.js"></script>

</body>
</html>