// [[ BLUE LOCK X DBZ SYSTEM - BY ENDRY ]]
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
        titulo = "💥 CÓDIGO ULTRA INSTINTO ACTIVO";
        general = Math.floor(Math.random() * (100 - 97 + 1)) + 97;      
        puntoRojo = Math.floor(Math.random() * (99 - 96 + 1)) + 96;     
        mira2 = Math.floor(Math.random() * (100 - 98 + 1)) + 98;
        mira4 = Math.floor(Math.random() * (99 - 95 + 1)) + 95;
        
        botonDisparo = Math.floor(Math.random() * (41 - 34 + 1)) + 34;  
        dpi = Math.floor(Math.random() * (750 - 620 + 1)) + 620;
        puntero = "Máximo Nivel (+3)";
        supresor = "0.1s (Velocidad Luz)";
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "⚡ PODER DIOS AZUL CONTROLADO";
        general = Math.floor(Math.random() * (86 - 78 + 1)) + 78;       
        puntoRojo = Math.floor(Math.random() * (82 - 75 + 1)) + 75;
        mira2 = Math.floor(Math.random() * (85 - 77 + 1)) + 77;
        mira4 = Math.floor(Math.random() * (83 - 76 + 1)) + 76;
        
        botonDisparo = Math.floor(Math.random() * (53 - 45 + 1)) + 45;  
        dpi = "Por Defecto (Sin DPI)";
        puntero = "Estable / Por Defecto";
        supresor = "Desactivado";
    }

    franco = Math.floor(Math.random() * (32 - 17 + 1)) + 17;
    camara = Math.floor(Math.random() * (96 - 79 + 1)) + 79;

    // Asignar los valores al modal flotante
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    
    // Inyectar configuraciones internas recomendadas
    document.getElementById("vBoton").innerText = botonDisparo + "%";
    document.getElementById("vDpi").innerText = dpi;
    document.getElementById("vPuntero").innerText = puntero;
    document.getElementById("vSupresor").innerText = supresor;

    // Lanzar el modal en pantalla
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
}
