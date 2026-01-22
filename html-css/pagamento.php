<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>


    <!-- Conteúdo principal da página -->
    <main>
        <article class="cabecalhos">
            <h1>Pagamentos</h1>
      
            <button id="novo-pagamento"><a href="folha_de_pagamento.php">Adicionar</a></button>
        </article>

        <article>
            
            <form method="GET">
                <section class="areas-form">
                    <div class="campo">
                        <select id="opcao-filtro">
                            <option value="1" default>-- Selecione --</option>
                            <option value="2">Cargo</option>
                            <option value="3">Data</option>
                            <option value="4">Nome do Colaborador</option>
                        </select>
                    </div>

                    <div class="campo">
                        <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Colaborador, Cargo, ..." required>
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
                            <td><button class='abrir-modal'>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                        <tr>
                            <td>Gustavo</td>
                            <td>Padeiro</td>
                            <td>11/2025</td>
                            <td><button class='abrir-modal'>Visualizar</button></td>
                            <td><button>Baixar</button></td>
                        </tr>
                    </tbody>
                </table>

            </section>

        </article>
        <article class="modal modal-cadastro">
            <section>
            <h3>Informações do Pagamento</h3>
            <p class="fechar">X</p>
            </section>
            
            <section>
            <form action="" class="form-modal">
                <table>
                    <caption>Folha de Pagamento - Mês/Ano(?) - Nome Funcionário(?)</caption>

                    <?php include "./tabela_pagamento.php" ?>
                </table>
                
                <section class="resumo-final">
                    <p>Total Líquido (R$): 2000,00</p>
                    <button>Editar</button>
                    <button>Concluir</button>
                </section>
            </form>
            </section>
        </article>
    </main>
</body>

</html>