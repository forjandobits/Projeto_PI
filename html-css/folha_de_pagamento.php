<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento - Adicionar</h1>
  </article>

  <article>
    <?php include "./tabela_pagamento.php"?>
    <!-- <table>
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
          <td colspan="2"></td>   <!-- pula Cod. e Evento 
          <td>Totais</td>
          <td>2.000,00</td>
          <td>0,81</td>
        </tr> -->
      
      </tbody>
    </table>

    <section class="resumo-final">
          <p>Total Líquido (R$): 2000,00</p>
          <button class='abrir-modal'>Alterar</button>
          <button>Salvar</button>
    </section>
  </article>

  <article class="modal">
    <section>
      <h3>Editar Folha de Pagamento</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">
        <div class="campo">
          <label for="tempo-entrada">Benefício/Descontos:</label>
          <select name="Genero-Funcionario" id="genero" required>
            <option value="">-- Selecione --</option>
            <option value="Masculino">IRRF - Imposto de Renda</option>
            <option value="Feminino">Vale Alimentação</option>
            <option value="Outro">Vale Transporte</option>
          </select>
        </div>
        <div class="campo">
          <label for="valor">Valor:</label>
          <input type="number" name="Valor" id="valor" value="0" required>
        </div>
        <!-- <button type="button" class="button-claro">Adicionar outro valor</button> -->
        <button type="submit">Adicionar</button>
      </form>
    </section>
  </article>
  
  
  
</main>



</body>
</html>