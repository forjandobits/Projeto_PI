<br>

<h1 align=center>Padrões de Desenvolvimento</h1>
<h4 align=center> – Aqui está todos os padrões e instruções de como o codigo deve ser construido <br>  – Os padrões HTML e alguns CSS sera revisionados com o tempo</h4>


<h2 align=center><span style="color: yellow;">Versões de Desenvolvimento</h2>

<strong align=center>

<li><a> HTML5 </a> </li>
<li><a> CSS3 </a> </li>
<li><a> JavaScript <br> (ECMAScript 5.1) </a></li>

</strong>

<hr>
<br>


<h3 align=center>Criação de variáveis para o CSS <span style="color: orange;">(Verificar e testar) </h3>
<p align=center> – Devera ser revisionado e ver se é cabivel dentro do codigo</p>

<br>

<h3 align=center>Padrão de <span style="color: orange;">commit </h3>
<p align=center> – Exemplo : "/TEST - FE - Adicionar testes para componente Header"</p>

<br>


<h3 align=center >Padrão para criação de id e class: </h2>

<i align=center>

    id = ‘exemplo-id’
    class = ‘exemplo-class’

</i>

<hr>
<br>


<h3 align=center>Um espaço entre as tags de diferentes tipos <span style="color: orange;">(blocos de códigos)</h3>

<br>

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

          Somos a Pet Paws, um pet shop apaixonado por cuidar dos seus melhores
          amigos!
          
          <br />

          Oferecemos uma linha completa de produtos, serviços especializados e
          muito carinho para cães e gatos de todos os portes. Aqui, o bem-estar
          do seu pet vem sempre em primeiro lugar!
          
          <br />

        </article>
        
      <section class="content conteudo-principal">

</i>

<hr>
<br>

<h3 align=center>Padrão de aspas, aspas simples(‘’)</h3>
<i align=center>

    id = ‘exemplo-id’ <br>

    class = ‘exemplo-class’

</i>

<hr>      

<br> <br>

<h3 align=center><span style="color: orange;"> Regra de Ouro:</h3>

<p align=center> – Se o conteúdo puder ser lido e fazer sentido por si só, fora do contexto atual da página, <br>
ele provavelmente é um < article>.</p>

<br>

<p align=center>– Se o conteúdo for um agrupamento temático de outros conteúdos (que podem ser ou não < article>), <br>
ou uma parte de um documento maior que não faz sentido sozinha, ele provavelmente é uma < section>.</p>

<br>
<br>

<h3 align=center><span style="color: yellow;">Padrão da estrutura HTML</h3>

<i>

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
</i>

<hr>