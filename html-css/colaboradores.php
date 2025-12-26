<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>

  <article class="cabecalhos">
      <h1>Colaboradores</h1>
      
      <button><a href="cadastro_de_funcionario.php">Cadastrar</a></button>
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
       </tr>
     </thead>
     <tbody id="tabela-saida-colaboradores">
       <tr>
         <td>Gustavo</td>
         <td>Padeiro</td>
         <td>Disponível</td>
         <td><button>Visualizar</button></td>
       </tr>
       <tr>
         <td>Elisangela</td>
         <td>Caixa</td>
         <td>Disponível</td>
         <td><button>Visualizar</button></td>
       </tr>
       <tr>
         <td>Joaquim</td>
         <td>Balconista</td>
         <td>Desligado</td>
         <td><button>Visualizar</button></td>
       </tr>
       <tr>
         <td>Regina</td>
         <td>Caixa</td>
         <td>Disponível</td>
         <td><button>Visualizar</button></td>
       </tr>
       <tr>
         <td>Mateus</td>
         <td>Gerente</td>
         <td>Desligado</td>
         <td><button>Visualizar</button></td>
       </tr>
     </tbody>
   </table>
  </article>
</main>

</body>
</html>