# Mudanças feitas

#### teste.html
- Dentro do main temos lado a lado os containers "aside" e "div id='main-teste'"
- Dentro de "div id='main-teste'" temos o header e o article que representa o conteúdo principal do site

A primeira escolha foi feita para que o aside parasse de sobrepor o restante do componente e ficasse ao lado do conteúdo principal.
A segunda escolha serve para que o header e o conteúdo principal fiquem um abaixo do outro sem ficarem embaixo da sidebar.

#### teste.css
- Adição das seguintes regras ao main:
    - flex-direction: row; - Define direção do container.
    - width: 100%; - Define que ele deve cobrir toda largura da tela.

- Criação do ID de teste "#main-teste" com as regras:
    - display: flex;
    - flex-direction: column;
    - flex: 1 1 0; - Define que o elemento de ID "#main-teste" deve receber todo o espaço livre na tela.
    - min-width: 0; - Define que esse container não deve ter nenhum tamanho mínimo.

#### sidebar.css
- Mudanças em .sidebar:
    - Remoção de "width: 60px;" e "z-index: 1000;" - Faz a sidebar não sobrepor os demais elementos.
    - Adição de "flex: 0 0 3.5%;" e "min-width: 60px" - Essa regra substitui o width e fala que ela não deve receber nenhum espaço do que estiver sobrando.

- Mudanças em .sidebar.open:
    - Remoção de "width: 300px;"
    - Adição de "flex: 0 0 17%;" - Substitui a regra acima porém dizendo que o sidebar não deve receber espaço extra

# Mudanças necessarias para adotar no projeto

- 1° - O container main deve ter um fluxo em linha (flex-direction: row).
- 2° - Deve existir um container que cerca o conteúdo principal e o header com fluxo em coluna (flex-direction: column).
- 3° - Devem ser modificadas as regras do sidebar para que ela não sobreponha os demais elementos porém fique ao lado do conteúdo principal.