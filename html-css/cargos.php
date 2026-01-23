<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Cargos - Visualização</h1>

    <button class="abrir-modal">Adicionar</button>
  </article>


  <article class="modal">
    <section>
      <h3>Cadastro de Cargos</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">

        <div class="campo">
            <label for="cbo">CBO (ID):</label>
            <input type="text" name="CBO-Funcionario" id="cbo" required />
        </div>

        <div class="campo">
          <label for="tempo-entrada">Nome do Cargo:</label>
          <input type="text" name="Entrada1" id="tempo-entrada">
        </div>

        <div class="campo">
          <label for="tempo-entrada2">Salário:</label>
          <input type="number" name="Entrada2" id="tempo-entrada2">
        </div>

        <div class="campo">
          <label for="tempo-entrada3">Carga Horária:</label>
          <input type="number" name="Entrada3" id="tempo-entrada3" min="0">
        </div>

        <div class="campo">
            <label for="regime">Regime Trabalhista:</label>
            <select name="Regime-Funcionario" id="regime" required>
                <option value="">-- Selecione --</option>
                <option value="CLT">CLT</option>
            </select>
        </div>

        <div class="campo">
          <label for="tempo-entrada4">Escala:</label>
          <input type="number" name="Entrada4" id="tempo-entrada4">
        </div>

        <div class="campo resumo">
          <button type="submit">Salvar</button>
        </div>
      </form>
    </section>
  </article>
</main>