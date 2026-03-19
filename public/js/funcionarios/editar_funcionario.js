import {exibiInformacoes2} from './funcoes.js';

document.addEventListener('DOMContentLoaded', ()=>{
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id)

    if(id != null){
        exibiInformacoes2(id);
        console.log('Recebeu id')
    }
})