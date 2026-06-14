// Variable global para guardar el modo seleccionado (por defecto 'alta')
let modoSeleccionado = 'alta';

function cambiarModo(modo, boton) {
    modoSeleccionado = modo;
    // Desmarcar todos los botones de modo
    document.querySelectorAll('.btn-modo').forEach(btn => btn.classList.remove('seleccionado'));
    // Marcar el botón presionado
    boton.classList.add('seleccionado');
}

function generarConfig() {
    const dispositivo = document.getElementById("selectDispositivo").value;
    const usaDpi = document.getElementById("selectDpi").value;
    
    // Variables base para el cálculo
    let general, puntoRojo, mira2, mira4, franco, camara, dpi, botonDisparo;
    let tituloModo = "";

    // 1. AJUSTES SEGÚN EL MODO SELECCIONADO (Matemática de tiro)
    if (modoSeleccionado === 'alta') {
        tituloModo = "⚡ MODO FULL ROJO (ALTA)";
        general = Math.floor(Math.random() * (100 - 95 + 1)) + 95;      // 95 - 100
        puntoRojo = Math.floor(Math.random() * (98 - 92 + 1)) + 92;    // 92 - 98
        mira2 = Math.floor(Math.random() * (100 - 96 + 1)) + 96;        // 96 - 100
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;         // 94 - 99
        dpi = Math.floor(Math.random() * (720 - 580 + 1)) + 580;       // DPI alto para mover rápido
        botonDisparo = Math.floor(Math.random() * (45 - 38 + 1)) + 38;  // Botón pequeño para alzar más rápido
    } 
    else if (modoSeleccionado === 'precision') {
        tituloModo = "🎯 MODO ALTA PRECISIÓN";
        general = Math.floor(Math.random() * (92 - 86 + 1)) + 86;       // 86 - 92 (Más controlado)
        puntoRojo = Math.floor(Math.random() * (88 - 80 + 1)) + 80;     // Evita que tiemble sobre el casco
        mira2 = Math.floor(Math.random() * (92 - 85 + 1)) + 85; 
        mira4 = Math.floor(Math.random() * (90 - 84 + 1)) + 84; 
        dpi = Math.floor(Math.random() * (510 - 440 + 1)) + 440;       // DPI equilibrado
        botonDisparo = Math.floor(Math.random() * (52 - 47 + 1)) + 47;  // Botón mediano para no errar balas
    } 
    else if (modoSeleccionado === 'baja') {
        tituloModo = "📉 MODO SENSIBILIDAD BAJA";
        general = Math.floor(Math.random() * (82 - 74 + 1)) + 74; 
        puntoRojo = Math.floor(Math.random() * (78 - 70 + 1)) + 70; 
        mira2 = Math.floor(Math.random() * (80 - 72 + 1)) + 72; 
        mira4 = Math.floor(Math.random() * (78 - 70 + 1)) + 70; 
        dpi = Math.floor(Math.random() * (410 - 360 + 1)) + 360; 
        botonDisparo = Math.floor(Math.random() * (58 - 50 + 1)) + 50;  // Botón grande
    }

    // 2. MODIFICACIONES FINALES SEGÚN EL DISPOSITIVO (Balanceo)
    if (dispositivo === 'ios') {
        // iOS es más sensible nativo, reducimos un poco las barras generales
        general = Math.max(70, general - 4);
        botonDisparo = Math.max(35, botonDisparo - 3);
    } else if (dispositivo === 'emulador') {
        // En PC las miras se usan muchísimo más bajas
        general = Math.floor(general * 0.5);
        puntoRojo = Math.floor(puntoRojo * 0.6);
        mira2 = Math.floor(mira2 * 0.65);
        mira4 = Math.floor(mira4 * 0.65);
    }

    // Valores fijos estándares estables para Francotirador y Cámara
    franco = Math.floor(Math.random() * (35 - 18 + 1)) + 18;
    camara = Math.floor(Math.random() * (90 - 70 + 1)) + 70;

    // 3. INYECTAR LOS DATOS EN EL VISOR FLOANTE
    document.getElementById("txtModoTitulo").innerText = tituloModo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // 🔥 REGLA CORREGIDA DE TU LEDGER: Validar el estado del DPI
    const filaDpi = document.getElementById("filaDpi");
    if (usaDpi === "no") {
        filaDpi.style.display = "none"; // Desaparece la fila por completo si marca No DPI
    } else {
        filaDpi.style.display = "flex"; // Se muestra normalmente
        document.getElementById("vDpi").innerText = dpi;
    }

    // Mostrar el modal flotante
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Cerrar si tocan fuera del recuadro oscuro
window.onclick = function(event) {
    const modal = document.getElementById("resultadoModal");
    if (event.target == modal) { cerrarModal(); }
          }
