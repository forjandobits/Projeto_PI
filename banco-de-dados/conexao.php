<?php
$host = "localhost";
$user = "root";
$pass = "";
$bd = "bd_humanamente_teste";// importante
$bd = "bd_humanamente_teste";// importante
$bd_existe = false;
$caminho_bd = "../banco-de-dados/bd_humanamente_teste.sql";
$caminho_bd = "../banco-de-dados/bd_humanamente_teste.sql";

// Conexão com servidor sem usar nenhum banco
$conn = new mysqli($host, $user, $pass);

// Traz a lista de bancos de dados existentes
$bancos_existentes = $conn->query("SHOW DATABASES");

// Percorre cada banco existente e verifica se é o desejado
foreach ($bancos_existentes as $bancos_existente) {
    if ($bancos_existente["Database"] == $bd) {
        // Se o banco existir usa ele
        $conn->select_db($bd);
        $bd_existe = true;
        break;
    }
}

// Se o banco não existir, importa ele
    if ($bd_existe == false) {
        
        // Verifica se o arquivo do banco existe
        if (file_exists($caminho_bd)) {
            // Lê o arquivo .sql e pega o código dele
            $codigo_sql = file_get_contents($caminho_bd);
    if ($bd_existe == false) {
        
        // Verifica se o arquivo do banco existe
        if (file_exists($caminho_bd)) {
            // Lê o arquivo .sql e pega o código dele
            $codigo_sql = file_get_contents($caminho_bd);

            // Executa todas as querys do arquivo
            $conn->multi_query($codigo_sql);
            // Executa todas as querys do arquivo
            $conn->multi_query($codigo_sql);

            // Limpa os resultados do SQL (Necessário pra multi_query funcionar)
            do {
                if ($result = $conn->store_result()) {
                    $result->free();
                }
            } while ($conn->more_results() && $conn->next_result());
            // Limpa os resultados do SQL (Necessário pra multi_query funcionar)
            do {
                if ($result = $conn->store_result()) {
                    $result->free();
                }
            } while ($conn->more_results() && $conn->next_result());

            if (!$conn->error) {
                // Seleciona o banco de dados
                $conn->select_db($bd);
            } else {
                // Caso algum erro ocorra na importação
                die("Erro na importação: " . $conn->error);
            }
        } else {
            // Caso o arquivo .sql não seja encontrado
            die("Erro na conexão: Arquivo para importar o banco não encontrado!");
        }
    } 
            if (!$conn->error) {
                // Seleciona o banco de dados
                $conn->select_db($bd);
            } else {
                // Caso algum erro ocorra na importação
                die("Erro na importação: " . $conn->error);
            }
        } else {
            // Caso o arquivo .sql não seja encontrado
            die("Erro na conexão: Arquivo para importar o banco não encontrado!");
        }
    } 

if ($conn->connect_error) {
    // Caso algum erro aconteça na conexão
    die("Erro na conexão: " . $conn->connect_error);
}