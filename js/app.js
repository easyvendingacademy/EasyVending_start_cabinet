const modelCards = document.querySelectorAll(".model-card");

modelCards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Кабінет моделі відкриємо на наступному кроці");
    });
});
