// Estado global del modo seleccionado
let modoSeleccionado = 'alta';

// Función para cambiar los modos con respuesta táctil
function cambiarModo(modo) {
    modoSeleccionado = modo;
    
    // Resetear las clases activas
    document.getElementById("btn-alta").classList.remove("seleccionado");
    document.getElementById("btn-precision").classList.remove("seleccionado");
    document.getElementById("btn-baja").classList.remove("seleccionado");
    
    // Asignar estado activo al seleccionado
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("seleccionado");
    } else if (modo === 'precision') {
        document.getElementById("btn-precision").classList.add("seleccionado");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("seleccionado");
    }
}

// Generador de sensibilidades funcionales del meta actual
function generarConfig() {
    const dispositivo = document.getElementById("selectDispositivo").value;
    const usaDpi = document.getElementById("selectDpi").value;
    
    let general, puntoRojo, mira2, mira4, franco, camara, dpi, botonDisparo;
    let tituloModo = "";

    // 1. NUEVAS RANGOS DE PRECISIÓN SEGÚN EL MODO (9° ANIVERSARIO META)
    if (modoSeleccionado === 'alta') {
        tituloModo = "🔥 Sensi 9th: Full Rojo";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      // Sensibilidades súper altas (96-100)
        puntoRojo = Math.floor(Math.random() * (99 - 94 + 1)) + 94;     // Evita pasar por encima de la cabeza
        mira2 = Math.floor(Math.random() * (100 - 97 + 1)) + 97;
        mira4 = Math.floor(Math.random() * (98 - 95 + 1)) + 95;
        dpi = Math.floor(Math.random() * (780 - 640 + 1)) + 640;        // DPI modificado para levantar veloz
        botonDisparo = Math.floor(Math.random() * (43 - 36 + 1)) + 36;  // Botón ideal para SMG/Escopetas
    } 
    else if (modoSeleccionado === 'precision') {
        tituloModo = "🎯 Sensi 9th: Alta Precisión";
        general = Math.floor(Math.random() * (94 - 89 + 1)) + 89;       // Calibración para armas AR (Scar, Ak)
        puntoRojo = Math.floor(Math.random() * (88 - 82 + 1)) + 82;     // Disparos directos al casco
        mira2 = Math.floor(Math.random() * (94 - 88 + 1)) + 88;
        mira4 = Math.floor(Math.random() * (92 - 86 + 1)) + 86;
        dpi = Math.floor(Math.random() * (560 - 480 + 1)) + 480;
        botonDisparo = Math.floor(Math.random() * (50 - 45 + 1)) + 45;  // Botón equilibrado para no errar balas
    } 
    else if (modoSeleccionado === 'baja') {
        tituloModo = "📉 Sensi 9th: Control Estable";
        general = Math.floor(Math.random() * (85 - 76 + 1)) + 76;       
        puntoRojo = Math.floor(Math.random() * (80 - 72 + 1)) + 72;
        mira2 = Math.floor(Math.random() * (84 - 76 + 1)) + 76;
        mira4 = Math.floor(Math.random() * (82 - 74 + 1)) + 74;
        dpi = Math.floor(Math.random() * (440 - 390 + 1)) + 390;
        botonDisparo = Math.floor(Math.random() * (56 - 49 + 1)) + 49;  // Botón ancho para tiros consistentes
    }

    // 2. MODIFICACIONES SEGÚN DISPOSITIVO (Balanceo de aceleración nativa)
    if (dispositivo === 'ios') {
        // En iOS el táctil responde más rápido, se reduce la sensibilidad general un poco para compensar
        general = Math.max(78, general - 4);
        botonDisparo = Math.max(36, botonDisparo - 2);
    } else if (dispositivo === 'emulador') {
        // Re-ajuste extremo obligatorio para punteros de mouse en emulador
        general = Math.floor(general * 0.42);
        puntoRojo = Math.floor(puntoRojo * 0.50);
        mira2 = Math.floor(mira2 * 0.55);
        mira4 = Math.floor(mira4 * 0.55);
    }

    // Ajustes estándar y dinámicos para miras pesadas (Franco y Cámara)
    franco = Math.floor(Math.random() * (32 - 14 + 1)) + 14;
    camara = Math.floor(Math.random() * (92 - 76 + 1)) + 76;

    // 3. INYECTAR RESULTADOS AL MODAL FLOATING
    document.getElementById("txtModoTitulo").innerText = tituloModo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // 4. REGLA DE SEGURIDAD DEL DPI: Si marca "no", se esconde la fila por completo de la app
    const filaDpi = document.getElementById("filaDpi");
    if (usaDpi === "no") {
        filaDpi.style.display = "none";
    } else {
        filaDpi.style.display = "flex";
        document.getElementById("vDpi").innerText = dpi;
    }

    // Abrir ventana flotante
    document.getElementById("resultadoModal").style.display = "flex";
}

// Apagar ventana flotante
function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Cerrar si tocan la zona borrosa exterior del modal
window.onclick = function(event) {
    const modal = document.getElementById("resultadoModal");
    if (event.target == modal) { cerrarModal(); }
}    franco = Math.floor(Math.random() * (35 - 15 + 1)) + 15;
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
