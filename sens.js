// [[ MEGA COLLAB SENSI SYSTEM - BY ENDRY ]]
let modoSeleccionado = 'zenitsu';

function cambiarModo(modo) {
    modoSeleccionado = modo;
    document.getElementById("btn-zenitsu").classList.remove("zenitsu-active", "bluelock-active", "dbz-active", "naruto-active", "custom-active");
    document.getElementById("btn-bluelock").classList.remove("zenitsu-active", "bluelock-active", "dbz-active", "naruto-active", "custom-active");
    document.getElementById("btn-dbz").classList.remove("zenitsu-active", "bluelock-active", "dbz-active", "naruto-active", "custom-active");
    document.getElementById("btn-naruto").classList.remove("zenitsu-active", "bluelock-active", "dbz-active", "naruto-active", "custom-active");
    document.getElementById("btn-custom").classList.remove("zenitsu-active", "bluelock-active", "dbz-active", "naruto-active", "custom-active");
    
    if (modo === 'zenitsu') {
        document.getElementById("btn-zenitsu").classList.add("zenitsu-active");
    } else if (modo === 'bluelock') {
        document.getElementById("btn-bluelock").classList.add("bluelock-active");
    } else if (modo === 'dbz') {
        document.getElementById("btn-dbz").classList.add("dbz-active");
    } else if (modo === 'naruto') {
        document.getElementById("btn-naruto").classList.add("naruto-active");
    } else if (modo === 'custom') {
        document.getElementById("btn-custom").classList.add("custom-active");
    }
}

function generarConfig() {
    let general, puntoRojo, mira2, mira4, franco, camara, botonDisparo, dpi, puntero, supresor;
    let titulo = "";
    let cajaCons = document.getElementById("cajaConsecuencias");
    cajaCons.style.display = "none";

    if (modoSeleccionado === 'zenitsu') {
        titulo = "⚡ ZENITSU: DESTELLO RELÁMPAGO";
        general = "100%";      
        puntoRojo = "98%";     
        mira2 = "100%";
        mira4 = "97%";
        franco = "25%";
        camara = "95%";
        
        botonDisparo = "38%";  
        dpi = 720;
        puntero = "Máxima (+3)";
        supresor = "0.1s (Corto)";
    } 
    else if (modoSeleccionado === 'bluelock') {
        titulo = "⚽ BLUE LOCK: MODO EGOÍSTA";
        general = Math.floor(Math.random() * (100 - 97 + 1)) + 97 + "%";      
        puntoRojo = Math.floor(Math.random() * (99 - 96 + 1)) + 96 + "%";     
        mira2 = Math.floor(Math.random() * (100 - 98 + 1)) + 98 + "%";
        mira4 = Math.floor(Math.random() * (99 - 95 + 1)) + 95 + "%";
        franco = Math.floor(Math.random() * (32 - 18 + 1)) + 18 + "%";
        camara = Math.floor(Math.random() * (96 - 80 + 1)) + 80 + "%";
        
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35 + "%";  
        dpi = Math.floor(Math.random() * (750 - 640 + 1)) + 640;
        puntero = "Ultra Rápido";
        supresor = "0.1s";
    }
    else if (modoSeleccionado === 'dbz') {
        titulo = "🔥 DBZ: MODO SUPER SAIYAN GOD";
        general = Math.floor(Math.random() * (96 - 90 + 1)) + 90 + "%";      
        puntoRojo = Math.floor(Math.random() * (95 - 89 + 1)) + 89 + "%";     
        mira2 = Math.floor(Math.random() * (96 - 90 + 1)) + 90 + "%";
        mira4 = Math.floor(Math.random() * (94 - 88 + 1)) + 88 + "%";
        franco = Math.floor(Math.random() * (28 - 16 + 1)) + 16 + "%";
        camara = Math.floor(Math.random() * (90 - 78 + 1)) + 78 + "%";
        
        botonDisparo = Math.floor(Math.random() * (46 - 40 + 1)) + 40 + "%";  
        dpi = Math.floor(Math.random() * (620 - 520 + 1)) + 520;
        puntero = "Media / Rápida";
        supresor = "0.2s";
    }
    else if (modoSeleccionado === 'naruto') {
        titulo = "🌀 NARUTO: MODO SABIO PRECISIÓN";
        general = Math.floor(Math.random() * (88 - 80 + 1)) + 80 + "%";       
        puntoRojo = Math.floor(Math.random() * (84 - 76 + 1)) + 76 + "%";
        mira2 = Math.floor(Math.random() * (86 - 78 + 1)) + 78 + "%";
        mira4 = Math.floor(Math.random() * (84 - 76 + 1)) + 76 + "%";
        franco = Math.floor(Math.random() * (25 - 15 + 1)) + 15 + "%";
        camara = Math.floor(Math.random() * (88 - 75 + 1)) + 75 + "%";
        
        botonDisparo = Math.floor(Math.random() * (52 - 44 + 1)) + 44 + "%";  
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
        txt = "Valores en 0: Configura tus números para calcular las consecuencias.";
    } else if (genVal > 140) {
        txt = "⚠️ Consecuencia: General muy alta (+140). La mira se sobrepasará de la cabeza (tiros volados).";
    } else if (genVal > 0 && genVal < 70) {
        txt = "⚠️ Consecuencia: General muy baja (-70). Se sentirá pesado para levantar la mira rápidamente.";
    } else {
        txt = "✅ Equilibrio estable en la sensibilidad general.";
    }

    if (botonVal > 60) {
        txt += " | ⚠️ Botón muy grande (+60): Poco espacio para deslizar el dedo hacia arriba.";
    } else if (botonVal > 0 && botonVal < 35) {
        txt += " | ⚠️ Botón muy pequeño (-35): Riesgo de toques fallidos al disparar.";
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
    
