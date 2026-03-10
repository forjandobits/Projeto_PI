<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>



<main>
    
    
    <!-- ------------------- CAIXA ADICIONAR SOLICITAÇÕES ------------------- -->
    <article class="cabecalhos">
        <h1>Solicitações</h1>
        
        <button class="solicitar">Adicionar</button>
    </article>
    
    <article class="modal modal-cadastro" id="solicitacoes">
        <section>
            <h3>Adicionar Solicitações</h3>
            <p class="fechar">X</p>
        </section>

        <section>
            <form id="solicitacao" action="public/js/solicitacoes/adicionar.js" method="POST">
    
                <section class="areas-form">
                    <div class="grupo-campo">
                        <div class="campo">
                            <label for="nome">Colaborador:</label>
                            <input name="Nome" id="nome" type="text" placeholder="Ex.: José da Silva" required>
                        </div>
                        <div class="campo">
                            <label for="opcoes">Tipo de Solicitação:</label>
                            <select name="Opcoes" id="opcoes" required>

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
                            <label for="arquivo">Anexar Arquivos:</label>
                            <input type="file" name="Arquivo" id="arquivo">
                        </div>
                        <div class="campo resumo">
                            <label for="pendente">Pendente:</label>
                            <input type="checkbox" name="Pendencia" id="pendente"></input>

                            <button type="button" id="concluir">Concluir</button>
                            
                            <!-- Div para exibir mensagens de erro/sucesso -->
                            <div id="mensagem-senha" style="margin-top:10px;"></div>
                        </div>
                    </div>
                </section>
            </form>
        </section>
        

    </article>
    
    <!-- ------------------- TABELA ------------------- -->
    <article id="historicoSolicitacoes">

        <table>
            <caption>Histórico de Solicitações</caption>
            <thead>
                <tr>
                    <th>Colaborador</th>
                    <th>Solicitação</th>
                    <th>Data da Solicitação</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
        
            <tbody>
        
                <!-- Primeira linha-->
                <!-- <tr>
                    <td>Férias</td>
                    <td>Josué Arruda</td>
                    <td>12/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button class='abrir-modal'>Visualizar</button>
                    </td>
                </tr> -->
        
            </tbody>
        </table>
    </article>

    <article class="modal" id="modal-solicitacoes">
        <section>
            <h3>Informações da Solicitação</h3>
            <p class="fechar">X</p>
        </section>
        
        <section>
            <form action="" class="form-modal">
                <input type="hidden" id="id-solicitacao"> <!-- Deixando o id de forma oculta -->
                <div class="campo">
                <label>Nome do Solicitante:</label>
                <input type="text" name="Nome-Solicitante" id="modal-nome-solicitante" readonly>
                <!-- <p id="nome-solicitante"></p> -->
                </div>
                <div class="campo">
                <label>Data da Solicitação:</label>
                <input type="text" id="modal-data-solicitacao" readonly>
                <!-- <p id="data-solicitacao"></p> -->
                </div>
                <div class="campo">
                <label for="opcao-selecionada">Tipo de Solicitação:</label>
                <input type="text" name="Opcao-Selecionada" id="modal-opcao-selecionada" readonly>
                <!-- <p id="opcao-selecionada"></p> -->
                </div>
                <div class="campo">
                <label for="exibir-observacao">Observação:</label>
                <input type="text" name="Exibir-Observacao" id="modal-exibir-observacao" readonly>
                <!-- <p id="exibir-observacao"></p> -->
                </div>
                <div class="campo">
                <label for="motivo-recusar">Motivo da Recusa ou Aceite:</label>
                <textarea name="Recusar" id="modal-motivo-recusar" placeholder="Motivo pelo qual foi aceita ou não a solicitação" ></textarea>
                </div>
                <div class="campo">
                <label for="arquivos-anexados">Arquivos Anexados:</label>
                <input type="file" name="Arquivos-Anexados" id="modal-arquivos-anexados" disabled>
                </div>
                <section class="resumo-final">
                    <button class="aceitar" type="submit">✔ Autorizar</button>
                    <button class="negar" type="submit">✘ Negar</button>
                </section>
                <p id="mensagem-status"></p>
            </form>
        </section>
    </article>

</main>

<script>
    const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>

<script src="public/js/solicitacoes/adicionar.js"></script>
<script src="public/js/solicitacoes/solicitacoes_visualizar.js"></script>

</body>
</html>



