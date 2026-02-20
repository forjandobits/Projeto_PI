<?php include "./header.php" ?>

<?php include "./sidebar.php" ?>


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
            <form action="">
    
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
                            <label for="arquivo">Anexar Arquivos:</label>
                            <input type="file" name="Arquivo" id="arquivo">
                        </div>
                        <div class="campo resumo">
                            <label for="pendente">Pendente:</label>
                            <input type="checkbox" name="Pendencia" id="pendente"></input>
                            <button>Concluir</button>
                        </div>
                    </div>
                </section>
            </form>
        </section>
        

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
                        <button class='abrir-modal'>Visualizar</button>
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
                <!-- <tr>
                    <td>Revisão</td>
                    <td>Dani Oliveira</td>
                    <td>17/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button class='abrir-modal'>Visualizar</button>
                    </td>
                </tr>

                <tr>
                    <td>Outros</td>
                    <td>Joaquim Oliveira</td>
                    <td>17/11/2025 </td>
                    <td>Resolvida</td>
                    <td> 
                        <button class='abrir-modal'>Visualizar</button>
                    </td>
                </tr>

                <tr class="pendente">
                    <td>Atestado</td>
                    <td>José Silva</td>
                    <td>18/11/2025 </td>
                    <td>Pendente</td>
                    <td> 
                        <button class='abrir-modal'>Visualizar</button>
                    </td>
                </tr>

                <tr class="pendente">
                    <td>Folga</td>
                    <td>João Cunha</td>
                    <td>20/11/2025 </td>
                    <td>Pendente</td>
                    <td> 
                        <button class='abrir-modal'>Visualizar</button>
                    </td>
                </tr>

                <tr class="urgente">
                    <td>Outros</td>
                    <td>Camilo dos Santos</td>
                    <td>25/11/2025 </td>
                    <td>Urgente</td>
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
                <div class="campo">
                <label>Nome do Solicitante:</label>
                <!-- <input type="text" name="Nome-Solicitante" id="nome-solicitante" placeholder="Josué Arruda" disabled> -->
                <p id="nome-solicitante"></p>
                </div>
                <div class="campo">
                <label>Data da Solicitação:</label>
                <input type="text" name="Nome-Solicitante" id="data-solicitacao" placeholder="12/11/2025" disabled>
                <!-- <p id="data-solicitacao">12/11/2025</p> -->
                </div>
                <div class="campo">
                <label for="opcao-selecionada">Tipo de Solicitação:</label>
                <input type="text" name="Opcao-Selecionada" id="opcao-selecionada" placeholder="Férias" disabled>
                <!-- <p id="opcao-selecionada">Férias</p> -->
                </div>
                <div class="campo">
                <label for="exibir-observacao">Observação:</label>
                <input type="text" name="Exibir-Observacao" id="exibir-oberservacao" placeholder="Motivo completo" disabled>
                <!-- <p id="exibir-observacao">Motivo completo</p> -->
                </div>
                <div class="campo">
                <label for="motivo-recusar">Motivo da Recusa ou Aceite:</label>
                <textarea name="Recusar" id="motivo-recusar" placeholder="Motivo pelo qual foi aceita ou não a solicitação" ></textarea>
                </div>
                <div class="campo">
                <label for="arquivos-anexados">Arquivos Anexados:</label>
                <input type="file" name="Arquivos-Anexados" id="arquivos-anexados" disabled>
                </div>
                <section class="resumo-final">
                    <button class="aceitar" type="submit">✔ Autorizar</button>
                    <button class="negar" type="submit">✘ Negar</button>
                </section>
            </form>
        </section>
    </article>

</main>

<script src="public/js/solicitacoes_visualizar.js"></script>

</body>
</html>

<!-- 
Buscando os dados da solicitação

$sql = "SELECT *from solicitaoes where id"
$resultado = $conn->query($sql);

$informacao = [];

while($row = $resultado->fetch_assoc()) {
   $solicitacoes[]  = $row;
}

