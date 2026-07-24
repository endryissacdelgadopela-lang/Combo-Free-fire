// Base de datos de sensibilidades según la gama seleccionada
const sensibilidades = {
    baja: {
        general: "100",
        reddot: "98",
        scope2x: "95",
        scope4x: "90",
        sniper: "50",
        freelook: "65"
    },
    media: {
        general: "95",
        reddot: "90",
        scope2x: "85",
        scope4x: "80",
        sniper: "45",
        freelook: "50"
    },
    alta: {
        general: "88",
        reddot: "82",
        scope2x: "78",
        scope4x: "72",
        sniper: "40",
        freelook: "40"
    }
};

// Función para actualizar los valores en la vista cuando cambia el selector
function actualizarSensibilidad() {
    const seleccion = document.getElementById("device").value;
    const datos = sensibilidades[seleccion];

    document.getElementById("general").innerText = datos.general;
    document.getElementById("reddot").innerText = datos.reddot;
    document.getElementById("scope2x").innerText = datos.scope2x;
    document.getElementById("scope4x").innerText = datos.scope4x;
    document.getElementById("sniper").innerText = datos.sniper;
    document.getElementById("freelook").innerText = datos.freelook;
}

// Función para copiar la configuración al portapapeles
function copiarConfiguracion() {
    const gen = document.getElementById("general").innerText;
    const red = document.getElementById("reddot").innerText;
    const s2x = document.getElementById("scope2x").innerText;
    const s4x = document.getElementById("scope4x").innerText;
    const snp = document.getElementById("sniper").innerText;
    const cam = document.getElementById("freelook").innerText;
    
    const texto = `🔥 Sensibilidad Free Fire 🔥\n` +
                  `• General: ${gen}\n` +
                  `• Punto Rojo: ${red}\n` +
                  `• Mira 2x: ${s2x}\n` +
                  `• Mira 4x: ${s4x}\n` +
                  `• Francotirador: ${snp}\n` +
                  `• Cámara 360: ${cam}`;
    
    navigator.clipboard.writeText(texto).then(() => {
        alert("¡Configuración copiada al portapapeles!");
    }).catch(err => {
        console.error("Error al copiar: ", err);
    });
}
