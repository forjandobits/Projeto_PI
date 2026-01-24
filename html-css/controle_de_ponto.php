<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

    <main>
        <article class="cabecalhos">
            <h1>Controle de Ponto</h1>
            
        </article>

        <article>
            <form method="GET">
                <section class="areas-form">
                    <div class="campo">
                        <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Funcionário" required>
                    </div>

                    <div class="campo">
                        <button type="submit">Buscar</button>
                    </div>
                </section>
            </form>
        </article>

        <article>
            <section>
                <table id="">
                    <caption>Histórico de Pontos</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Banco de Horas (HH:MM)</th>
                            <th>Situação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tabela-saida-ponto">
                        <tr>
                            <td>Gustavo</td>
                            <td>00:00</td>
                            <td>Férias</td>
                            <td><a href="espelho_de_ponto.php"><button>Visualizar</button></a></td>
                        </tr>
                        <tr>
                            <td>Elisangela</td>
                            <td>00:45</td>
                            <td>Afastado(a)</td>
                            <td><a href="espelho_de_ponto.php"><button>Visualizar</button></a></td>
                        </tr>
                        <tr>
                            <td>Joaquim</td>
                            <td>04:00</td>
                            <td>Em Seviço</td>
                            <td><a href="espelho_de_ponto.php"><button>Visualizar</button></a></td>
                        </tr>
                    </tbody>
                </table>
            </section>                          
        </article>
    </main>
</body>