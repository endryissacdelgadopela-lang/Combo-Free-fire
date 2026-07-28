// Cambio de pestañas
const tabSensi = document.getElementById('tabSensi');
const tabProxy = document.getElementById('tabProxy');
const seccionSensi = document.getElementById('seccionSensi');
const seccionProxy = document.getElementById('seccionProxy');

tabSensi.addEventListener('click', () => {
    tabSensi.classList.add('bg-primary', 'shadow-lg', 'shadow-red-600/30');
    tabProxy.classList.remove('bg-primary', 'shadow-lg', 'shadow-red-600/30');
    seccionSensi.classList.remove('hidden');
    seccionProxy.classList.add('hidden');
});

tabProxy.addEventListener('click', () => {
    tabProxy.classList.add('bg-primary', 'shadow-lg', 'shadow-red-600/30');
    tabSensi.classList.remove('bg-primary', 'shadow-lg', 'shadow-red-600/30');
    seccionProxy.classList.remove('hidden');
    seccionSensi.classList.add('hidden');
});

// Botones DPI y Botón Disparo
const dpiSi = document.getElementById('dpiSi');
const dpiNo = document.getElementById('dpiNo');
const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');

dpiSi.addEventListener('click', () => {
    dpiSi.classList.add('bg-primary');
    dpiSi.classList.remove('bg-gray-700');
    dpiNo.classList.remove('bg-primary');
    dpiNo.classList.add('bg-gray-700');
});

dpiNo.addEventListener('click', () => {
    dpiNo.classList.add('bg-primary');
    dpiNo.classList.remove('bg-gray-700');
    dpiSi.classList.remove('bg-primary');
    dpiSi.classList.add('bg-gray-700');
});

botonSi.addEventListener('click', () => {
    botonSi.classList.add('bg-primary');
    botonSi.classList.remove('bg-gray-700');
    botonNo.classList.remove('bg-primary');
    botonNo.classList.add('bg-gray-700');
});

botonNo.addEventListener('click', () => {
    botonNo.classList.add('bg-primary');
    botonNo.classList.remove('bg-gray-700');
    botonSi.classList.remove('bg-primary');
    botonSi.classList.add('bg-gray-700');
});

// Actualizar valores en tiempo real
const actualizarValor = (idRango, idTexto) => {
    const rango = document.getElementById(idRango);
    const texto = document.getElementById(idTexto);
    texto.textContent = rango.value;
};

document.getElementById('puntRojo').addEventListener('input', () => actualizarValor('puntRojo', 'puntRojoValor'));
document.getElementById('mira2').addEventListener('input', () => actualizarValor('mira2', 'mira2Valor'));
document.getElementById('mira4').addEventListener('input', () => actualizarValor('mira4', 'mira4Valor'));
document.getElementById('franco').addEventListener('input', () => actualizarValor('franco', 'francoValor'));
document.getElementById('camara').addEventListener('input', () => actualizarValor('camara', 'camaraValor'));

// Cargar configuración TODO ROJO
document.getElementById('btnCargar').addEventListener('click', () => {
    document.getElementById('puntRojo').value = 100;
    document.getElementById('mira2').value = 98;
    document.getElementById('mira4').value = 95;
    document.getElementById('franco').value = 90;
    document.getElementById('camara').value = 100;
    
    actualizarValor('puntRojo', 'puntRojoValor');
    actualizarValor('mira2', 'mira2Valor');
    actualizarValor('mira4', 'mira4Valor');
    actualizarValor('franco', 'francoValor');
    actualizarValor('camara', 'camaraValor');
    
    alert('✅ Configuración TODO ROJO cargada con éxito!');
});

// Copiar ajustes
document.getElementById('btnCopiar').addEventListener('click', () => {
    const dispositivo = document.getElementById('dispositivo').value;
    const dpi = document.getElementById('valorDpi').value || 'No usado';
    const boton = document.getElementById('tamBoton').value || 'No configurado';
    
    const texto = `
📌 CONFIGURACIÓN TODO ROJO - FREE FIRE
📱 Dispositivo: ${dispositivo.toUpperCase()}
🔍 Mira Punto Rojo: ${document.getElementById('puntRojo').value}
🔭 Mira x2: ${document.getElementById('mira2').value}
🔭 Mira x4: ${document.getElementById('mira4').value}
🎯 Mira Francotirador: ${document.getElementById('franco').value}
📸 Cámara 360: ${document.getElementById('camara').value}
⚙️ DPI: ${dpi}
🔘 Botón Disparo: ${boton}%
🔥 Créditos: Endry + Dola
    `.trim();

    navigator.clipboard.writeText(texto)
        .then(() => alert('✅ Ajustes copiados al portapapeles!'))
        .catch(() => alert('❌ Error al copiar'));
});

// Interruptores FF PROXY
document.querySelectorAll('[id^="opcion"]').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('bg-primary');
        this.classList.toggle('bg-gray-700');
        const circulo = this.querySelector('span');
        circulo.classList.toggle('left-1');
        circulo.classList.toggle('left-7');
    });
});
