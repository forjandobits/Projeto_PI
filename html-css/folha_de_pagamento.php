<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>
    
<section class="movimentacao">
  <h1>Folha de Pagamento</h1>

  <div class="inputs-mov">
      <form id="filtro-funcionario">
        <label for="filtro">Funcionário:</label>
        <input type="text" id="funcionario">
      </form>

      <form id="filtro-calendario">
        <label for="data">Mês Referente:</label>
        <input type="date" id="data-calendario">
      </form>
  </div>
</section>



<table>
  <thead>
    <tr>
      <th>Cod.</th>
      <th>Evento</th>
      <th>Referência</th>
      <th>Vencimentos</th>]
      <th>Descontos</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><strong>00</strong></td>
      <td><strong>Salário Base</strong></td>
      <td>2.000,00</td>
      <td>2.000,00</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>01</strong></td>
      <td><strong>Comissão</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>02</strong></td>
      <td><strong>INSS</strong></td>
      <td>10,88</td>
      <td></td>
      <td>0,81</td>
    </tr>
    <tr>
      <td><strong>03</strong></td>
      <td><strong>Repouso Remuneração</strong></td>
      <td>0,00</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td><strong>04</strong></td>
      <td><strong>FGTS</strong></td>
      <td>27,50</td>
      <td></td>
      <td></td>
    </tr>
    <tr class="linha-totais">
      <td colspan="2" ></td>   <!-- pula Cod. e Evento -->
      <td class="totais-branco"><strong>Totais</strong></td>
      <td>2.000,00</td>
      <td>0,81</td>
    </tr>
  
  </tbody>
</table>

<div class="resumo-final">
    <span class="liquido">
        <strong>Líquido</strong>: <span class="valor-liquido">2.000,00</span>
    </span>

    <button id="btn-concluir">Concluir</button>
</div>



</body>
</html>