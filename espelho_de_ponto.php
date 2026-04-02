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
            <label for="data-mes-ano">Mês de Referência:</label>
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
          <th>Falta</th>
          <th>Férias/Falta Abonada</th>
          <th>Total de Horas*</th>
          <th>Total Intervalo*</th>
          <th>Horas Extras*</th>
          <th></th>
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
      <p id = "saldo_mes"></p>
      <button>Relatório</button>
      <button id="btn-fechar">Fechar</button>
    </section>
  </article>

  <article class="modal">
    <section>
      <h3>Editar Pontos</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form class="form-modal">
        <p id="informacoes-ponto"></p>
        <div class="campo-linha">
          <label for="hora-entrada">Hora de entrada:</label>
          <input type="time" id="hora-entrada">
        </div>
        <div class="campo-linha">
          <label for="intervalo-saida">Saída pro intervalo:</label>
          <input type="time" id="intervalo-saida">
        </div>
        <div class="campo-linha">
          <label for="intervalo-retorno">Retorno do intervalo:</label>
          <input type="time" id="intervalo-retorno">
        </div>
        <div class="campo-linha">
          <label for="hora-saida">Hora de saída:</label>
          <input type="time" id="hora-saida">
        </div>
        <div class="campo-linha">
          <label for="ferias-falta-abonada">Férias/Falta Abonada:</label>
          <select id="ferias-falta-abonada">
            <option value="0">Não</option>
            <option value="1">Sim</option>
          </select>
        </div>
        <button type="submit" id="btn-editar-ponto">Salvar</button>
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