function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetGame() {
    const targetColor = getRandomColor();
    document.getElementById("targetColor").textContent = targetColor;
    const colorOptions = document.getElementById("colorOptions");
    colorOptions.innerHTML = '';

    for (let i = 0; i < 6; i++) {
        const option = document.createElement("div");
        option.className = "color-option";
        const optionColor = getRandomColor();
        option.style.backgroundColor = optionColor;
        option.addEventListener("click", function () {
            checkColor(optionColor, targetColor);
        });
        colorOptions.appendChild(option);
    }

    document.getElementById("message").textContent = '';
    document.getElementById("newColorButton").textContent = "New Color";
}

function checkColor(selectedColor, targetColor) {
    if (selectedColor === targetColor) {
        document.getElementById("message").textContent = "Correct!";
        document.getElementById("newColorButton").textContent = "Play Again?";
    } else {
        document.getElementById("message").textContent = "Try Again";
    }
}

resetGame();

document.getElementById("newColorButton").addEventListener("click", resetGame);