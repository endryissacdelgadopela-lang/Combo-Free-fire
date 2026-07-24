// Variables globales
let usaDPI = 'si';
let usaBotonGrande = 'si';

// Seleccionar opción DPI
function seleccionarDPI(opcion) {
    usaDPI = opcion;
    document.getElementById('dpiSi').classList.remove('activo');
    document.getElementById('dpiNo').classList.remove('activo');
    if (opcion === 'si') {
        document.getElementById('dpiSi').classList.add('activo');
        document.getElementById('campoDPI').style.display = 'block';
    } else {
        document.getElementById('dpiNo').classList.add('activo');
        document.getElementById('campoDPI').style.display = 'none';
    }
}

// Seleccionar tipo de botón de disparo
function seleccionarBoton(opcion) {
    usaBotonGrande = opcion;
    document.getElementById('botonSi').classList.remove('activo');
    document.getElementById('botonNo').classList.remove('activo');
    if (opcion === 'si') {
        document.getElementById('botonSi').classList.add('activo');
    } else {
        document.getElementById('botonNo').classList.add('activo');
    }
}

// Función principal para calcular sensibilidad
function calcularSensibilidad() {
    const dispositivo = document.getElementById('dispositivo').value;
    const valorDPI = parseInt(document.getElementById('valorDPI').value) || 400;

    // Base de sensibilidad según dispositivo
    let base = { general: 95, mira: 90, x2: 85, x4: 80, francotirador: 50 };

    // Ajuste por gama
    if (dispositivo === 'bajo') {
        base = { general: 100, mira: 98, x2: 92, x4: 88, francotirador: 55 };
    } else if (dispositivo === 'alto') {
        base = { general: 88, mira: 85, x2: 80, x4: 75, francotirador: 45 };
    }

    // Ajuste por DPI
    if (usaDPI === 'si') {
        const ajusteDPI = (valorDPI - 400) / 100;
        base.general += ajusteDPI * 2;
        base.mira += ajusteDPI * 1.5;
        base.x2 += ajusteDPI * 1.2;
        base.x4 += ajusteDPI * 1;
    } else {
        // Sin DPI → reducir un poco
        base.general -= 3;
        base.mira -= 2;
        base.x2 -= 2;
        base.x4 -= 1;
    }

    // Ajuste por botón de disparo
    if (usaBotonGrande === 'no') {
        base.general += 4;
        base.mira += 3;
    }

    // Limitar valores entre 1 y 100
    for (let clave in base) {
        base[clave] = Math.max(1, Math.min(100, Math.round(base[clave])));
    }

    // Mostrar resultado
    document.getElementById('resultadoSens').innerHTML = `
        🎯 General: ${base.general}<br>
        🔴 Mira de Punto: ${base.mira}<br>
        🔭 Mira x2: ${base.x2}<br>
        🎯 Mira x4: ${base.x4}<br>
        💥 Francotirador: ${base.francotirador}
    `;
}

// Calcular al cargar la página
window.onload = calcularSensibilidad;
