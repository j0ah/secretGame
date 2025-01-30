let numeroSecretoAdivinar = 0;
let intentos = 0;
let maximoIntento = 5;

function intentoUsuario(elementoHTML, content) {
    let elemento = document.querySelector(elementoHTML);
    elemento.innerHTML = content;
}

function numeroSecreto() {
    return Math.floor(Math.random() * 10 + 1)
}

function condicionesIniciales() {
    intentoUsuario("h1", "Juego del número secreto.");
    intentoUsuario("p", "Esto es un juego donde tú, deberás adivinar el número oculto.")
    numeroSecretoAdivinar = numeroSecreto();
    intentos = 1;
}

condicionesIniciales();

function verificarIntento() {
    let numeroDelJugador = parseInt(document.getElementById("intentoDelJugador").value);
    if (numeroDelJugador === numeroSecretoAdivinar) {
        intentoUsuario("p", "Acertaste!")
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó.
        if(numeroSecretoAdivinar > numeroDelJugador) {
            intentoUsuario("p", `El número es Mayor, llevas ${intentos} ${intentos === 1 ? "intento." : "intentos."}`)
        } else {
            intentoUsuario("p", `El número es Menor, llevas ${intentos} ${intentos === 1 ? "intento." : "intentos."}`)
        }
        intentos++;   
        limpiar();
    }
}

let limpiar = () => {
    document.getElementById("intentoDelJugador").value = "";
}

function reiniciarJuego() {
    // Limpiar
    limpiar();
    // Indicar los intervalos de nuevo de Números
    // Generar de nuevo Número Aleatorio
    // Intentos
    condicionesIniciales();
    // Deshabilitar el botón de Nuevo Juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}
