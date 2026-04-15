<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>

<main>

  <article class="cabecalhos">
      <h1>Colaboradores</h1>
      
      <div>

        <button><a href="cargos.php">Cargo</a></button>
  
        <button><a href="cadastro_de_funcionario.php">Adicionar</a></button>
        
      </div>

  </article>

  <article>
      <form method="GET">
          <section class="areas-form">

              <div class="campo">
                  <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Colaborador, Cargo, ..." required>
              </div>
          </section>
      </form>
  </article>

  <article>

    <table>
      <caption>Lista de Colaboradores</caption>
     <thead>
       <tr>
         <th>Nome</th>
         <th>Cargo</th>
         <th>Situação</th>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody id="tabela-saida-colaboradores">
     </tbody>
   </table>
   
  </article>
  <article class="modal modal-cadastro">
    <section>
      <h3>Informações do Colaborador</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">

        <?php include "./components/formulario_cadastro.php" ?>

      </form>
    </section>
  </article>

</main>

<script type="module" src="public/js/funcionarios/adicionar_funcionario.js"></script>
<script type="module" src="public/js/funcionarios/exibir_funcionario.js"></script>

<script>
  const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>
</body>
</html>