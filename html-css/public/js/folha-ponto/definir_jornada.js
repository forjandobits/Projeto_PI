document.addEventListener('DOMContentLoaded', () => {

    const modal = document.querySelector("#modal");
    btnAbrir = document.querySelector(".abrir-modal");

    btnAbrir.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.computedStyleMap.display = "block";
        })
        
    });


        

})
