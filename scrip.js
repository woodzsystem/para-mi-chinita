// Lista de frases
const frases = [
    "\"Eres mi momento favorito del día.\"",
    "\"Me encanta la forma en que sonríes.\"",
    "\"En esta y en las otras vidad t vuelvo a elegir.\"",
    "\"Gracias por ser mi lugar seguro y mi mejor compañía.\"",
    "\"No hay nada que me haga cambiar lo que siento por ti.\""
];

let indiceFrase = 0;

function siguienteFrase() {
    indiceFrase = (indiceFrase + 1) % frases.length;
    document.getElementById("texto-frase").innerText = frases[indiceFrase];
}

document.querySelector(".carta").addEventListener("click", function() {
    this.classList.toggle("abierta");
});
const contenedorCorazones = document.getElementById('corazones');
if (contenedorCorazones) {
    const emojis = ['💖', '💗', '💜', '💕', '🌸'];
    for (let i = 0; i < 18; i++) {
        const c = document.createElement('span');
        c.className = 'corazon';
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.left = Math.random() * 100 + '%';
        c.style.fontSize = (14 + Math.random() * 22) + 'px';
        c.style.animationDuration = (8 + Math.random() * 10) + 's';
        c.style.animationDelay = (Math.random() * 10) + 's';
        contenedorCorazones.appendChild(c);
    }
}