// Variable global para almacenar el modo seleccionado (inicia en 'alta')
let modoSeleccionado = 'alta';

// Función para cambiar de modo de forma visual y guardar la opción
function cambiarModo(modo) {
    modoSeleccionado = modo;
    
    // Quitamos la clase 'seleccionado' de los tres botones para reiniciarlos
    document.getElementById("btn-alta").classList.remove("seleccionado");
    document.getElementById("btn-precision").classList.remove("seleccionado");
    document.getElementById("btn-baja").classList.remove("seleccionado");
    
    // Le agregamos el color activo solo al botón que presionó el usuario
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("seleccionado");
    } else if (modo === 'precision') {
        document.getElementById("btn-precision").classList.add("seleccionado");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("seleccionado");
    }
}

// Función principal conectada al botón "Generar Sensibilidad"
function generarConfig() {
    const dispositivo = document.getElementById("selectDispositivo").value;
    const usaDpi = document.getElementById("selectDpi").value;
    
    let general, puntoRojo, mira2, mira4, franco, camara, dpi, botonDisparo;
    let tituloModo = "";

    // 1. CÁLCULOS MATEMÁTICOS DE ACUERDO AL MODO DE JUEGO SELECCIONADO
    if (modoSeleccionado === 'alta') {
        tituloModo = "⚡ MODO FULL ROJO";
        general = Math.floor(Math.random() * (100 - 95 + 1)) + 95;      // Genera entre 95% y 100%
        puntoRojo = Math.floor(Math.random() * (98 - 93 + 1)) + 93;    // Genera entre 93% y 98%
        mira2 = Math.floor(Math.random() * (100 - 95 + 1)) + 95;
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;
        dpi = Math.floor(Math.random() * (760 - 620 + 1)) + 620;       // DPI rápido de levantar
        botonDisparo = Math.floor(Math.random() * (44 - 37 + 1)) + 37;  // Botón pequeño
    } 
    else if (modoSeleccionado === 'precision') {
        tituloModo = "🎯 MODO ALTA PRECISIÓN";
        general = Math.floor(Math.random() * (93 - 87 + 1)) + 87;       // Entre 87% y 93% para fijar la mira
        puntoRojo = Math.floor(Math.random() * (89 - 81 + 1)) + 81;     // Menor para evitar el temblequeo
        mira2 = Math.floor(Math.random() * (92 - 86 + 1)) + 86;
        mira4 = Math.floor(Math.random() * (91 - 85 + 1)) + 85;
        dpi = Math.floor(Math.random() * (540 - 460 + 1)) + 460;       // DPI equilibrado
        botonDisparo = Math.floor(Math.random() * (52 - 46 + 1)) + 46;  // Botón mediano
    } 
    else if (modoSeleccionado === 'baja') {
        tituloModo = "📉 MODO SENSIBILIDAD BAJA";
        general = Math.floor(Math.random() * (83 - 75 + 1)) + 75;       // Movimientos sumamente estables
        puntoRojo = Math.floor(Math.random() * (79 - 71 + 1)) + 71;
        mira2 = Math.floor(Math.random() * (82 - 74 + 1)) + 74;
        mira4 = Math.floor(Math.random() * (80 - 72 + 1)) + 72;
        dpi = Math.floor(Math.random() * (420 - 370 + 1)) + 370;
        botonDisparo = Math.floor(Math.random() * (58 - 50 + 1)) + 50;  // Botón grande para tiros firmes
    }

    // 2. EQUILIBRIO EXTRA DEPENDIENDO DE LA PLATAFORMA
    if (dispositivo === 'ios') {
        // Los iPhones responden muy rápido por defecto, bajamos levemente el algoritmo
        general = Math.max(75, general - 3);
        botonDisparo = Math.max(36, botonDisparo - 2);
    } else if (dispositivo === 'emulador') {
        // Modificación drástica para las sensis de mouse en PC
        general = Math.floor(general * 0.45);
        puntoRojo = Math.floor(puntoRojo * 0.55);
        mira2 = Math.floor(mira2 * 0.60);
        mira4 = Math.floor(mira4 * 0.60);
    }

    // Constantes dinámicas estándar para la mira de Francotirador y la de Cámara de 360°
    franco = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
    camara = Math.floor(Math.random() * (95 - 75 + 1)) + 75;

    // 3. ENVIAR LOS RESULTADOS EN TIEMPO REAL A LA VENTANA FLOTANTE
    document.getElementById("txtModoTitulo").innerText = tituloModo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // 4. REGLA DE ORO DE TU PROYECTO: Si marca "No DPI", ocultar por completo la fila
    const filaDpi = document.getElementById("filaDpi");
    if (usaDpi === "no") {
        filaDpi.style.display = "none"; // Se esconde totalmente de la pantalla sin dejar rastro ni valores viejos
    } else {
        filaDpi.style.display = "flex"; // Reaparece ordenadamente si el usuario activa el DPI
        document.getElementById("vDpi").innerText = dpi;
    }

    // Abrir de forma limpia la interfaz flotante
    document.getElementById("resultadoModal").style.display = "flex";
}

// Función para apagar el visor flotante
function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Si el usuario da un toque fuera de la ventana, esta se cerrará automáticamente
window.onclick = function(event) {
    const modal = document.getElementById("resultadoModal");
    if (event.target == modal) { cerrarModal(); }
}
