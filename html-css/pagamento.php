<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Histórico de Pagamentos</title>
    <link rel="stylesheet" href="public/css/estilo.css">
    <link rel="stylesheet" href="public/css/sidebar.css">
    <link rel="shortcut icon" href="public\img\Cerebro.ico" type="image/x-icon">
</head>

<body>
    <?php include "./header.php" ?>
    
    <?php include "./sidebar.php" ?>


    <!-- Conteúdo principal da página -->
    <main class="main-pagamento">

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
                    <button class="button-filtro">Cadastro</button>
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

    <!-- Importa o JavaScript que controla a sidebar -->
    <script src="public/js/sidebar.js"></script>
</body>

</html>