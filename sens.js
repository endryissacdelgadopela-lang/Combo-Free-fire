// [[ BLUE LOCK SENSI SYSTEM - BY ENDRY ]]
let modoSeleccionado = 'alta';

function cambiarModo(modo) {
    modoSeleccionado = modo;
    document.getElementById("btn-alta").classList.remove("active");
    document.getElementById("btn-baja").classList.remove("active");
    
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("active");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("active");
    }
}

function generarConfig() {
    let general, puntoRojo, mira2, mira4, franco, camara, botonDisparo, dpi, puntero, supresor;
    let titulo = "";

    if (modoSeleccionado === 'alta') {
        titulo = "⚽ MODO EGOÍSTA: ALTA SENSI";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      
        puntoRojo = Math.floor(Math.random() * (99 - 95 + 1)) + 95;     
        mira2 = Math.floor(Math.random() * (100 - 97 + 1)) + 97;
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;
        
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35;  
        dpi = Math.floor(Math.random() * (720 - 610 + 1)) + 610;
        puntero = "Al Máximo (Veloz)";
        supresor = "0.2s (Disparo Inmediato)";
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "⚽ MODO IMPERIAL: SENSI BAJA";
        general = Math.floor(Math.random() * (85 - 77 + 1)) + 77;       
        puntoRojo = Math.floor(Math.random() * (81 - 74 + 1)) + 74;
        mira2 = Math.floor(Math.random() * (84 - 76 + 1)) + 76;
        mira4 = Math.floor(Math.random() * (82 - 75 + 1)) + 75;
        
        botonDisparo = Math.floor(Math.random() * (54 - 46 + 1)) + 46;  
        dpi = "Por Defecto (Sin DPI)";
        puntero = "Predeterminada / Estable";
        supresor = "Desactivado";
    }

    franco = Math.floor(Math.random() * (30 - 16 + 1)) + 16;
    camara = Math.floor(Math.random() * (95 - 78 + 1)) + 78;

    // Colocar valores en el modal holográfico
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    
    // Ajustes recomendados de Free Fire
    document.getElementById("vBoton").innerText = botonDisparo + "%";
    document.getElementById("vDpi").innerText = dpi;
    document.getElementById("vPuntero").innerText = puntero;
    document.getElementById("vSupresor").innerText = supresor;

    // Mostrar modal en pantalla
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
}
