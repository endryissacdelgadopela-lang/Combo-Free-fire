// PANEL SENSI PRO - SISTEMA DE MONEDAS Y MINIJUEGO POR ENDRY
let modoSeleccionado = 'alta';
let usuarioRegistrado = false;
let monedas = 0;

// Variables del minijuego
let gamePuntos = 0;
let gameTiempo = 15;
let gameInterval = null;
let targetTimeout = null;

// Cargar datos al iniciar la página
window.onload = function() {
    let userGuardado = localStorage.getItem("usuario_sensi");
    let monedasGuardadas = localStorage.getItem("monedas_sensi");

    if (userGuardado) {
        usuarioRegistrado = true;
        monedas = parseInt(monedasGuardadas) || 100;
        document.getElementById("txtUsuario").innerText = "👤 " + userGuardado;
        document.getElementById("txtMonedas").innerText = "🪙 " + monedas + " Monedas";
        document.getElementById("btnAbrirReg").style.display = "none";
    }
};

function cambiarModo(modo) {
    modoSeleccionado = modo;
    document.getElementById("btn-alta").classList.remove("active");
    document.getElementById("btn-baja").classList.remove("active");
    document.getElementById("btn-pro").classList.remove("active");

    if (modo === 'alta') document.getElementById("btn-alta").classList.add("active");
    if (modo === 'baja') document.getElementById("btn-baja").classList.add("active");
    if (modo === 'pro') document.getElementById("btn-pro").classList.add("active");
}

function abrirRegistro() {
    document.getElementById("registroModal").style.display = "flex";
}

function cerrarRegistro() {
    document.getElementById("registroModal").style.display = "none";
}

function confirmarRegistro() {
    let nombre = document.getElementById("regNombre").value.trim();
    if (nombre === "") {
        alert("Ingresa un nombre de usuario válido.");
        return;
    }

    usuarioRegistrado = true;
    monedas = 100;

    localStorage.setItem("usuario_sensi", nombre);
    localStorage.setItem("monedas_sensi", monedas);

    document.getElementById("txtUsuario").innerText = "👤 " + nombre;
    document.getElementById("txtMonedas").innerText = "🪙 " + monedas + " Monedas";
    document.getElementById("btnAbrirReg").style.display = "none";

    cerrarRegistro();
    alert("¡Registro exitoso! Has recibido +100 Monedas.");
}

function generarConfig() {
    let general, puntoRojo, mira2, mira4, boton, dpi, titulo;

    if (modoSeleccionado === 'alta') {
        titulo = "⚡ SENSIBILIDAD ALTA";
        general = "98%";
        puntoRojo = "95%";
        mira2 = "96%";
        mira4 = "94%";
        boton = "38%";
        dpi = "650";
    } else if (modoSeleccionado === 'baja') {
        titulo = "🛡️ SENSIBILIDAD BAJA";
        general = "80%";
        puntoRojo = "75%";
        mira2 = "78%";
        mira4 = "76%";
        boton = "50%";
        dpi = "Por defecto";
    } else if (modoSeleccionado === 'pro') {
        titulo = "🎯 SENSIBILIDAD PROFESIONAL";
        general = "92%";
        puntoRojo = "88%";
        mira2 = "90%";
        mira4 = "87%";
        boton = "42%";
        dpi = "550";
    }

    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general;
    document.getElementById("vMira1").innerText = puntoRojo;
    document.getElementById("vMira2").innerText = mira2;
    document.getElementById("vMira4").innerText = mira4;
    document.getElementById("vBoton").innerText = boton;
    document.getElementById("vDpi").innerText = dpi;

    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Funciones del minijuego
function abrirMinijuego() {
    document.getElementById("minijuegoModal").style.display = "flex";
    resetJuegoUI();
}

function cerrarMinijuego() {
    clearInterval(gameInterval);
    clearTimeout(targetTimeout);
    document.getElementById("minijuegoModal").style.display = "none";
}

function resetJuegoUI() {
    gamePuntos = 0;
    gameTiempo = 15;
    document.getElementById("gameScore").innerText = gamePuntos;
    document.getElementById("gameTimer").innerText = gameTiempo;
    document.getElementById("btnStartGame").style.display = "block";
    document.getElementById("target").style.display = "none";
}

function iniciarJuego() {
    gamePuntos = 0;
    gameTiempo = 15;
    document.getElementById("gameScore").innerText = gamePuntos;
    document.getElementById("gameTimer").innerText = gameTiempo;
    document.getElementById("btnStartGame").style.display = "none";

    moverDiana();

    gameInterval = setInterval(function() {
        gameTiempo--;
        document.getElementById("gameTimer").innerText = gameTiempo;

        if (gameTiempo <= 0) {
            finalizarJuego();
        }
    }, 1000);
}

function moverDiana() {
    const area = document.getElementById("gameArea");
    const target = document.getElementById("target");

    const maxLeft = area.clientWidth - 60;
    const maxTop = area.clientHeight - 60;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    target.style.left = randomLeft + "px";
    target.style.top = randomTop + "px";
    target.style.display = "block";
}

function hitTarget() {
    gamePuntos += 10;
    document.getElementById("gameScore").innerText = gamePuntos;
    moverDiana();
}

function finalizarJuego() {
    clearInterval(gameInterval);
    document.getElementById("target").style.display = "none";
    document.getElementById("btnStartGame").style.display = "block";

    let monedasGanadas = Math.floor(gamePuntos / 2);
    monedas += monedasGanadas;

    localStorage.setItem("monedas_sensi", monedas);
    document.getElementById("txtMonedas").innerText = "🪙 " + monedas + " Monedas";

    alert("¡Tiempo agotado! Hiciste " + gamePuntos + " puntos y ganaste +" + monedasGanadas + " Monedas.");
}

