<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

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
                  <select id="opcao-filtro">
                      <option value="1" default>-- Selecione --</option>
                      <option value="2">Nome do Colaborador</option>
                      <option value="3">Cargo</option>
                      <option value="4">Situação</option>
                      <option value="5">Desligado</option>
                  </select>
              </div>

              <div class="campo">
                  <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Colaborador, Cargo, ..." required>
              </div>

              <div class="campo">
                  <button>Buscar</button>
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
       <tr>
         <td>Gustavo</td>
         <td>Padeiro</td>
         <td>Disponível</td>
         <td><button>Desligar</button></td>
         <td><button class='abrir-modal'>Visualizar</button></td>
       </tr>
       <tr>
         <td>Elisangela</td>
         <td>Caixa</td>
         <td>Disponível</td>
         <td><button>Desligar</button></td>
         <td><button class='abrir-modal'>Visualizar</button></td>
       </tr>
       <tr>
         <td>Joaquim</td>
         <td>Balconista</td>
         <td>Desligado</td>
         <td><button>Desligar</button></td>
         <td><button class='abrir-modal'>Visualizar</button></td>
       </tr>
       <tr>
         <td>Regina</td>
         <td>Caixa</td>
         <td>Disponível</td>
         <td><button>Desligar</button></td>
         <td><button class='abrir-modal'>Visualizar</button></td>
       </tr>
       <tr>
         <td>Mateus</td>
         <td>Gerente</td>
         <td>Desligado</td>
         <td><button>Desligar</button></td>
         <td><button class='abrir-modal'>Visualizar</button></td>
       </tr>
     </tbody>
   </table>
  </article>
  <article class="modal modal-cadastro">
    <section>
      <h3>Informações do Funcionário</h3>
      <p class="fechar">X</p>
    </section>
    
    <section>
      <form action="" class="form-modal">

        <?php include "./formulario_cadastro.php" ?>

      </form>
    </section>
  </article>
</main>

</body>
</html>