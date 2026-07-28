// Cambiar pestañas
function irA(n) {
    if (n === 1) {
        document.getElementById('s1').classList.remove('hidden');
        document.getElementById('s2').classList.add('hidden');
        document.getElementById('tabS').className = 'flex-1 py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('tabF').className = 'flex-1 py-3 rounded-lg font-bold bg-off';
    } else {
        document.getElementById('s2').classList.remove('hidden');
        document.getElementById('s1').classList.add('hidden');
        document.getElementById('tabF').className = 'flex-1 py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('tabS').className = 'flex-1 py-3 rounded-lg font-bold bg-off';
    }
}

// Actualizar valores de sensibilidad
function actVal(n) {
    document.getElementById(`v${n}`).textContent = document.querySelectorAll('.slider')[n-1].value;
}

// Seleccionar DPI
function selDpi(si) {
    if (si) {
        document.getElementById('d1').className = 'py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('d2').className = 'py-3 rounded-lg font-bold bg-off';
    } else {
        document.getElementById('d2').className = 'py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('d1').className = 'py-3 rounded-lg font-bold bg-off';
    }
}

// Elegir versión FF
function verFF(t) {
    if (t === 'normal') {
        document.getElementById('ff1').className = 'py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('ff2').className = 'py-3 rounded-lg font-bold bg-off';
    } else {
        document.getElementById('ff2').className = 'py-3 rounded-lg font-bold bg-on text-black';
        document.getElementById('ff1').className = 'py-3 rounded-lg font-bold bg-off';
    }
}

// Interruptores
function toggle(n) {
    const b = document.getElementById(`sw${n}`);
    const p = b.querySelector('span');
    if (b.classList.contains('bg-on')) {
        b.classList.remove('bg-on'); b.classList.add('bg-off');
        p.classList.remove('right-1'); p.classList.add('left-1');
    } else {
        b.classList.add('bg-on'); b.classList.remove('bg-off');
        p.classList.add('right-1'); p.classList.remove('left-1');
    }
}

// Copiar ajustes
function copiar() {
    const txt = `🎯 SENSIBILIDAD TODO ROJO
🔴 Punto Rojo: ${document.getElementById('v1').textContent}
🔭 Mira x2: ${document.getElementById('v2').textContent}
🔭 Mira x4: ${document.getElementById('v3').textContent}
🎯 Francotirador: ${document.getElementById('v4').textContent}
📸 Cámara 360: ${document.getElementById('v5').textContent}

🔥 Créditos: Endry + Dola`;
    navigator.clipboard.writeText(txt).then(() => alert('✅ Copiado perfecto!'));
}

// Aplicar configuración
function aplicar() {
    alert('🚀 Listo! Abre Free Fire y disfruta.\n\nCréditos: Endry + Dola');
}
