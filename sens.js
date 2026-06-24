// Variable global del modo seleccionado
let modoSeleccionado = 'alta';

// 1. CONTROL DEL PASO 1 (INGRESO DE ID Y ALERTA DE PREMIOS)
function procesarVerificacion() {
    const idInput = document.getElementById("inputPlayerID").value.trim();
    
    if (idInput === "" || idInput.length < 5) {
        alert("⚠️ Por favor, ingresa un ID de Free Fire válido.");
        return;
    }
    
    // Si puso el ID correctamente, abrimos el aviso del regalo del 9° Aniversario
    document.getElementById("modalRegalo").style.display = "flex";
}

// Acción del botón del modal de regalo que desbloquea la sensi
function irAlPanelSensi() {
    // Cerramos el modal de regalos
    document.getElementById("modalRegalo").style.display = "none";
    
    // Escondemos la pantalla de ID por completo
    document.getElementById("pantalla-id").style.display = "none";
    
    // Hacemos aparecer el generador de sensibilidades profesional
    document.getElementById("pantalla-sensi").style.display = "block";
}

// 2. INTERRUPTOR DE BOTONES PARA EL MODO DE SENSIVILIDAD
function cambiarModo(modo) {
    modoSeleccionado = modo;
    
    document.getElementById("btn-alta").classList.remove("seleccionado");
    document.getElementById("btn-precision").classList.remove("seleccionado");
    document.getElementById("btn-baja").classList.remove("seleccionado");
    
    if (modo === 'alta') {
        document.getElementById("btn-alta").classList.add("seleccionado");
    } else if (modo === 'precision') {
        document.getElementById("btn-precision").classList.add("seleccionado");
    } else if (modo === 'baja') {
        document.getElementById("btn-baja").classList.add("seleccionado");
    }
}

// 3. GENERADOR DE SENSIBILIDADES PROFESIONAL
function generarConfig() {
    const dispositivo = document.getElementById("selectDispositivo").value;
    const usaDpi = document.getElementById("selectDpi").value;
    
    let general, puntoRojo, mira2, mira4, franco, camara, dpi, botonDisparo;
    let tituloModo = "";

    // Algoritmos calibrados profesionales para pegar más rojo en el Meta Actual
    if (modoSeleccionado === 'alta') {
        tituloModo = "⚡ 9th: FULL ROJO (ALTA)";
        general = Math.floor(Math.random() * (100 - 96 + 1)) + 96;      
        puntoRojo = Math.floor(Math.random() * (99 - 94 + 1)) + 94;     
        mira2 = Math.floor(Math.random() * (100 - 96 + 1)) + 96;
        mira4 = Math.floor(Math.random() * (98 - 94 + 1)) + 94;
        dpi = Math.floor(Math.random() * (760 - 640 + 1)) + 640;        
        botonDisparo = Math.floor(Math.random() * (44 - 36 + 1)) + 36;  
    } 
    else if (modoSeleccionado === 'precision') {
        tituloModo = "🎯 9th: ALTA PRECISIÓN";
        general = Math.floor(Math.random() * (94 - 88 + 1)) + 88;       
        puntoRojo = Math.floor(Math.random() * (89 - 83 + 1)) + 83;     
        mira2 = Math.floor(Math.random() * (93 - 87 + 1)) + 87;
        mira4 = Math.floor(Math.random() * (91 - 85 + 1)) + 85;
        dpi = Math.floor(Math.random() * (550 - 470 + 1)) + 470;
        botonDisparo = Math.floor(Math.random() * (51 - 44 + 1)) + 44;  
    } 
    else if (modoSeleccionado === 'baja') {
        tituloModo = "📉 9th: SENSI ESTABLE / BAJA";
        general = Math.floor(Math.random() * (84 - 76 + 1)) + 76;       
        puntoRojo = Math.floor(Math.random() * (81 - 73 + 1)) + 73;
        mira2 = Math.floor(Math.random() * (83 - 75 + 1)) + 75;
        mira4 = Math.floor(Math.random() * (81 - 73 + 1)) + 73;
        dpi = Math.floor(Math.random() * (450 - 380 + 1)) + 380;
        botonDisparo = Math.floor(Math.random() * (57 - 48 + 1)) + 48;  
    }

    // Adaptación física por plataforma
    if (dispositivo === 'ios') {
        general = Math.max(76, general - 3);
        botonDisparo = Math.max(35, botonDisparo - 2);
    } else if (dispositivo === 'emulador') {
        general = Math.floor(general * 0.44);
        puntoRojo = Math.floor(puntoRojo * 0.52);
        mira2 = Math.floor(mira2 * 0.58);
        mira4 = Math.floor(mira4 * 0.58);
    }

    franco = Math.floor(Math.random() * (30 - 14 + 1)) + 14;
    camara = Math.floor(Math.random() * (94 - 75 + 1)) + 75;

    // Renderizar al visor flotante
    document.getElementById("txtModoTitulo").innerText = tituloModo;
    document.getElementById("vGen").innerText = general + "%";
    document.getElementById("vMira1").innerText = puntoRojo + "%";
    document.getElementById("vMira2").innerText = mira2 + "%";
    document.getElementById("vMira4").innerText = mira4 + "%";
    document.getElementById("vFranco").innerText = franco + "%";
    document.getElementById("vCamara").innerText = camara + "%";
    document.getElementById("vBoton").innerText = botonDisparo + "%";

    // REGLA DE ORO: Validar "No DPI" para removerlo visualmente
    const filaDpi = document.getElementById("filaDpi");
    if (usaDpi === "no") {
        filaDpi.style.display = "none";
    } else {
        filaDpi.style.display = "flex";
        document.getElementById("vDpi").innerText = dpi;
    }

    // Desplegar modal de resultados
    document.getElementById("resultadoModal").style.display = "flex";
}

// Cerrar visor de sensibilidades
function cerrarModal() {
    document.getElementById("resultadoModal").style.display = "none";
}

// Si hacen clic fuera de la caja de resultados, se cierra solo
window.onclick = function(event) {
    const modalRes = document.getElementById("resultadoModal");
    if (event.target == modalRes) { cerrarModal(); }
        }
