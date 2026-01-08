<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>

<main>
    
    
    <!-- ------------------- CAIXA ADICIONAR SOLICITAÇÕES ------------------- -->
    <article class="cabecalhos">
        <h1>Solicitações</h1>
        
        <button class="mostrar">Adicionar</button>
    </article>
    
    <article>

        
        <form action="" id="solicitacoes">
            <h2>Adicionar Solicitações</h2>

            <section class="areas-form">
                <div class="grupo-campo">
                    <div class="campo">
                        <label for="nome">Colaborador:</label>
                        <input name="Nome" id="nome" type="text" placeholder="Ex.: José da Silva" required>
                    </div>
                    <div class="campo">
                        <label for="opcoes">Tipo de Solicitação:</label>
                        <select name="" id="opcoes" required>
                            <option>Férias</option>
                            <option>Folga</option>
                            <option>Revisão</option>
                            <option>Atestado</option>
                            <option>Outros</option>
                        </select>
                    </div>
                </div>
                
                <div class="grupo-campo">
                    <div class="campo">
                        <label for="observacoes">Observação:</label>
                        <textarea name="Observacoes" id="observacoes" placeholder="Ex.: Motivo pelo qual a solicitações será feita. (Obrigatório)" required></textarea>
                    </div>
                </div>

                <div class="grupo-campo">
                    <div class="campo">
                        <label for="arquivo">Anexar Arquivos</label>
                        <input type="file" name="Arquivo" id="arquivo">
                        <!-- <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" class="icone-nuvem"> -->
                    </div>
                    <div class="campo resumo">
                        <label for="pendente">Pendente:</label>
                        <input type="checkbox" name="Pendencia" id="pendente"></input>
                        <button>Concluir</button>
                    </div>
                </div>
            </section>
        </form>

    </article>
    
    
    <!-- ------------------- TABELA ------------------- -->
    <article>

        <table>
            <caption>Histórico de Solicitações</caption>
            <thead>
                <tr>
                    <th>Solicitação</th>
                    <th>Colaborador</th>
                    <th>Data da Solicitação</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
        
            <tbody>
        
                <!-- Primeira linha-->
                <tr>
                    <td>Férias</td>
                    <td>Josué Arruda</td>
                    <td>12/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>
        
                <!-- Linha expandida cinza-->
                <!-- TENTAR MUDAR ESTE PADRÃO  -->
                <!-- <tr class="linha-visualizar">
                    <td>Início: 17/12/2025</td>
                    <td>Término: 16/01/2026</td>
                    <td>
                        <button>✔</button>
                        <button>✘</button>
                    </td>
                </tr> -->
        
                <!-- Segunda linha -->
                <tr>
                    <td>Revisão</td>
                    <td>Dani Oliveira</td>
                    <td>17/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>

                <tr>
                    <td>Outros</td>
                    <td>Joaquim Oliveira</td>
                    <td>17/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>

                <tr class="pendente">
                    <td>Atestado</td>
                    <td>José Silva</td>
                    <td>18/11/2025 </td>
                    <td>Pendente</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>

                <tr class="pendente">
                    <td>Folga</td>
                    <td>João Cunha</td>
                    <td>20/11/2025 </td>
                    <td>Pendente</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>

                <tr class="urgente">
                    <td>Outros</td>
                    <td>Camilo dos Santos</td>
                    <td>25/11/2025 </td>
                    <td>Urgente</td>
                    <td> 
                        <button>Visualizar</button>
                    </td>
                </tr>
        
            </tbody>
        </table>
    </article>
</main>


</body>
</html>