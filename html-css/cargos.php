<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

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
                      <th>Carga Horária (Horas)</th>
                      <th>Regime Trabalhista</th>
                      <th>Escala (Horas Semanais)</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody id="tabela-saida-cargos">
                  <tr>
                      <td>8483-05</td>
                      <td>Padeiro</td>
                      <td>2000,00</td>
                      <td>8</td>
                      <td>CLT</td>
                      <td>40</td>
                      <td><button class="abrir-modal">Editar</button></td>
                  </tr>
                  <tr>
                      <td>4211-25</td>
                      <td>Caixa</td>
                      <td>1631,00</td>
                      <td>8</td>
                      <td>CLT</td>
                      <td>40</td>
                      <td><button class="abrir-modal">Editar</button></td>
                  </tr>
                  
              </tbody>
          </table>
      </section>                          
  </article>

  <article class="modal">
    <section>
      <h3>Cadastro de Cargos</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">

        <div class="campo">
            <label for="cbo">CBO:</label>
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
                <option value="CLT">Pessoa Jurídica (PJ)</option>
                <option value="CLT">Horista</option>
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