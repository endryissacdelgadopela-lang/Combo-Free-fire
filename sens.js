// [[ ZENITSU SENSI SYSTEM - BY ENDRY ]]
let modoSeleccionado = 'alta';

function cambiarModo(modo) {
    modoSeleccionado = modo;
    document.getElementById("btn-alta").classList.remove("active", "custom-active", "zenitsu-active");
    document.getElementById("btn-baja").classList.remove("active", "custom-active", "zenitsu-active");
    document.getElementById("btn-zenitsu").classList.remove("active", "custom-active", "zenitsu-active");
    document.getElementById("btn-custom").classList.remove("active", "custom-active", "zenitsu-active");
    
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("active");
    } else if (modo === 'zenitsu') {
        document.getElementById("btn-zenitsu").classList.add("zenitsu-active");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("active");
    } else if (modo === 'custom') {
        document.getElementById("btn-custom").classList.add("custom-active");
    }
}

function generarConfig() {
    let general, puntoRojo, mira2, mira4, franco, camara, botonDisparo, dpi, puntero, supresor;
    let titulo = "";
    let cajaCons = document.getElementById("cajaConsecuencias");
    cajaCons.style.display = "none";

    if (modoSeleccionado === 'alta') {
        titulo = "⚡ DESTELLO RELÁMPAGO (ALTA)";
        general = Math.floor(Math.random() * (100 - 95 + 1)) + 95 + "%";      
        puntoRojo = Math.floor(Math.random() * (99 - 94 + 1)) + 94 + "%";     
        mira2 = Math.floor(Math.random() * (100 - 96 + 1)) + 96 + "%";
        mira4 = Math.floor(Math.random() * (99 - 93 + 1)) + 93 + "%";
        franco = Math.floor(Math.random() * (30 - 15 + 1)) + 15 + "%";
        camara = Math.floor(Math.random() * (95 - 75 + 1)) + 75 + "%";
        
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35 + "%";  
        dpi = Math.floor(Math.random() * (750 - 600 + 1)) + 600;
        puntero = "Máximo (+3)";
        supresor = "0.1s (Velocidad Extrema)";
    } 
    else if (modoSeleccionado === 'zenitsu') {
        titulo = "⚡ ZENITSU DORMIDO (GOD MODE)";
        general = "100%";      
        puntoRojo = "99%";     
        mira2 = "100%";
        mira4 = "98%";
        franco = "35%";
        camara = "98%";
        
        botonDisparo = "36%";  
        dpi = 780;
        puntero = "Ultra Rápido";
        supresor = "0.1s (Inconsciente)";
    }
    else if (modoSeleccionado === 'baja') {
        titulo = "🛡️ POSTURA DEFENSIVA (BAJA)";
        general = Math.floor(Math.random() * (85 - 75 + 1)) + 75 + "%";       
        puntoRojo = Math.floor(Math.random() * (80 - 70 + 1)) + 70 + "%";
        mira2 = Math.floor(Math.random() * (84 - 72 + 1)) + 72 + "%";
        mira4 = Math.floor(Math.random() * (82 - 70 + 1)) + 70 + "%";
        franco = Math.floor(Math.random() * (25 - 12 + 1)) + 12 + "%";
        camara = Math.floor(Math.random() * (85 - 70 + 1)) + 70 + "%";
        
        botonDisparo = Math.floor(Math.random() * (55 - 45 + 1)) + 45 + "%";  
        dpi = "Por Defecto";
        puntero = "Normal";
        supresor = "Desactivado";
    }
    else if (modoSeleccionado === 'custom') {
        titulo = "🛠️ MODO PERSONALIZADO (EN 0)";
        general = `<input type="number" id="inputGen" class="input-custom" value="0" oninput="analizarSensi()">`;
        puntoRojo = `<input type="number" id="inputRojo" class="input-custom" value="0" oninput="analizarSensi()">`;
        mira2 = `<input type="number" id="inputMira2" class="input-custom" value="0">`;
        mira4 = `<input type="number" id="inputMira4" class="input-custom" value="0">`;
        franco = `<input type="number" id="inputFranco" class="input-custom" value="0">`;
        camara = `<input type="number" id="inputCam" class="input-custom" value="0">`;
        
        botonDisparo = `<input type="number" id="inputBoton" class="input-custom" value="0" oninput="analizarSensi()"> %`;
        dpi = "Personalizado";
        puntero = "Libre";
        supresor = "Libre";

        cajaCons.style.display = "block";
        document.getElementById("txtConsecuencia").innerText = "Establece tus números. Si pones la General o el Botón muy altos o bajos, aquí verás el impacto en tus tiros.";
    }

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

    document.getElementById("resultadoModal").style.display = "flex";
}

function analizarSensi() {
    if (modoSeleccionado !== 'custom') return;
    
    let genVal = parseInt(document.getElementById("inputGen").value) || 0;
    let botonVal = parseInt(document.getElementById("inputBoton").value) || 0;
    let txt = "";

    if (genVal === 0 && botonVal === 0) {
        txt = "Valores en 0: El trueno está sellado. Sube los números para activar la velocidad.";
    } else if (genVal > 140) {
        txt = "⚠️ Consecuencia: General muy alta (+140). La mira volará sobre la cabeza del enemigo y fallarás los tiros de cerca.";
    } else if (genVal > 0 && genVal < 70) {
        txt = "⚠️ Consecuencia: General muy baja (-70). El movimiento será muy pesado y tardarás demasiado en levantar la mira.";
    } else {
        txt = "✅ Buen equilibrio en la sensibilidad general.";
    }

    if (botonVal > 60) {
        txt += " | ⚠️ Botón muy grande (+60): El área de tracción es corta y la mira se estancará en el pecho.";
    } else if (botonVal > 0 && botonVal < 35) {
        txt += " | ⚠️ Botón muy pequeño (-35): Alto riesgo de desliz en falso y levantamiento incorrecto.";
    }

    document.getElementById("txtConsecuencia").innerText = txt;
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
               }
