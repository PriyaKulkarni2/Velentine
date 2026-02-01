const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");

/* Move button safely inside container */
function moveButton() {
    const containerRect = buttons.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

/* 🧠 Cursor proximity detection */
document.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();

    const btnX = btnRect.left + btnRect.width / 2;
    const btnY = btnRect.top + btnRect.height / 2;

    const distance = Math.hypot(e.clientX - btnX, e.clientY - btnY);

    if (distance < 120) {
        moveButton();
    }
});

/* 📱 Mobile finger detection */
document.addEventListener("touchmove", () => {
    moveButton();
});

/* 🚫 Absolute safety: disable click */
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", () => {
    buttons.style.display = "none";
    result.classList.remove("hidden");
});
