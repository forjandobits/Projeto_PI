As funções criadas em eventos_pagamentos.js foram feitas para as seguintes operações:

#
# criarEventos();

A função permite adicionar dinamicamente novos elementos à página, elementos esses que compõe o lançamento de novas informações necessárias para a confecção da folha de pagamentos, essas são por exemplo, proventos e descontos do funcionário;

#
# removerEventos();

A função permite remover os elementos criados na página, elementos esses que não compõe o lançamento de uma folha de pagamentos;

#
# listarNomes();

Procura todos os nome das pessoas que existem em um array de dados, criado ou retornado do banco de dados. Atua em colaboração com da função de buscarNome() para retornar todos aqueles que tem os caracteres inseridos no input de texto; 

#
# buscarNome(valor);

## (parâmetro) - valor inserido no input para buscar os elementos necessários.

Filtra todos os elementos que contém o valor que será recebido como parâmetro e retorna um array com todos os dados necessários para compor a informação;

#
# selecionarNome();

Após a listagem dos nomes você pode selecionar o item que deseja, com evento de click. Ao executar a selecão do item a lista será fechada e o nome selecionado irá aparecer no input;

#