<h1>Padrões de Desenvolvimento</h1>
<h4> – Aqui estão todos os padrões e instruções de como o código deve ser construído <br> – Os padrões HTML e alguns CSS serão revisionados com o tempo </h4>


<h3>Versões de Desenvolvimento</h3>


<strong>

<li><a> HTML5 </a> </li>
<li><a> CSS3 </a> </li>
<li><a> JavaScript(ECMAScript 5.1) </a></li>

</strong>

<hr>

<h3>Criação de variáveis para o CSS</h3>
<p> – Nomeação das variaveis com base da sua função no código</p>


<i>

    :root {
    --cor-titulo: blue;
    --cor-destaque: red;
    }
</i>

<h3>Padrão de commit </h3>
<p> – Exemplo : <strong>"/TEST - FE - Adicionar testes para componente Header"</strong></p>


<h3> Padrão para criação de id e class </h3>

<i>

    id = "exemplo-id"
    class = "exemplo-class"

</i>

<hr>

<h3>Um espaço entre as tags de diferentes tipos (blocos de códigos)</h3>

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
        
      </section>
      
    </main>

</i>

<hr>

<h3>Padrão de aspas, aspas simples("")</h3>

<i>

    id = "exemplo-id"
    class = "exemplo-class"

</i>


<hr>      

<h3> Regra de Ouro:</h3>

<p> – Se o conteúdo puder ser lido e fazer sentido por si só, fora do contexto atual da página, <br>
    ele provavelmente é um &ltarticle&gt.</p>

<br>

<p> – Se o conteúdo for um agrupamento temático de outros conteúdos (que podem ser ou não &ltarticle&gt), <br>
ou uma parte de um documento maior que não faz sentido sozinha, ele provavelmente é uma &ltsection&gt.</p>

<h3>Padrão da estrutura HTML</h3>
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