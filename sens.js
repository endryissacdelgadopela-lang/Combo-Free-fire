// Variable que guarda la opción elegida por el jugador
let modoSeleccionado = 'alta';

// 1. SIMULADOR DE CARGA PROFESIONAL DE SERVIDOR (PASO 1)
function iniciarCargaServidor() {
    const playerID = document.getElementById("inputPlayerID").value.trim();
    
    if (playerID === "" || playerID.length < 5) {
        alert("⚠️ Por favor, escribe un ID de Free Fire válido para enlazar.");
        return;
    }
    
    // Desactivar botón y mostrar la animación hacker de carga
    document.getElementById("btnVerificar").style.display = "none";
    const loadingBox = document.getElementById("loadingBox");
    const fill = document.getElementById("progressBarFill");
    const textLog = document.getElementById("loadingText");
    
    loadingBox.style.display = "block";
    
    let porcentaje = 0;
    const frases = [
        "Localizando base de datos...",
        "Buscando ID en los servidores...",
        "Inyectando 5 tokens de aniversario...",
        "Validando maquillaje Prime...",
        "Finalizando inyección exitosa!"
    ];
    
    const interval = setInterval(() => {
        porcentaje += 2;
        fill.style.width = porcentaje + "%";
        
        // Cambiar texto dinámicamente según avance
        if (porcentaje < 25) textLog.innerText = frases[0];
        else if (porcentaje < 50) textLog.innerText = frases[1];
        else if (porcentaje < 75) textLog.innerText = frases[2];
        else if (porcentaje < 90) textLog.innerText = frases[3];
        else textLog.innerText = frases[4];
        
        if (porcentaje >= 100) {
            clearInterval(interval);
            // Cuando termina la carga, abre directo el aviso de éxito de los regalos
            document.getElementById("modalRegalo").style.display = "flex";
        }
    }, 60); // Ajuste de velocidad de carga fluida
}

// Desbloquea la interfaz limpia de la Sensi (Paso 2)
function desbloquearSensiPanel() {
    document.getElementById("modalRegalo").style.display = "none";
    document.getElementById("pantalla-id").style.display = "none";
    document.getElementById("pantalla-sensi").style.display = "block";
}

// 2. INTERRUPTOR DE ESTADOS DE BOTONES TÁCTILES
function cambiarModo(modo) {
    modoSeleccionado = modo;
    
    // Remover clases activas de todos
    document.getElementById("btn-alta").classList.remove("active");
    document.getElementById("btn-precision").classList.remove("active");
    document.getElementById("btn-baja").classList.remove("active");
    
    // Encender el que se presionó
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("active");
    } else if (modo === 'precision') {
        document.getElementById("btn-precision").classList.add("active");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("active");
    }
}

// 3. CALCULADOR MATEMÁTICO AVANZADO DEL PASO 2
function generarConfig() {
    const dispositivo = document.getElementById("selectDispositivo").value;
    const tipoArma = document.getElementById("selectArma").value;
    const usaDpi = document.getElementById("selectDpi").value;
    
    let general, puntoRojo, mira2, mira4, franco, camara, dpi, botonDisparo;
    let titulo = "";

    // Rangos de calibración por algoritmo base
    if (modoSeleccionado === 'alta') {
        titulo = "🔥 MODE: FULL ROJO (ALTA)";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      
        puntoRojo = Math.floor(Math.random() * (99 - 95 + 1)) + 95;     
        mira2 = Math.floor(Math.random() * (100 - 97 + 1)) + 97;
        mira4 = Math.floor(Math.random() * (99 - 94 + 1)) + 94;
        dpi = Math.floor(Math.random() * (750 - 640 + 1)) + 640;        
        botonDisparo = Math.floor(Math.random() * (42 - 35 + 1)) + 35;  
    } 
    else if (modoSeleccionado === 'precision') {
        titulo = "🎯 MODE: ALTA PRECISIÓN";
        general = Math.floor(Math.random() * (94 - 89 + 1)) + 89;       
        puntoRojo = Math.floor(Math.random() * (88 - 82 + 1)) + 82;     
        mira2 = Math.floor(Math.random() * (93 - 88 + 1)) + 88;
        mira4 = Math.floor(Math.random() * (91 - 86 + 1)) + 86;
        dpi = Math.floor(Math.random() * (560 - 480 + 1)) + 480;
        botonDisparo = Math.floor(Math.random() * (52 - 44 + 1)) + 44;  
    } 
    else if (modoSeleccionado === 'baja') {
        titulo = "📉 MODE: CONTROL BALÍSTICO";
        general = Math.floor(Math.random() * (85 - 77 + 1)) + 77;       
        puntoRojo = Math.floor(Math.random() * (80 - 74 + 1)) + 74;
        mira2 = Math.floor(Math.random() * (84 - 76 + 1)) + 76;
        mira4 = Math.floor(Math.random() * (82 - 75 + 1)) + 75;
        dpi = Math.floor(Math.random() * (460 - 390 + 1)) + 390;
        botonDisparo = Math.floor(Math.random() * (58 - 48 + 1)) + 48;  
    }

    // Adaptaciones avanzadas por tipo de arma seleccionada
    if (tipoArma === 'smg') {
        puntoRojo = Math.min(100, puntoRojo + 2);
        botonDisparo = Math.max(34, botonDisparo - 3); 
    } else if (tipoArma === 'escopeta') {
        general = Math.max(78, general - 3);
        botonDisparo = Math.min(58, botonDisparo + 5); 
    }

    // Compensación física de pantalla
    if (dispositivo === 'ios') {
        general = Math.max(75, general - 4);
        botonDisparo = Math.max(35, botonDisparo - 2);
    } else if (dispositivo === 'emulador') {
        general = Math.floor(general * 0.43);
        puntoRojo = Math.floor(puntoRojo * 0.51);
        mira2 = Math.floor(mira2 * 0.56);
        mira4 = Math.floor(mira4 * 0.56);
    }

    franco = Math.floor(Math.random() * (28 - 15 + 1)) + 15;
    camara = Math.floor(Math.random() * (95 - 76 + 1)) + 76;

    // Colocar datos en las tarjetas
    document.getElementById("txtModoTitulo").innerText = titulo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // REGLA CRÍTICA EXIGIDA: Si elige "No DPI", se oculta la tarjeta entera de la pantalla
    const cardDpi = document.getElementById("cardDpi");
    if (usaDpi === "no") {
        cardDpi.style.display = "none";
    } else {
        cardDpi.style.display = "block";
        document.getElementById("vDpi").innerText = dpi;
    }

    // Desplegar modal final de resultados
    document.getElementById("resultadoModal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Bloquear cierre si tocan por error afuera del recuadro
window.onclick = function(event) {
    const mRes = document.getElementById("resultadoModal");
    if (event.target == mRes) { cerrarModal(); }
        }
