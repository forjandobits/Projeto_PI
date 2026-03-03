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
          <form class="form-modal-login">
            <input type='text' name="CPF-Login" id='cpf-login' placeholder='CPF' required/>
            <input type='password' name="Senha" id='senha-login' placeholder='Digite sua senha' required/>
            <p id='erro'>Dados incorretos!</p> <!-- Exemplo de mensagem a ser exibida: 'Preencha os dados corretamente' -->
            <a href='link.com'><small>ESQUECI MINHA SENHA</small></a>
            <a href="inicial.php"><button type='button'>ENTRAR</button></a>
          </form>
        </section>

      </article>
      
    </main>

    <script>
      const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
    </script>
  </body>
</html>