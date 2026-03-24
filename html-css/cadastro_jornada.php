<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
  <article class="cabecalhos">
    <h1>Jornada de trabalho</h1>

    <button class="abrir-modal">Adicionar</button>
  </article>


  <article>
      <section>
          <table id="">
              <caption>Lista jornada de trabalaho</caption>
              <thead>
                  <tr>
                      <th>Colaborador</th>
                      <th>Hora Entrada</th>
                      <th>Intervalo Saída</th>
                      <th>Intervalo Retorno</th>
                      <th>Hora Saída</th>
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
                  
              </tbody>
          </table>
      </section>                          
  </article>

  <article id="modal" class="modal">
    <section>
      <h3>Cadastro de jornada</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" id="formModal" class="form-modal">

        <div class="campo">
            <label for="hora-entrada">Hora Entrada</label>
            <input type="text" name="Hora-Entradao" id="h-entrada" required />
        </div>

        <div class="campo">
          <label for="saida-intervalo">Saída Intervalo:</label>
          <input type="text" name="Saida-Intervalo" id="s-intervalo">
        </div>

        <div class="campo">
          <label for="retorno-intervalo">Retorno Intervalo:</label>
          <input type="number" name="Retorno-Intervalo" id="r-intervalo">
        </div>

        <div class="campo">
          <label for="hora-saida">Hora Saída:</label>
          <input type="number" name="Hora-Saida" id="h-saida" min="0">
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

<script type="module" src="public/js/folha-ponto/definir_jornada.js"></script>
