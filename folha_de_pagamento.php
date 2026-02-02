<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento</h1>
  </article>

  <article>
    <table>
      <caption>Folha de Pagamento - Mês/Ano(?) - Nome Funcionário(?)</caption>
      <?php include "./components/tabela_pagamento.php"?>
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
            <input type="month" name="Mes-Ano" id="data-mes-ano" required>
          </div>
        
        </section> 

        <section class="eventos-pagamentos">

          <section class="grupo-campo-linha">
  
            <div class="campo">
              <label for="beneficios">Benefício/Descontos:</label>
              <select name="Beneficios" id="beneficio">
                <!-- <option value="">-- Selecione --</option> -->
                <option value="01">01 - Comissão</option>
                <option value="06">06 - Imposto de Renda (IRRF)</option>
                <option value="07">07 - Vale Alimentação</option>
                <option value="08">08 - Vale Transporte</option>
              </select>
            </div>
  
            <div class="campo">
              <label for="valor">Valor:</label>
              <input type="number" name="Valor" id="valor" placeholder="200,00">
            </div>
  
            <div class="campo">
              <button class="negar" type ="button">✘ Remover</button>
            </div>
  
          </section>

        </section>


        <div class="campo resumo">
          <button type="button" class="button-claro" id="adicionar-evento">Inserir</button>
          <button type="submit">Salvar Alterações</button>
        </div>
      </form>
    </section>
  </article>
  
  
  
</main>

<script>
  const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>
<script src="public/js/pagamentos/eventos_pagamentos.js"></script>
</body>
</html>