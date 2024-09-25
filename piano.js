const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        playSound(note);
    });
});

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}
