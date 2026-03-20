# Banco de dados

*Sobre a divisão das branchs do banco de dados:*
- BD/bancodados - Branch oficial do banco de dados.
- BD/bancodadosAntigo - Branch antiga do banco de dados, mantida apenas para manter o historico porém foi substituida por conflitar com as demais branchs do projeto.
- BD/TEST/bancodados - Branch de testes do banco de dados.
- BE/readme - Branch pra atualizar o readme.
- 
--- 

*Sobre o banco de dados com dados de teste:*

Por padrão a conexão (contida em conexao.php) é feita com o banco sem dados (bd_humanamente.sql) para fazer uso do banco com dados basta alterar o valor da variável $bd para "bd_humanamente_dados" e o valor da variável $caminho_bd para "../banco-de-dados/bd_humanamente_dados.sql".