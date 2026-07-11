let modoSeleccionado = 'alta';

// Alternar entre los dos modos principales
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

// Generar valores matemáticos de Sensi de inmediato
function generarConfig() {
    let general, puntoRojo, mira2, mira4, franco, camara, botonDisparo;
    let titulo = "";

    if (modoSeleccionado === 'alta') {
        titulo = "🔷 BLUE: ALTA SENSIBILIDAD";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      
        puntoRojo = Math.floor(Math.random() * (99 - 95 + 1)) + 95;     
        mira2 = Math.floor(Math.random() * (100 - 97 + 1)) + 97;
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35;  
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "🔷 BLUE: SENSIBILIDAD BAJA";
        general = Math.floor(Math.random() * (85 - 77 + 1)) + 77;       
        puntoRojo = Math.floor(Math.random() * (80 - 74 + 1)) + 74;
        mira2 = Math.floor(Math.random() * (84 - 76 + 1)) + 76;
        mira4 = Math.floor(Math.random() * (82 - 75 + 1)) + 75;
        botonDisparo = Math.floor(Math.random() * (58 - 48 + 1)) + 48;  
    }

    franco = Math.floor(Math.random() * (28 - 15 + 1)) + 15;
    camara = Math.floor(Math.random() * (95 - 76 + 1)) + 76;

    // Asignar los valores calculados a las tarjetas
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // Mostrar ventana flotante de resultados
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
}
