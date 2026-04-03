// enviar():
// Parâmetros:
// - local: string -> caminho/url do arquivo que deve receber a requisição.
// - dados: json -> todos os dados que o arquivo em local precisa pra funcionar.
// Retorno:
// - resultado: json -> json que o arquivo em local deve enviar de volta como resposta da requisição.
export async function enviar(local, dados) {
    // Envia requisição para local
    const resposta = await fetch(local, {
        // Com o método POST
        method: "POST",
        // Usando esse headers para garantir que o PHP vai entender
        headers: {"Content-Type": "application/json"},
        // Dados como JSON
        body: JSON.stringify(dados)
    });

    // Espera a resposta e pega só o JSON
    const resultado = await resposta.json();

    // Retorna o JSON da resposta
    return await resultado;
}
