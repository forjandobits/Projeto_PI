<h1>Padrões de Desenvolvimento</h1>
<p> – Aqui estão todos os padrões e instruções de como o código deve ser construído <br> – Os códigos HTML e CSS serão revisados com o tempo </p>

<h3>Versões de Desenvolvimento</h3>

<strong>

<li><i> HTML5 </i> </li>
<li><i> CSS3 </i> </li>
<li><i> JavaScript(ECMAScript 5.1) </i></li>

</strong>

<hr>

<h3>Padrão para a criação de variáveis no CSS</h3>
<p> – Nomenclatura de variáveis conforme sua função no código</p>

<i>

    :root {
    --cor-titulo: blue;
    --cor-destaque: red;
    }

</i>

<p> – Observação : Todas as cores utilizadas serão definidas no inicio da construção do código CSS</p>

<h3>Padrão de commit </h3>
<p> – Exemplo : <strong>"/TEST - FE - Adicionar testes para componente Header"</strong></p>


<h3> Padrão para criação de id e class </h3>
    <p> – Criação com aspas simples('')</p>
<i>

    id = 'exemplo-id'

    class = 'exemplo-class'

</i>
<h3>Padrão da estrutura HTML</h3>

<p> – Um espaço entre as tags de diferentes tipos (blocos de códigos)</p>
<i>

    <!DOCTYPE html>
    <html lang="pt-br">


    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Padrão estrutura HTML</title>
    </head>


    <body>
    <header id='exemplo-id'>
        <nav class='exemplo-class'>
            <ul>
                <li> <a href="index.html">Quem somos</a> </li>
                <li> <a href="servicos.html">serviços</a> </li>
                <li> <a href="produtos.html">lojinha</a> </li>
                <li> <a href="contato.html">contato</a> </li>
            </ul>
            <h1><img src="img\dog-paw1.png" alt="imagem de cachorro" /> Pet Paws</h1>
        </nav>
    </header>


    <main>
        <article id='exemplo-id'>
            <section class='exemplo-class'>
                <p>Somos a Pet Paws, um pet shop apaixonado por cuidar dos seus melhores amigos!</p>
            </section>


            <section class='exemplo-class'>
                <p>Somos a Pet Paws, um pet shop apaixonado por cuidar dos seus melhores amigos!</p>
            </section>
        </article>


        <aside class='exemplo-class'>
            <img src="img\propaganda.jpg" />
            <p>Entre em contato ja !</p>
            <a href="contato.html">Contato </a>
        </aside>
    </main>


    <footer class='exemplo-class'>
        <p>&copy; 2025 - Todos os direitos reservados.</p>
    </footer>
    </body>
    </html>

</i>

<hr>

<h3> Regra de Ouro:</h3>

<p> – Se o conteúdo puder ser lido e fazer sentido por si só, fora do contexto atual da página, <br>
    ele provavelmente é um &ltarticle&gt.</p>

<br>

<p> – Se o conteúdo for um agrupamento temático de outros conteúdos (que podem ser ou não &ltarticle&gt), <br>
ou uma parte de um documento maior que não faz sentido sozinha, ele provavelmente é uma &ltsection&gt.</p>

<hr>