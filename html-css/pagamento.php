<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>


    <!-- Conteúdo principal da página -->
    <main>
        <article class="cabecalhos">
            <h1>Pagamentos</h1>
      
            <button id="novo-pagamento">Novo +</button>
        </article>

        <article>
            
            <form method="GET">
                <section class="areas-form">
                    <select id="opcao-filtro" class="campo">
                        <option value="1" default>-- Selecione --</option>
                        <option value="2">Cargo</option>
                        <option value="3">Data</option>
                        <option value="4">Nome do Colaborador</option>
                    </select>

                    <div class="campo">
                        <input type="text" id="filtro" placeholder="Ex.: Nome do Colaborador, Cargo, ..." required>
                    </div>

                    <div class="campo">
                        <button>Buscar</button>
                    </div>
                </section>
            </form>
        
        </article>

        <article>
            <section>

                <table>
                    <caption>Histórico de Pagamentos</caption>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Referência (Mês/Ano)</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id="tabela-saida-pagamentos">
                        <tr>
                            <td>Gustavo</td>
                            <td>Padeiro</td>
                            <td>12/2025</td>
                            <td><button>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                        <tr>
                            <td>Gustavo</td>
                            <td>Padeiro</td>
                            <td>11/2025</td>
                            <td><button>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </article>
    </main>
</body>

</html>