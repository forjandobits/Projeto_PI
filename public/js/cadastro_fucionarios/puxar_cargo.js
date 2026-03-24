document.getElementById("cargo").addEventListener("change", function() {
    let selected = this.options[this.selectedIndex];

    document.getElementById("cbo").value = selected.dataset.cbo || "";
    document.getElementById("regime").value = selected.dataset.regime || "";
    document.getElementById("remuneracao").value = selected.dataset.remuneracao || "";
});