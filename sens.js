// ========== VARIABLES ==========
let usaDPI = 'si';
let usaBotonGrande = 'si';
let versionJuego = 'normal';

// ========== CAMBIAR PESTAÑA ==========
function cambiarPestana(nombre) {
    document.querySelectorAll('.pestana').forEach(p => p.classList.remove('activa'));
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    event.currentTarget.classList.add('activa');
    if(nombre === 'sensi') document.getElementById('secSensi').classList.add('activa');
    else document.getElementById('secFFPro').classList.add('activa');
}

// ========== SENSIBILIDAD ==========
function selDPI(opcion) {
    usaDPI = opcion;
    dpiSi.classList.toggle('activo', opcion === 'si');
    dpiNo.classList.toggle('activo', opcion === 'no');
    campoDPI.classList.toggle('oculto', opcion === 'no');
    calcular();
}

function selBoton(opcion) {
    usaBotonGrande = opcion;
    botonSi.classList.toggle('activo', opcion === 'si');
    botonNo.classList.toggle('activo', opcion === 'no');
    calcular();
}

function getConfig(marca) {
    switch(marca) {
        case 'iphone':     return {g:92, r:88, x2:84, x4:78, f:50, c:65, boton: '48% - 52%'};
        case 'samsung':   return {g:96, r:93, x2:88, x4:83, f:52, c:68, boton: '52% - 56%'};
        case 'xiaomi':    return {g:98, r:95, x2:90, x4:86, f:54, c:70, boton: '54% - 58%'};
        case 'motorola':  return {g:95, r:92, x2:87, x4:82, f:51, c:67, boton: '50% - 54%'};
        case 'huawei':    return {g:94, r:91, x2:86, x4:81, f:50, c:66, boton: '50% - 53%'};
        case 'oppo':      return {g:97, r:94, x2:89, x4:84, f:53, c:69, boton: '53% - 57%'};
        case 'vivo':      return {g:96, r:93, x2:88, x4:83, f:52, c:68, boton: '52% - 56%'};
        default:          return {g:95, r:92, x2:87, x4:82, f:51, c:67, boton: '50% - 55%'};
    }
}

function calcular() {
    const marca = dispositivo.value;
    let s = getConfig(marca);
    const dpi = parseInt(valorDPI.value) || 480;

    if (usaDPI === 'si') {
        const dif = (dpi - 480) / 100;
        s.g += dif * 2.5;
        s.r += dif * 2;
        s.x2 += dif * 1.5;
        s.x4 += dif * 1.2;
        s.c += dif * 1.8;
    } else {
        s.g -= 4; s.r -= 3; s.x2 -= 2; s.x4 -= 2; s.c -= 3;
    }

    if (usaBotonGrande === 'no') { s.g += 5; s.r += 4; s.c += 3; }

    for(let k of ['g','r','x2','x4','f','c']) s[k] = Math.max(1, Math.min(100, Math.round(s[k])));

    vGeneral.textContent = s.g;
    vRojo.textContent = s.r;
    vX2.textContent = s.x2;
    vX4.textContent = s.x4;
    vFran.textContent = s.f;
    vCam.textContent = s.c;
    tamañoBoton.textContent = s.boton;
}

// ========== FF PRO ==========
function selVersion(v) {
    versionJuego = v;
    vNormal.classList.toggle('activo', v==='normal');
    vMax.classList.toggle('activo', v==='max');
}

function toggleSwitch(sw) {
    sw.classList.toggle('activo');
}

function generarConfig() {
    const llamadas = swLlamadas.classList.contains('activo');
    const notif = swNotif.classList.contains('activo');
    const gpu = swGPU.classList.contains('activo');
    const render = swRender.classList.contains('activo');
    const proxy = swProxy.classList.contains('activo');
    const bateria = swBateria.classList.contains('activo');
    const graficos = swGraficos.classList.contains('activo');

    let texto = `<strong>🎮 Free Fire ${versionJuego.toUpperCase()}</strong><br><br>`;

    if(llamadas) texto += `📵 Bloquear llamadas → Activado ✅<br>`;
    if(notif) texto += `🔇 Sin notificaciones → Activado ✅<br>`;
    if(gpu) texto += `🎨 Aceleración GPU → Activado ✅<br>`;
    if(render) texto += `⚡ Renderizado GPU → Activado ✅<br>`;
    if(proxy) texto += `📶 FF Proxy / Optimización red → Activado ✅<br>`;
    if(bateria) texto += `🔋 Ahorro de batería al jugar → Activado ✅<br>`;
    if(graficos) texto += `📺 Resolución y gráficos optimizados → Activado ✅<br>`;
    texto += `<br>`;

    texto += `<strong>📋 Pasos para activar:</strong><br>`;
    if(gpu || render) texto += `1️⃣ Ajustes > Opciones de Desarrollador → Activar aceleración hardware<br>`;
    if(llamadas) texto += `2️⃣ Ajustes del teléfono → Modo No Molestar durante el juego<br>`;
    if(notif) texto += `3️⃣ Ajustes del teléfono → Ocultar notificaciones en pantalla<br>`;
    if(bateria) texto += `4️⃣ Ajustes del teléfono → Batería → Modo rendimiento / Sin restricciones<br>`;
    if(graficos) texto += `5️⃣ En Free Fire: Gráficos en SUAVE y FPS ALTO<br>`;
    if(proxy) texto += `6️⃣ En Free Fire: Ajustes > Red → Modo conexión ESTABLE<br>`;
    texto += `<br>✅ ¡Listo! Tu Free Fire irá más fluido, sin lag y sin interrupciones.`;

    configPro.innerHTML = texto;
}

// ========== INICIO ==========
window.onload = calcular;
