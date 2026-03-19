import {exibiInformacoesEditar} from './funcoes.js';

document.addEventListener('DOMContentLoaded', ()=>{
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");


    if(id != null){
        exibiInformacoesEditar(id);
    
    }
})