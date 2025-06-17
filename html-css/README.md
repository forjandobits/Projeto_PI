<h1>Padrões de Desenvolvimento</h1>
<h4> – Aqui está todos os padrões e instruções de como o codigo deve ser construido <br>  – Os padrões HTML e alguns CSS sera revisionados com o tempo</h4>


<h2><span style="color: yellow;">Versões de Desenvolvimento</h2>

<strong>

<li><a> HTML5 </a> </li>
<li><a> CSS3 </a> </li>
<li><a> JavaScript <br> (ECMAScript 5.1) </a></li>

</strong>

<hr>

<h3>Criação de variáveis para o CSS <span style="color: orange;">(Verificar e testar) </h3>
<p> – Devera ser revisionado e ver se é cabivel dentro do codigo</p>

<h3>Padrão de <span style="color: orange;">commit </h3>
<p> – Exemplo : "/TEST - FE - Adicionar testes para componente Header"</p>


<h3 >Padrão para criação de id e class: </h2>

<i>

    id = ‘exemplo-id’<br>
    class = ‘exemplo-class’

</i>

<hr>

<h3>Um espaço entre as tags de diferentes tipos <span style="color: orange;">(blocos de códigos)</h3>

<i>      
                       
     <header id="fundo-header">

      <h1><img src="img\dog-paw1.png" alt="" /> Pet Paws</h1>

    </header>

    <nav class="navegacao">

      <a href="index.html">Quem somos</a>
      <a href="servicos.html">serviços</a>
      <a href="produtos.html">lojinha</a>
      <a href="contato.html">contato</a>

    </nav>

    <main id="fonte">
  
      <section class="content conteudo-principal">

        <article class="area-conteudo">
          
          <h1>Seu Pet em Primeiro Lugar</h1>
          <p>Somos a Pet Paws, um pet shop apaixonado por cuidar dos seus melhores
          amigos!</p>
          <p>Somos a Pet Paws, um pet shop apaixonado por cuidar dos seus melhores
          amigos!</p>

        </article>
        
      <section class="content conteudo-principal">

</i>

<hr>

<h3>Padrão de aspas, aspas simples(‘’)</h3>
<code>
    id = ‘exemplo-id’<br>
    class = ‘exemplo-class’
</code>
<hr>      

<h3><span style="color: orange;"> Regra de Ouro:</h3>

<p> – Se o conteúdo puder ser lido e fazer sentido por si só, fora do contexto atual da página, <br>
    ele provavelmente é um < article>.</p>

<br>

<p>– Se o conteúdo for um agrupamento temático de outros conteúdos (que podem ser ou não &ltarticle&gt), <br>
ou uma parte de um documento maior que não faz sentido sozinha, ele provavelmente é uma &ltsection&gt.</p>

<h3><span style="color: yellow;">Padrão da estrutura HTML</h3>
<code>

<!DOCTYPE html>

<html lang="pt-br">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Padrão estrutura HTML</title>

</head>

<body>

<header>

<nav>

<ul>
    <li></li>
</ul>

</nav>

</header>

<main>

    <article id="exemplo-id">

        <section class="exemplo-class"></section>
        <section class="exemplo-class"></section>

    </article>

    <aside></aside>
</main>

<footer></footer>

</body>
</html>
</code>
<hr>