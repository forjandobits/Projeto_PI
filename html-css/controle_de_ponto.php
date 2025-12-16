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

  
    <?php include "./header.php" ?>
    
    <?php include "./sidebar.php" ?>
    <main class="main-tabela">
        <div>
            <h1 class="titulo-controle-ponto">Controle de ponto</h2>
        </div>

        <article>
            <section class="section-ponto-controle">
                <div class="input-controle-ponto">
                    <input type="text" placeholder="Colaborador"/>
                </div>
                <div class="container-butao">
                    <div>
                        <a  class="botao-controle-ponto" href="">Adicionar</a>
                    </div>
                </div>
            </section>
        </article>

        <article class="container-tabela-controle-ponto">
            <section>
                <table>
                    <thead class="thead-tabela-controle-ponto">
                        <tr>
                            <th>Nome</th>
                            <th>Banco de Horas</th>
                            <th>Férias</th>
                            <th class="coluna-invisivel"></th>
                        </tr>
                    </thead>
                    <tbody class="tr-tabela-controle-ponto">
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td class="coluna-invisivel"><button class="botao-controle-ponto">Visualizar</button></td>
                        </tr>
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                             <td class="coluna-invisivel"><button class="botao-controle-ponto">Visualizar</button></td>
                        </tr>
                        <tr>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                            <td>Informaçao incivel</td>
                             <td class="coluna-invisivel"><button class="botao-controle-ponto">Visualizar</button></td>
                        </tr>
                    </tbody>
                </table>
            </section>                          
        </article>
    </main>
</body>