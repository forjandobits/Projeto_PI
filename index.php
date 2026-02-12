<!DOCTYPE html>
<html lang="pt-br">


  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conectar-se</title>
    <link rel="stylesheet" href="public/css/estilo.css">
    <link rel="stylesheet" href="public/css/tela_login.css"/>
    <link rel="stylesheet" href="public/css/formularios.css">
    <link rel="stylesheet" href="public/css/correcoes.css">
    <link rel="shortcut icon" href="public\img\Cerebro.ico" type="image/x-icon">
  </head>


  <body> 
    <img src='public\img/fundo-login.jpg' class='fundo-login'>

    <main class="main-login">

      <article class='texto-login'>
        <section>
          <h1>HumanaMente</h1>
          <h3>Facilitando e otimizando o gerenciamento da sua empresa.</h3>
        </section>
        <section class='container-logo'>
          <h5>Desenvolvido por:</h5>
          <img src='public\img/Logo_Forjando_Bits.jpg'>
        </section>
      </article>

      <article class='container-login'>

        <section>
          <h2>CONECTAR-SE</h2>
            <!-- Alterei os ids dos inputs para serem compativeis com o bd, e tambem coloquei o 'action' no form -->
            <form class="form-modal-login" id="form-login" action="public/js/login-e-Configuracao/processa_login.php" method="POST">
              <input type="text" id="usuario" name="usuario" placeholder="Usuário">
              <input type="password" id="senha" name="senha" placeholder="Senha">
              <button type="submit">Entrar</button>
              <p id='erro' style='display:none;color:red'></p>
            </form>
            <!-- Alterei os ids dos inputs para serem compativeis com o bd, e tambem coloquei o 'action' no form -->
            <form class="form-modal-login" id="form-login" action="public/js/login-e-Configuracao/processa_login.php" method="POST">
              <input type="text" id="usuario" name="usuario" placeholder="Usuário">
              <input type="password" id="senha" name="senha" placeholder="Senha">
              <button type="submit">Entrar</button>
              <p id='erro' style='display:none;color:red'></p>
            </form>
        </section>

      </article>
      
    </main>

     <script src='public/js/login-e-Configuracao/login.js'></script>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
  </body>
</html>