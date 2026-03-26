<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Cargos</h1>

    <button class="abrir-modal">Adicionar</button>
  </article>


  <article>
      <section>
          <table id="">
              <caption>Lista de Cargos</caption>
              <thead>
                  <tr>
                      <th>CBO</th>
                      <th>Nome do Cargo</th>
                      <th>Salário</th>
                      <th>Carga Horária Semanal</th>
                      <th>Regime Trabalhista</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody id="tabela-saida-cargos">
              </tbody>
          </table>
      </section>                          
  </article>

  <article id="modal" class="modal">
    <section>
      <h3>Cadastro de Cargos</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" id="formModal" class="form-modal">

        <div class="campo">
            <label for="cbo">CBO:</label>
            <input type="text" name="CBO-Funcionario" id="cbo" required />
        </div>

        <div class="campo">
          <label for="nome-cargo">Nome do Cargo:</label>
          <input type="text" name="Nome-Cargo" id="nome-cargo">
        </div>

        <div class="campo">
          <label for="salario">Salário:</label>
          <input type="number" name="Salario" id="salario">
        </div>

        <div class="campo">
          <label for="carga-horaria">Carga Horária:</label>
          <input type="time" name="Carga-Horaria" id="carga-horaria" min="0">
        </div>

        <div class="campo">
            <label for="regime">Regime Trabalhista:</label>
            <select name="Regime-Funcionario" id="regime" required>
                <option value="">-- Selecione --</option>
                <option value="CLT">CLT</option>
            </select>
        </div>

        <div class="campo resumo">
          <button type="submit" id="btnsalvar">Salvar</button>
        </div>
      </form>
    </section>
  </article>
</main>

<script>
  const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>

<script type="module" src="public/js/adicionar_cargo/adicionar_cargo.js"></script>

<script type="module" src="public/js/funcionarios/exibir_cargo.js"></script>
