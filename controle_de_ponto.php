<?php include "./components/header.php" ?>

<?php include "./components/sidebar.php" ?>

<?php
require_once __DIR__ . "../banco-de-dados/conexao.php";

$filtro = $_GET['Filtro'] ?? '';

if ($filtro != "") {

    $sql = "SELECT id_funcionario, nome_completo FROM tb_funcionario WHERE nome_completo LIKE ?";
    $stmt = $conn->prepare($sql);

    $param = "%" . $filtro . "%";
    $stmt->bind_param("s", $param);

    $stmt->execute();
    $resultado = $stmt->get_result();

} else {

    $sql = "SELECT id_funcionario, nome_completo FROM tb_funcionario";
    $resultado = $conn->query($sql);

}
?>

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
                        id="filtro"
                        placeholder="Ex.: Nome do Funcionário"
                        value="<?= $filtro ?>"
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
                <table id="">
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
                    </tbody>
                </table>
            </section>                          
        </article>
    </main>


<script>
const BASE_URL = "<?= dirname($_SERVER['SCRIPT_NAME']) ?>";
</script>
<script type="module" src="public/js/folha-ponto/listar_funcionarios.js"></script><!--atenção para o tipo module-->
</body>
