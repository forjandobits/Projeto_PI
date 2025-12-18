<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>


    <!-- Conteúdo principal da página -->
    <main>
        <article class="cabecalhos">
            <h1>Pagamentos</h1>
      
            <button>Novo +</button>
        </article>

        <h2>Histórico de Pagamentos</h2>

        
        <article class="article-folha-pagamento">
            
            <form method="GET" class="filtro">
                
                <div class="campo-esquerda">
                    <select id="opcao-filtro" class="opcao-filtro">
                        <option value="1" default>Selecione Filtro</option>
                        <option value="2">Data</option>
                        <option value="3">Cargo</option>
                        <option value="4">Colaborador</option>
                    </select>
                </div>

                <div class="campo-direita">
                    <button>Cadastro</button>
                </div>

                
                <input type="text" id="filtro" class="input-filtro" placeholder="Filtro">
                
            </form>
            
            <section class="lista-principal">

                <table>

                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Mês Referencia</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id="tabela-saida">
                    </tbody>

                </table>

            </section>

        </article>
    </main>
</body>

</html>