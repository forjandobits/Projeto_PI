<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento -Visualização</h1>
  </article>

  <!-- <article>
    <form id="busca-pagamentos">
      <section class="areas-form">
        <div class="campo">
          <label for="nome">Funcionário:</label>
          <input type="text" id="nome">
        </div>
        <div class="campo">
          <label for="data">Mês Referente:</label>
          <input type="date" id="data">
        </div>
      </section>
    </form>
  </article> -->
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
    
      <tbody>
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
          <button>Editar(?)</button>
          <button>Concluir</button>
    </section>
  </article>
  
  
  
</main>



</body>
</html>