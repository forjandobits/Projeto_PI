document.addEventListener('DOMContentLoaded', () => {

    // ================================
    // 🔵 PÁGINA: controle_ponto.php
    // ================================
    const btnJornada = document.querySelector(".jornada");

    if (btnJornada) {
        btnJornada.addEventListener("click", () => {
            window.location.href = "cadastro_jornada.php?abrirModal=1";
        });
    }


    // ================================
    // 🔵 PÁGINA: cadastro_jornada.php
    // ================================
    const modal = document.querySelector("#modal");
    const btnsAbrir = document.querySelectorAll(".abrir-modal");
    const btnFechar = document.querySelector(".fechar");

    // Só executa se existir modal na página
    if (modal) {

        // 🔹 Abrir modal (Adicionar / Editar)
        btnsAbrir.forEach(btn => {
            btn.addEventListener("click", () => {
                modal.style.display = "block";
            });
        });

        // 🔹 Fechar no X
        if (btnFechar) {
            btnFechar.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        // 🔹 Fechar clicando fora
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        // 🔥 Abrir automaticamente ao vir da outra página
        const params = new URLSearchParams(window.location.search);

        if (params.get("abrirModal") === "1") {
            modal.style.display = "block";

            // opcional: limpar URL
            window.history.replaceState({}, document.title, "cadastro_jornada.php");
        }
    }

});