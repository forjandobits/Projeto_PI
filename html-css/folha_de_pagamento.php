<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento</h1>
  </article>

  <article>
    <table>
      <caption>Folha de Pagamento - Mês/Ano(?) - Nome Funcionário(?)</caption>
      <?php include "./tabela_pagamento.php"?>
    </table>

    <section class="resumo-final">
          <p>Total Líquido (R$): 2000,00</p>
          <button class='abrir-modal'>Eventos</button>
          <button>Salvar</button>
    </section>
  </article>

  <article class="modal modal-cadastro">
    <section>
      <h3>Eventos da Folha de Pagamento</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">
        <section class="grupo-campo-linha">
          <div class="campo">
              <label for="nome">Nome do Funcionário:</label>
              <input type="text" name="Nome-Funcionario" id="nome" placeholder="Ex.: Nome do Funcionário" required>
          </div>

          <div class="campo">
            <label for="data-mes-ano">Mês de Referência:</label>
            <input type="month" name="Mes-Ano" id="data-mes-ano">
          </div>
        
        </section> 

        <section class="grupo-campo-linha">

          <div class="campo">
            <label for="beneficios">Benefício/Descontos:</label>
            <select name="Beneficios" id="beneficio" required>
              <!-- <option value="">-- Selecione --</option> -->
              <option value="01">01 - Comissão</option>
              <option value="06">06 - Imposto de Renda (IRRF)</option>
              <option value="07">07 - Vale Alimentação</option>
              <option value="08">08 - Vale Transporte</option>
            </select>
          </div>

          <div class="campo">
            <label for="valor">Valor:</label>
            <input type="number" name="Valor" id="valor" value="200.00" required>
          </div>

          <div class="campo">
            <button class="negar">✘ Remover</button>
          </div>

        </section>
        
        <section class="grupo-campo-linha">

          <div class="campo">
            <label for="beneficios1">Benefício/Descontos:</label>
            <select name="Beneficios1" id="beneficios1" required>
              <option value="">-- Selecione --</option>
              <option value="06">06 - Imposto de Renda (IRRF)</option>
              <option value="07">07 - Vale Alimentação</option>
              <option value="08">08 - Vale Transporte</option>
            </select>
          </div>

          <div class="campo">
            <label for="valor1">Valor:</label>
            <input type="number" name="Valor1" id="valor1" value="0" required>
          </div>

          <div class="campo">
            <button class="negar">✘ Remover</button>
          </div>
      
        </section>

        <div class="campo resumo">
          <button type="button" class="button-claro">Inserir Outro</button>
          <button type="submit">Salvar Alterações</button>
        </div>
      </form>
    </section>
  </article>
  
  
  
</main>



</body>
</html>