// Modal
function openModal() {
    document.getElementById("termsModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("termsModal").style.display = "none";
}

function acceptTerms() {
    alert("¡Términos y condiciones aceptados!");
    closeModal();
}

window.onclick = function (event) {
    const modal = document.getElementById("termsModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Modo oscuro

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML =
                '<i class="bi bi-moon-stars-fill"></i> Modo Oscuro';
        }
    });
});
