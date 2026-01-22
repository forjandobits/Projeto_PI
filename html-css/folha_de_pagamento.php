<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento - Adicionar</h1>
  </article>

  <article>

    <table>
      <caption>Folha de Pagamento - Mês/Ano(?) - Nome Funcionário(?)</caption>
      <thead>
        <tr>
          <th>Código de Referência</th>
          <th>Evento</th>
          <th>Referência</th>
          <th>Vencimentos</th>
          <th>Descontos</th>
        </tr>
      </thead>
    
      <tbody id="tabela-saida-folha-pagamento">
        <tr>
          <td>00</td>
          <td>Salário Base</td>
          <td>2.000,00</td>
          <td>2.000,00</td>
          <td></td>
        </tr>
        <tr>
          <td>01</td>
          <td>Comissão</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>02</td>
          <td>INSS</td>
          <td>10,88</td>
          <td></td>
          <td>0,81</td>
        </tr>
        <tr>
          <td>03</td>
          <td>Descanso Remunerado</td>
          <td>0,00</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>04</td>
          <td>FGTS</td>
          <td>27,50</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td colspan="2"></td>   <!-- pula Cod. e Evento -->
          <td>Totais</td>
          <td>2.000,00</td>
          <td>0,81</td>
        </tr>
      
      </tbody>
    </table>

    <section class="resumo-final">
          <p>Total Líquido (R$): 2000,00</p>
          <!-- <button class='abrir-modal'>Editar</button> -->
          <button>Concluir</button>
    </section>
  </article>

  <article class="modal">
    <section>
      <h3>Editar Folha de Pagamento</h3>
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



</body>
</html>