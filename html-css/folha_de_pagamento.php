<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Folha de Pagamento</h1>
  </article>

  <article>
    <table>
      <caption>Folha de Pagamento - <span id="nome-exibido">Nome Funcionário</span> - <span id="mes">Mês/Ano</span></caption>
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
              <ul id="listaNomes"></ul>
          </div>

          <div class="campo">
            <label for="data-mes-ano">Mês de Referência:</label>
            <input type="month" name="Mes-Ano" id="data-mes-ano" required>
          </div>
        
        </section> 

        <section class="eventos-pagamentos"></section>

        <div class="campo resumo">
          <button type="button" class="button-claro" id="adicionar-evento">Inserir</button>
          <button type="button" id="lancar-dados">Salvar Alterações</button>
        </div>
      </form>
    </section>
  </article>
  
  
  
</main>


<script src="public/js/pagamentos/eventos_pagamentos.js"></script>
</body>
</html>