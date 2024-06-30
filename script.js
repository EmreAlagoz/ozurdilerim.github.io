document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomButton');
    const normalbutton = document.getElementById('normalButton');
    const gameArea = document.getElementById('gameArea');
    const smileyContainer = document.getElementById('smileyContainer');

    button.addEventListener('mouseover', () => {
        const areaRect = gameArea.getBoundingClientRect();
        const maxX = areaRect.width - button.offsetWidth;
        const maxY = areaRect.height - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });

    normalbutton.addEventListener('click', () => {
        smileyContainer.innerHTML = '😍';
        smileyContainer.style.visibility = 'visible';
        setTimeout(() => {
            smileyContainer.style.visibility = 'hidden';
        }, 1000); // Gülücük emojisi 1 saniye boyunca görünecek
    });
});
