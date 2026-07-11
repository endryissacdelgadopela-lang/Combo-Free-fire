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
        titulo = "🔷 BLUE: ALTA SENSIBILIDAD";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      
        puntoRojo = Math.floor(Math.random() * (99 - 95 + 1)) + 95;     
        mira2 = Math.floor(Math.random() * (100 - 97 + 1)) + 97;
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;
        
        // Ajustes para levantar la mira rápido
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35;  
        dpi = Math.floor(Math.random() * (720 - 580 + 1)) + 580;
        puntero = "Al Máximo (+3)";
        supresor = "0.2 Segundos (Corto)";
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "🔷 BLUE: SENSIBILIDAD BAJA";
        general = Math.floor(Math.random() * (85 - 77 + 1)) + 77;       
        puntoRojo = Math.floor(Math.random() * (80 - 74 + 1)) + 74;
        mira2 = Math.floor(Math.random() * (84 - 76 + 1)) + 76;
        mira4 = Math.floor(Math.random() * (82 - 75 + 1)) + 75;
        
        // Ajustes para no pasar la mira por encima de la cabeza
        botonDisparo = Math.floor(Math.random() * (55 - 47 + 1)) + 47;  
        dpi = "Por Defecto (No DPI)";
        puntero = "Mitad / Estable";
        supresor = "Desactivado";
    }

    franco = Math.floor(Math.random() * (28 - 15 + 1)) + 15;
    camara = Math.floor(Math.random() * (95 - 76 + 1)) + 76;

    // Meter los datos en la interfaz
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    
    // Meter los ajustes recomendados extra
    document.getElementById("vBoton").innerText = botonDisparo + "%";
    document.getElementById("vDpi").innerText = dpi;
    document.getElementById("vPuntero").innerText = puntero;
    document.getElementById("vSupresor").innerText = supresor;

    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
}
