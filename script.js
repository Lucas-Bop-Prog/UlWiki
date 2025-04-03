document.addEventListener("DOMContentLoaded", function () {
    console.log("📢 DOM completamente cargado.");

    // Referencia al input de búsqueda
    const searchInput = document.querySelector(".searchInput, .searchInputB");

    if (!searchInput) {
        console.error("❌ No se encontró el elemento searchInput en el HTML.");
        return;
    } else {
        console.log("✅ searchInput encontrado.");
    }

    // Lista de términos y sus URLs asociadas
    const searchResults = {
        "cristiano ronaldo": "results/Cristiano Ronaldo.html",
        "lionel messi": "results/Lionel Messi.html",
        "computercraft": "Results/ComputerCraft.html",
        "python": "Results/Python.html",
        "chatgpt": "Results/ChatGPT.html"
    };

    // Evento para detectar "Enter" y redirigir
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let filter = searchInput.value.toLowerCase().trim();
            console.log("🔎 Buscando:", filter);

            if (searchResults[filter]) {
                let basePath = window.location.pathname.toLowerCase().includes("/results/") ? "../" : "";
                let url = basePath + searchResults[filter];

                console.log("✅ Redirigiendo a:", url);
                window.location.href = url;
            } else {
                console.log("⚠️ No se encontró ningún resultado.");
                alert("⚠️ No se encontró ningún resultado.");
            }
        }
    });
});
