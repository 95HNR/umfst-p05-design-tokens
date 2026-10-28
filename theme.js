// theme.js - Témaváltó logika és villanásmentes betöltés

function alkalmazTema(valasztas) {
    const root = document.documentElement;
    if (valasztas === "rendszer") {
        root.removeAttribute("data-theme");
    } else {
        root.setAttribute("data-theme", valasztas);
    }
    localStorage.setItem("tema", valasztas);
}

// Azonnali futtatás a head-ben a CSS renderelés előtt a villanás elkerüléséért
(function () {
    const mentettTema = localStorage.getItem("tema") || "rendszer";
    alkalmazTema(mentettTema);
})();