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
            <input type="date" name="Data-Inicio" id="data-inicio">
          </div>
          <div class="campo">
            <label for="data-final">Data final:</label>
            <input type="date" name="Data-Final" id="data-final">
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
    
      <tbody id="tabela-saida-espelho-ponto">
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
          <td><button class='abrir-modal'>...</button></td>
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
          <td><button class='abrir-modal'>...</button></td>
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
          <td><button class='abrir-modal'>...</button></td>
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

  <article class="modal">
    <section>
      <p class="fechar">X</p>
      <h3>Editar Pontos</h3>
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



</body>
</html>