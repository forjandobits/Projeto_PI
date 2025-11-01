<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tela Inicial</title>
    <link rel="stylesheet" href="public/css/estilo.css">
    <link rel="stylesheet" href="public/css/sidebar.css">
    <link rel="shortcut icon" href="public\img\Cerebro.ico" type="image/x-icon">
</head>

<body>
        <!-- Cabeçalho fixo da tela -->
    <?php include "./header.php" ?>
    

    <!-- Conteúdo principal da página -->
    <main>

        <!-- Menu Lateral (SideBar)-->
       <?php include "./sidebar.php" ?>


        <article>
            <form action="">
                <select name="" id="" disabled="disabled"></select>

                <input type="text">

                <button>Novo +</button>
            </form>

            <section class="lista">

            <table>

                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Livros</th>
                        <th>Data de Devolução</th>
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