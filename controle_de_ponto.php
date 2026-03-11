<?php include "./components/header.php" ?>
<?php include "./components/sidebar.php" ?>

<?php
require_once __DIR__ . "../banco-de-dados/conexao.php";
echo "conectou";

$filtro = $_GET['Filtro'] ?? '';

if ($filtro != "") {

    $sql = "SELECT nome_completo FROM tb_funcionario WHERE nome_completo LIKE ?";
    $stmt = $conn->prepare($sql);

    $param = "%" . $filtro . "";
    $stmt->bind_param("s", $param);

    $stmt->execute();
    $resultado = $stmt->get_result();

} else {

    $sql = "SELECT nome_completo FROM tb_funcionario";
    $resultado = $conn->query($sql);

}
?>

$sql = "SELECT nome_completo FROM tb_funcionario";
$resultado = $conn->query($sql);
?>

<main>
    <article class="cabecalhos">
        <h1>Controle de Ponto</h1>
    </article>

    <article>
        <form method="GET">
            <section class="areas-form">
                <div class="campo">
                    <input type="text" name="Filtro" id="filtro" placeholder="Ex.: Nome do Funcionário" required>
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

                <tbody id="tabela-saida-ponto">

                    <?php while($row = $resultado->fetch_assoc()) { ?>

                    <tr>
                        <td><?= $row['nome_completo'] ?></td>
                        <td>00:00</td>
                        <td>Em Serviço</td>
                        <td><a href="espelho_de_ponto.php"><button>Visualizar</button></a></td>
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