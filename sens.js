let usaDPI = 'si';
let usaBotonGrande = 'si';

// Seleccionar DPI
function selDPI(opcion) {
    usaDPI = opcion;
    dpiSi.classList.toggle('activo', opcion==='si');
    dpiNo.classList.toggle('activo', opcion==='no');
    campoDPI.classList.toggle('oculto', opcion==='no');
    calcular();
}

// Seleccionar botón
function selBoton(opcion) {
    usaBotonGrande = opcion;
    botonSi.classList.toggle('activo', opcion==='si');
    botonNo.classList.toggle('activo', opcion==='no');
    calcular();
}

// Base según dispositivo
function getBase(marca) {
    switch(marca) {
        case 'iphone':     return {g:92, r:88, x2:84, x4:78, f:50, c:65};
        case 'samsung':   return {g:96, r:93, x2:88, x4:83, f:52, c:68};
        case 'xiaomi':    return {g:98, r:95, x2:90, x4:86, f:54, c:70};
        case 'motorola':   return {g:95, r:92, x2:87, x4:82, f:51, c:67};
        case 'huawei':    return {g:94, r:91, x2:86, x4:81, f:50, c:66};
        case 'oppo':      return {g:97, r:94, x2:89, x4:84, f:53, c:69};
        case 'vivo':      return {g:96, r:93, x2:88, x4:83, f:52, c:68};
        default:          return {g:95, r:92, x2:87, x4:82, f:51, c:67};
    }
}

function calcular() {
    const marca = dispositivo.value;
    let s = getBase(marca);
    const dpi = parseInt(valorDPI.value) || 480;

    // Ajuste por DPI
    if (usaDPI === 'si') {
        const dif = (dpi - 480) / 100;
        s.g += dif * 2.5;
        s.r += dif * 2;
        s.x2 += dif * 1.5;
        s.x4 += dif * 1.2;
        s.c += dif * 1.8;
    } else {
        s.g -= 4;
        s.r -= 3;
        s.x2 -= 2;
        s.x4 -= 2;
        s.c -= 3;
    }

    // Ajuste por botón de disparo
    if (usaBotonGrande === 'no') {
        s.g += 5;
        s.r += 4;
        s.c += 3;
    }

    // Limitar entre 1 y 100
    for(let k in s) s[k] = Math.max(1, Math.min(100, Math.round(s[k])));

    // Mostrar
    vGeneral.textContent = s.g;
    vRojo.textContent = s.r;
    vX2.textContent = s.x2;
    vX4.textContent = s.x4;
    vFran.textContent = s.f;
    vCam.textContent = s.c;
}

window.onload = calcular;
