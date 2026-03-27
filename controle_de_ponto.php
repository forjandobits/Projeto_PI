<?php include "./components/header.php" ?>
<?php include "./components/sidebar.php" ?>

<main>
    <article class="cabecalhos">
        <h1>Controle de Ponto</h1>
    </article>

    <article>
        <form method="GET">
            <section class="areas-form">
                <div class="campo">
                    <input 
                        type="text"
                        name="Filtro"
                        id="filtro-funcionario-ponto"
                        placeholder="Ex.: Nome do Funcionário"
                        >
                </div>

                <div class="campo">
                    <button type="submit">Buscar</button>
                </div>
            </section>
        </form>
    </article>

    <article>
        <section>
            <table>
                <caption>Histórico de Pontos</caption>

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Banco de Horas (HH:MM)</th>
                        <th>Situação</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    <?php while($row = $resultado->fetch_assoc()) { ?>

                    <tr>
                        <td><?= $row['nome_completo'] ?></td>
                        <td>00:00</td>
                        <td>Em Serviço</td>
                        <td>
                            <a href="espelho_de_ponto.php?id=<?= $row['id_funcionario'] ?>">
                                <button type="button">Visualizar</button>
                            </a>
                        </td>
                    </tr>

                    <?php } ?>

                </tbody>
            </table>
        </section>                          
    </article>
</main>

<script>
const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>

</body>