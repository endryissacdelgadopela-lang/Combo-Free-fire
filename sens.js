// PANEL SENSI PRO - SISTEMA COMPLETO CON PASO A PASO DE SUPRESOR Y MONEDAS
let usuarioRegistrado = false;
let monedas = 0;

// Variables de control del juego
let gamePuntos = 0;
let gameTiempo = 15;
let gameInterval = null;

// Base de datos de sensibilidad y configuraciones de accesibilidad por dispositivo
const baseDatos = {
    samsung: {
        "A10 / A12 / A14": { 
            gen: "98%", red: "95%", m2: "92%", m4: "90%", bot: "48%", dpi: "580 DPI",
            guia: "1. Activa <b>Click al parar puntero (Supresor)</b> y ponlo al mínimo (0.2s).<br>2. Sube la <b>Velocidad del Puntero</b> al máximo.<br>3. En Retraso de Pulsar y Mantener, selecciona <b>Corto (0.5s)</b>."
        },
        "A21s / A22 / A23": { 
            gen: "96%", red: "92%", m2: "88%", m4: "86%", bot: "52%", dpi: "600 DPI",
            guia: "1. Ve a Accesibilidad > Interacción y activa <b>Click al parar el puntero</b> en 0.2s.<br>2. Sube la <b>Velocidad de desplazamiento</b> al máximo.<br>3. Activa Marco de Puntero grande."
        },
        "A32 / A52 / A54": { 
            gen: "94%", red: "89%", m2: "85%", m4: "82%", bot: "45%", dpi: "640 DPI",
            guia: "1. Activa <b>Sensibilidad táctil</b> en los ajustes de pantalla.<br>2. Configura el <b>Tiempo de Permanencia (Supresor)</b> en 0.2s.<br>3. Pon la Velocidad del Puntero al máximo."
        },
        "S20 / S21 / S22 / S23": { 
            gen: "90%", red: "85%", m2: "80%", m4: "78%", bot: "42%", dpi: "Por defecto",
            guia: "1. Asegúrate de tener la pantalla en <b>120Hz</b>.<br>2. Activa <b>Click al parar puntero</b> en 0.2s.<br>3. Mantén la velocidad de puntero 2 puntos antes del máximo para no perder control."
        }
    },
    xiaomi: {
        "Redmi 9 / 10 / 12": { 
            gen: "99%", red: "96%", m2: "94%", m4: "91%", bot: "50%", dpi: "550 DPI",
            guia: "1. Abre <b>Game Turbo</b> > Ajustes adicionales > Pon la respuesta táctil al máximo.<br>2. En Accesibilidad, activa <b>Tiempo de permanencia</b> en 0.2s.<br>3. Pon el cursor de ratón grande."
        },
        "Redmi Note 10 / 11 / 12": { 
            gen: "95%", red: "91%", m2: "87%", m4: "85%", bot: "47%", dpi: "620 DPI",
            guia: "1. En <b>Game Turbo</b> pon la sensibilidad a toques continuos al máximo.<br>2. Activa el <b>Supresor (Tiempo de permanencia)</b> al mínimo.<br>3. Sube la velocidad del puntero al 100%."
        },
        "Poco X3 Pro / X4 / X5": { 
            gen: "92%", red: "88%", m2: "84%", m4: "80%", bot: "44%", dpi: "580 DPI",
            guia: "1. Sube la tasa de refresco a <b>120Hz</b>.<br>2. En Game Turbo, reduce el área resistente a los toques a 'Ninguna'.<br>3. Activa Tiempo de permanencia en 0.2s."
        }
    },
    motorola: {
        "Moto G8 / G9 / G10": { 
            gen: "97%", red: "93%", m2: "90%", m4: "88%", bot: "52%", dpi: "590 DPI",
            guia: "1. Ve a Accesibilidad > <b>Tiempo de permanencia</b> y déjalo en 0.2s.<br>2. Ajusta la <b>Velocidad del Puntero</b> al máximo.<br>3. Pon la escala de animación de la ventana en 0.5x."
        },
        "Moto G30 / G50 / G60": { 
            gen: "94%", red: "90%", m2: "86%", m4: "83%", bot: "48%", dpi: "610 DPI",
            guia: "1. Ajusta el <b>Retraso al mantener pulsado</b> en Corto.<br>2. Activa el Supresor (Click al parar puntero) al mínimo.<br>3. Sube el tamaño de fuente un nivel más pequeño."
        }
    },
    apple: {
        "iPhone 8 / X / XR / 11": { 
            gen: "90%", red: "84%", m2: "79%", m4: "75%", bot: "40%", dpi: "Cursor: 120",
            guia: "1. Ve a Accesibilidad > <b>Control por Botón</b> > Cursores deslizante en <b>Refinado (120)</b>.<br>2. En Loop ponlo en 10.<br>3. En AssistiveTouch, pon la Sensibilidad de seguimiento al máximo."
        },
        "iPhone 12 / 13 / 14 / 15": { 
            gen: "88%", red: "82%", m2: "76%", m4: "72%", bot: "38%", dpi: "Cursor: 120",
            guia: "1. En <b>Control por Botón</b> usa modo Refinado en 120.<br>2. En AssistiveTouch, pon la Tolerancia al movimiento al máximo.<br>3. Mantén las Adaptaciones Táctiles desactivadas."
        }
    },
    zte: {
        "Modelos ZTE / Tecno / Infinix": { 
            gen: "100%", red: "97%", m2: "95%", m4: "93%", bot: "55%", dpi: "500 DPI",
            guia: "1. En Accesibilidad, activa <b>Click al parar el puntero (Supresor)</b> al máximo o 0.2s según permita el sistema.<br>2. Aumenta la velocidad del puntero al máximo."
        }
    },
    generic: {
        "Gama Baja / Estándar": { 
            gen: "100%", red: "98%", m2: "95%", m4: "92%", bot: "50%", dpi: "560 DPI",
            guia: "1. Desactiva todas las animaciones desde Opciones de Desarrollador.<br>2. Activa el Supresor / Tiempo de permanencia al mínimo.<br>3. Sube la velocidad del puntero al 100%."
        }
    }
};

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

function actualizarModelos() {
    const brandSelect = document.getElementById("brandSelect");
    const modelSelect = document.getElementById("modelSelect");
    const marca = brandSelect.value;

    modelSelect.innerHTML = '<option value="">-- Selecciona Modelo --</option>';

    if (marca && baseDatos[marca]) {
        modelSelect.disabled = false;
        for (let modelo in baseDatos[marca]) {
            let option = document.createElement("option");
            option.value = modelo;
            option.innerText = modelo;
            modelSelect.appendChild(option);
        }
    } else {
        modelSelect.disabled = true;
    }
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
    alert("¡Registro exitoso! Te hemos entregado +100 Monedas.");
}

function generarConfig() {
    const marca = document.getElementById("brandSelect").value;
    const modelo = document.getElementById("modelSelect").value;

    if (!marca || !modelo) {
        alert("Selecciona la marca y el modelo de tu dispositivo.");
        return;
    }

    const item = baseDatos[marca][modelo];

    document.getElementById("txtModoTitulo").innerText = "🎯 " + modelo.toUpperCase();
    document.getElementById("vGen").innerText = item.gen;
    document.getElementById("vMira1").innerText = item.red;
    document.getElementById("vMira2").innerText = item.m2;
    document.getElementById("vMira4").innerText = item.m4;
    document.getElementById("vBoton").innerText = item.bot;
    document.getElementById("vDpi").innerText = item.dpi;
    document.getElementById("txtGuiaAjustes").innerHTML = item.guia;

    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// MINIJUEGO
function abrirMinijuego() {
    document.getElementById("minijuegoModal").style.display = "flex";
    resetJuegoUI();
}

function cerrarMinijuego() {
    clearInterval(gameInterval);
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

    const maxLeft = area.clientWidth - 55;
    const maxTop = area.clientHeight - 55;

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

    alert("¡Tiempo finalizado! Anotaste " + gamePuntos + " puntos y conseguiste +" + monedasGanadas + " Monedas.");
}
