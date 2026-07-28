// Mostrar y cambiar secciones
function mostrarSeccion(seccion) {
    const sensi = document.getElementById('seccionSensibilidad');
    const proxy = document.getElementById('seccionProxy');
    const tabSensi = document.getElementById('tabSensi');
    const tabProxy = document.getElementById('tabProxy');

    if(seccion === 'sensibilidad'){
        sensi.classList.remove('hidden');
        proxy.classList.add('hidden');
        tabSensi.classList.add('tab-active');
        tabSensi.classList.remove('text-gray-400');
        tabProxy.classList.remove('tab-active');
        tabProxy.classList.add('text-gray-400');
    } else {
        sensi.classList.add('hidden');
        proxy.classList.remove('hidden');
        tabProxy.classList.add('tab-active');
        tabProxy.classList.remove('text-gray-400');
        tabSensi.classList.remove('tab-active');
        tabSensi.classList.add('text-gray-400');
    }
}

// DPI
function toggleDpi() {
    const check = document.getElementById('usarDpi');
    const cont = document.getElementById('dpiContainer');
    cont.classList.toggle('hidden', !check.checked);
}

function actualizarDpi() {
    document.getElementById('dpiValor').textContent = document.getElementById('dpi').value;
}

// Actualizar valores de sensibilidad
function actualizarValor(tipo) {
    const valor = document.getElementById(tipo).value;
    document.getElementById(tipo+'Valor').textContent = valor;
}

function actualizarValorBoton() {
    document.getElementById('botonValor').textContent = document.getElementById('boton').value + '%';
}

// Cargar configuraciones por dispositivo
function cargarConfiguracion() {
    const disp = document.getElementById('dispositivo').value;
    let config = {};

    if(disp === 'iphone'){
        config = { rojo:95, x2:90, x4:85, sniper:50, camara:100, dpi:411, boton:48 };
    } else if(disp === 'android'){
        config = { rojo:98, x2:92, x4:88, sniper:55, camara:100, dpi:550, boton:45 };
    } else {
        config = { rojo:92, x2:85, x4:78, sniper:45, camara:95, dpi:480, boton:50 };
    }

    // Aplicar valores
    Object.keys(config).forEach(key => {
        const el = document.getElementById(key);
        if(el) {
            el.value = config[key];
            if(document.getElementById(key+'Valor')) document.getElementById(key+'Valor').textContent = config[key];
        }
    });
    actualizarValorBoton();
}

// Seleccionar versión FF
function seleccionarVersion(v) {
    const btnN = document.getElementById('btnNormal');
    const btnM = document.getElementById('btnMax');
    if(v === 'normal'){
        btnN.className = 'py-3 rounded-lg bg-primary text-dark font-bold';
        btnM.className = 'py-3 rounded-lg bg-dark border border-gray-600 font-bold';
    } else {
        btnM.className = 'py-3 rounded-lg bg-primary text-dark font-bold';
        btnN.className = 'py-3 rounded-lg bg-dark border border-gray-600 font-bold';
    }
}

// Guardar configuración
function guardarConfiguracion() {
    const datos = {
        dispositivo: document.getElementById('dispositivo').value,
        usarDpi: document.getElementById('usarDpi').checked,
        dpi: document.getElementById('dpi').value,
        usarBoton: document.getElementById('usarBoton').checked,
        boton: document.getElementById('boton').value,
        rojo: document.getElementById('rojo').value,
        x2: document.getElementById('x2').value,
        x4: document.getElementById('x4').value,
        sniper: document.getElementById('sniper').value,
        camara: document.getElementById('camara').value
    };
    localStorage.setItem('configFF', JSON.stringify(datos));
    alert('✅ Configuración guardada correctamente!');
}

// Aplicar FF PROXY
function aplicarProxy() {
    const optimizaciones = {
        notif: document.getElementById('optNotificaciones').checked,
        gpu: document.getElementById('optGpu').checked,
        rend: document.getElementById('optRendimiento').checked,
        mem: document.getElementById('optMemoria').checked
    };
    
    localStorage.setItem('ffOptimizaciones', JSON.stringify(optimizaciones));
    
    alert('🚀 Optimizaciones activadas!\nAhora abre Free Fire desde tu aplicación.\nSe recomienda activar el modo juego en tu celular.');
}

// Cargar configuración guardada al iniciar
window.onload = function() {
    const guardada = localStorage.getItem('configFF');
    if(guardada){
        const cfg = JSON.parse(guardada);
        Object.keys(cfg).forEach(key => {
            const el = document.getElementById(key);
            if(el){
                if(el.type === 'checkbox') el.checked = cfg[key];
                else el.value = cfg[key];
            }
        });
        actualizarDpi();
        actualizarValorBoton();
        toggleDpi();
    }
}
