<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

    <main>
        <article class="cabecalhos">
            <h1>Controle de Ponto</h1>
            
            <button>Adicionar</button>
        </article>

        <article>
            <section class="section-ponto-controle">
                <div class="input-controle-ponto">
                    <input type="text" placeholder="Colaborador"/>
                </div>
                <div class="container-butao">
                    <div>
                        <a  class="botao-controle-ponto" href="">Adicionar</a>
                    </div>
                </div>
            </section>
        </article>

        <article class="container-tabela-controle-ponto">
            <section>
                <table>
                    <thead class="thead-tabela-controle-ponto">
                        <tr>
                            <th>Nome</th>
                            <th>Banco de Horas</th>
                            <th>Férias</th>
                            <th class="coluna-invisivel"></th>
                        </tr>
                    </thead>
                    <tbody class="tr-tabela-controle-ponto">
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td class="coluna-invisivel"><button>Visualizar</button></td>
                        </tr>
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                             <td class="coluna-invisivel"><button>Visualizar</button></td>
                        </tr>
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                             <td class="coluna-invisivel"><button>Visualizar</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>                          
        </article>
    </main>
</body>