<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Colaboradores</title>
  <link rel="stylesheet" href="public/css/estilo.css">
</head>
<body class="container-recuperar">

    <?php include "./header.php" ?>
    
    <?php include "./sidebar.php" ?>

  

  <div class="header">
    <h1>Colaboradores</h1>
    <div class="cabecalho">
      <button class="btn-cadastrar">Cadastrar</button>
      <!-- <img src="public/img/Logo Humanamente.png" alt="logo" class="logo"> -->
    </div>
  </div>


<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Cargo</th>
      <th>Situação</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gustavo</td>
      <td>Padeiro</td>
      <td>Disponível</td>
      <td><button class="btn-visualizar">Visualizar</button></td>
    </tr>
    <tr>
      <td>Elisangela</td>
      <td>Caixa</td>
      <td>Disponível</td>
      <td><button class="btn-visualizar">Visualizar</button></td>
    </tr>
    <tr>
      <td>Joaquim</td>
      <td>Balconista</td>
      <td>Desligado</td>
      <td><button class="btn-visualizar">Visualizar</button></td>
    </tr>
    <tr>
      <td>Regina</td>
      <td>Enfermagem</td>
      <td>Disponível</td>
      <td><button class="btn-visualizar">Visualizar</button></td>
    </tr>
    <tr>
      <td>Mateus</td>
      <td>Gerente</td>
      <td>Desligado</td>
      <td><button class="btn-visualizar">Visualizar</button></td>
    </tr>
  </tbody>
</table>

</body>
</html>