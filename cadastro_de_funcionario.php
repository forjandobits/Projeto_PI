<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>
    
    <main>
      <article class="cabecalhos">
        <h1>Cadastro de Funcionário</h1>
      </article>
        
      <article>

        <?php include "./components/formulario_cadastro.php" ?>
      
      </article>
    </main>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>

  <script type="module" src="public/js/funcionarios/editar_funcionario.js"></script>
  </body>
</html>
