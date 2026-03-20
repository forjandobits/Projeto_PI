import {listarFuncionarios, exibiInformacoes, desligarFuncionario} from './funcoes.js';

document.addEventListener('DOMContentLoaded', function(){
    // const params = new URLSearchParams(window.location.search);
    // const id = params.get("id");
    
    listarFuncionarios();
    exibiInformacoes();
    desligarFuncionario();
});