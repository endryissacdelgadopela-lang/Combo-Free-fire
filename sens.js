// [[ SENSIBILITY SYSTEM - BY ENDRY ]]
let modoSeleccionado = 'alta';

function cambiarModo(modo) {
    modoSeleccionado = modo;
    document.getElementById("btn-alta").classList.remove("active", "custom-active");
    document.getElementById("btn-baja").classList.remove("active", "custom-active");
    document.getElementById("btn-custom").classList.remove("active", "custom-active");
    
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("active");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("active");
    } else if (modo === 'custom') {
        document.getElementById("btn-custom").classList.add("custom-active");
    }
}

function generarConfig() {
    let general, puntoRojo, mira2, mira4, franco, camara, botonDisparo, dpi, puntero, supresor;
    let titulo = "";

    if (modoSeleccionado === 'alta') {
        titulo = "⚽ BLUE LOCK / DBZ: FULL ROJO";
        general = Math.floor(Math.random() * (100 - 97 + 1)) + 97 + "%";      
        puntoRojo = Math.floor(Math.random() * (99 - 96 + 1)) + 96 + "%";     
        mira2 = Math.floor(Math.random() * (100 - 98 + 1)) + 98 + "%";
        mira4 = Math.floor(Math.random() * (99 - 95 + 1)) + 95 + "%";
        franco = Math.floor(Math.random() * (32 - 17 + 1)) + 17 + "%";
        camara = Math.floor(Math.random() * (96 - 79 + 1)) + 79 + "%";
        
        botonDisparo = Math.floor(Math.random() * (41 - 34 + 1)) + 34 + "%";  
        dpi = Math.floor(Math.random() * (750 - 620 + 1)) + 620;
        puntero = "Máximo (+3)";
        supresor = "0.1s (Corto)";
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "🌀 MODO SABIO: CONTROL TOTAL";
        general = Math.floor(Math.random() * (86 - 78 + 1)) + 78 + "%";       
        puntoRojo = Math.floor(Math.random() * (82 - 75 + 1)) + 75 + "%";
        mira2 = Math.floor(Math.random() * (85 - 77 + 1)) + 77 + "%";
        mira4 = Math.floor(Math.random() * (83 - 76 + 1)) + 76 + "%";
        franco = Math.floor(Math.random() * (28 - 15 + 1)) + 15 + "%";
        camara = Math.floor(Math.random() * (90 - 75 + 1)) + 75 + "%";
        
        botonDisparo = Math.floor(Math.random() * (53 - 45 + 1)) + 45 + "%";  
        dpi = "Por Defecto";
        puntero = "Normal";
        supresor = "Desactivado";
    }
    else if (modoSeleccionado === 'custom') {
        titulo = "🛠️ MODO PERSONALIZADO (EN 0)";
        // Coloca casillas editables con valor inicial en 0 para que el usuario escriba
        general = `<input type="number" class="input-custom" value="0">`;
        puntoRojo = `<input type="number" class="input-custom" value="0">`;
        mira2 = `<input type="number" class="input-custom" value="0">`;
        mira4 = `<input type="number" class="input-custom" value="0">`;
        franco = `<input type="number" class="input-custom" value="0">`;
        camara = `<input type="number" class="input-custom" value="0">`;
        
        botonDisparo = `<input type="number" class="input-custom" value="0"> %`;
        dpi = "A tu gusto";
        puntero = "Libre";
        supresor = "Libre";
    }

    // Insertar valores en el modal
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerHTML = general;
    document.getElementById("vMira1").innerHTML = puntoRojo;
    document.getElementById("vMira2").innerHTML = mira2;
    document.getElementById("vMira4").innerHTML = mira4;
    document.getElementById("vFranco").innerHTML = franco;
    document.getElementById("vCamara").innerHTML = camara;
    
    document.getElementById("vBoton").innerHTML = botonDisparo;
    document.getElementById("vDpi").innerText = dpi;
    document.getElementById("vPuntero").innerText = puntero;
    document.getElementById("vSupresor").innerText = supresor;

    // Mostrar el modal
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
        }
