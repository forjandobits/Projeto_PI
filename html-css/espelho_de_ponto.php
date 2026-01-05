<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

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
            <label for="data-inicio">Data inicial:</label>
            <input type="date" id="data-inicio">
          </div>
          <div class="campo">
            <label for="data-final">Data final:</label>
            <input type="date" id="data-final">
          </div>
        </div>
      </section>
    </form>
  </article>

  <article>
    <table>
      <caption>Espelho de Ponto - Nome Funcionário(?)</caption>
      <thead>
        <tr>
          <th>Data</th>
          <th>Dia da Semana</th>
          <th>Hora de Entrada*</th>
          <th>Hora de Saída*</th>
          <th>Intervalo Saída*</th>
          <th>Intervalo Retorno*</th>
          <th>Total Intervalo*</th>
          <th>Licença Médica</th>
          <th>Férias</th>
          <th>Total de Horas*</th>
          <th></th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          <td>12/11/2025</td>
          <td>Quarta-feira</td>
          <td>09:02</td>
          <td>17:58</td>
          <td>12:02</td>
          <td>13:01</td>
          <td>00:59</td>
          <td>Não</td>
          <td>Não</td>
          <td>07:57</td>
          <td><button class='abrir-modal'>...</button></td>
        </tr>
        <tr>
          <td>11/11/2025</td>
          <td>Terça-feira</td>
          <td>09:02</td>
          <td>17:58</td>
          <td>12:02</td>
          <td>13:01</td>
          <td>00:59</td>
          <td>Não</td>
          <td>Não</td>
          <td>07:57</td>
          <td><button>...</button></td>
        </tr>
        <tr>
          <td>10/11/2025</td>
          <td>Segunda-feira</td>
          <td>09:02</td>
          <td>17:58</td>
          <td>12:02</td>
          <td>13:01</td>
          <td>00:59</td>
          <td>Não</td>
          <td>Não</td>
          <td>07:57</td>
          <td><button>...</button></td>
        </tr>
        <tr>
          <td>07/11/2025</td>
          <td>Sexta-feira</td>
          <td>--</td>
          <td>--</td>
          <td>--</td>
          <td>--</td>
          <td>--</td>
          <td>Não</td>
          <td>Sim</td>
          <td>--</td>
          <td><button>...</button></td>
        </tr>
      </tbody>
    </table>

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
  
</main>



</body>
</html>