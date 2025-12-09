<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Solicitações</title>
    <link rel="stylesheet" href="public/css/estilo.css">
    <link rel="stylesheet" href="public/css/sidebar.css">
</head>
<body>
    <?php include "./header.php" ?>
    
    <?php include "./sidebar.php" ?>

    <h1 class="titulo">Solicitações</h1>

    <button class="botao-adicionar">Adicionar</button>


    <!-- ------------------- CAIXA ADICIONAR SOLICITAÇÕES ------------------- -->

    <div class="caixa-formulario">

        <h2>Adicionar Solicitações</h2>

        <div class="linha-form">
            <div class="grupo-campo">
                <label>Colaborador:</label>
                <input type="text">
            </div>

            <div class="grupo-observacao">
                <label>Observação:</label>
                <textarea></textarea>
            </div>

            <div class="caixa-upload">
                <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" class="icone-nuvem">
                <span><br>Anexar Arquivos</span>
            </div>
        </div>

        <div class="linha-form">
            <div class="grupo-campo">
                <label>Tipo:</label>
                <select>
                    <option>Férias</option>
                    <option>Folga</option>
                    <option>Revisão</option>
                    <option>Atestado</option>
                </select>
            </div>
        </div>

        <div class="rodape-form">
            <label>Pendente: <input type="checkbox"></label>
            <button class="botao-concluir">Concluir</button>
        </div>

    </div>


    <!-- ------------------- TABELA ------------------- -->

    <table class="tabela">
        <thead>
            <tr>
                <th>Solicitação</th>
                <th>Colaborador</th>
                <th>Data</th>
            </tr>
        </thead>

        <tbody>

            <!-- Primeira linha -->
            <tr>
                <td>Vencimento<br>de Férias</td>
                <td>Josué Arruda</td>
                <td>12/11/2025  
                    <button class="botao-visualizar">Visualizar</button>
                </td>
            </tr>

            <!-- Linha expandida cinza -->
            <tr class="linha-visualizar">
                <td>Início: 17/12/2025</td>
                <td>Término: 16/01/2026</td>
                <td>
                    <button class="botao-aprovar">✔</button>
                    <button class="botao-reprovar">✘</button>
                </td>
            </tr>

            <!-- Segunda linha -->
            <tr>
                <td>Revisão da<br>Folha de Pagamento</td>
                <td>Dani Oliveira</td>
                <td>07/12/2025  
                    <button class="botao-visualizar">Visualizar</button>
                </td>
            </tr>

        </tbody>
    </table>

</body>
</html>