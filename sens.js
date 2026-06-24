<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚡ Sensi Pro 9° Aniversario - Free Fire</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@600;700&display=swap" rel="stylesheet">
    
    <style>
        * {
            box-sizing: border-box;
            font-family: 'Rajdhani', sans-serif;
        }
        
        body {
            background: radial-gradient(circle at 50% 0%, #2a0845 0%, #0b0518 60%, #020106 100%);
            color: #ffffff;
            text-align: center;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }

        /* --- LOGO / ENCABEZADO 9° ANIVERSARIO --- */
        .header-aniversario {
            margin-bottom: 25px;
        }
        .badge-9 {
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            font-size: 56px;
            background: linear-gradient(135deg, #00f0ff 0%, #ff007c 50%, #ffaa00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
            line-height: 1;
            filter: drop-shadow(0 0 15px rgba(255, 0, 124, 0.5));
        }
        h1 { 
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            color: #ffffff; 
            margin: 5px 0;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);
        }

        /* ==========================================
           PASO 1: PANTALLA DE INGRESO DE ID
        ========================================== */
        #pantalla-id {
            background: linear-gradient(135deg, rgba(30, 15, 55, 0.95) 0%, rgba(12, 6, 24, 0.98) 100%);
            border: 2px solid #ff007c;
            border-radius: 24px;
            max-width: 400px;
            margin: 40px auto;
            padding: 30px 20px;
            box-shadow: 0 0 35px rgba(255, 0, 124, 0.4);
        }
        .input-id {
            width: 100%;
            background: #07030e;
            border: 1px solid #00f0ff;
            color: #00f0ff;
            padding: 14px;
            font-size: 20px;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            text-align: center;
            border-radius: 12px;
            outline: none;
            margin: 15px 0;
            letter-spacing: 3px;
        }
        .input-id::placeholder {
            color: rgba(0, 240, 255, 0.4);
            font-size: 15px;
            letter-spacing: 0px;
        }

        /* ==========================================
           PASO 2: PANEL DE SENSIBILIDAD (OCULTO AL INICIO)
        ========================================== */
        #pantalla-sensi {
            display: none; /* Se activa con JS */
            max-width: 450px;
            margin: 0 auto;
        }
        .panel-container {
            background: linear-gradient(135deg, rgba(25, 12, 46, 0.85) 0%, rgba(10, 5, 20, 0.95) 100%);
            border: 1px solid rgba(255, 0, 124, 0.25);
            border-radius: 24px;
            padding: 25px;
            box-shadow: 0 20px 45px rgba(0, 0, 0, 0.8);
        }
        .opcion-grupo {
            text-align: left;
            margin-bottom: 20px;
        }
        label {
            display: block;
            color: #00f0ff;
            font-weight: 700;
            font-size: 15px;
            text-transform: uppercase;
            margin-bottom: 8px;
        }
        select {
            width: 100%;
            background: #07030e;
            border: 1px solid #3c1e5c;
            color: #fff;
            padding: 12px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            outline: none;
        }

        /* --- BOTONES DE MODOS --- */
        .modos-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .btn-modo {
            background: #0d061a;
            border: 1px solid #3c1e5c;
            color: #a496c0;
            padding: 14px;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            font-size: 15px;
            text-transform: uppercase;
            text-align: center;
            transition: all 0.25s;
        }
        .btn-modo.seleccionado {
            background: linear-gradient(135deg, #ff007c 0%, #7b00ff 100%);
            color: #fff;
            border: none;
            box-shadow: 0 0 20px rgba(255, 0, 124, 0.6);
        }

        /* --- BOTONES DE ACCIÓN --- */
        .btn-pro {
            width: 100%;
            background: linear-gradient(90deg, #00f0ff, #ff007c);
            color: white;
            border: none;
            padding: 16px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 14px;
            cursor: pointer;
            text-transform: uppercase;
            font-family: 'Orbitron', sans-serif;
            box-shadow: 0 5px 20px rgba(255, 0, 124, 0.4);
        }
        .btn-pro:active { transform: scale(0.97); }

        /* ==========================================
           VENTANAS FLOTANTES (MODALS)
        ========================================== */
        .modal {
            display: none;
            position: fixed;
            z-index: 999;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(3, 1, 7, 0.9);
            backdrop-filter: blur(6px);
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background: #07030c;
            border: 1px solid #4a156d;
            border-radius: 28px;
            width: 92%;
            max-width: 360px;
            padding: 25px;
            text-align: center;
            box-shadow: 0 25px 60px rgba(0,0,0,0.9);
        }
        
        /* Modal Éxito Regalo */
        .icono-regalo {
            font-size: 45px;
            margin-bottom: 10px;
            animation: flotar 1.5s infinite ease-in-out;
        }
        @keyframes flotar {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }
        .txt-exito {
            color: #00ffaa;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 15px;
        }
        .txt-mensaje-regalo {
            color: #ffffff;
            font-size: 17px;
            line-height: 1.4;
            margin-bottom: 20px;
            font-weight: 600;
            background: rgba(255, 0, 124, 0.1);
            padding: 15px;
            border-radius: 12px;
            border: 1px dashed #ff007c;
        }

        /* Filas de la Sensi */
        .modal-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 17px;
            font-weight: 700;
            margin-bottom: 18px;
            text-transform: uppercase;
            border-bottom: 2px solid #ff007c;
            padding-bottom: 12px;
        }
        .sens-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #160b24;
            font-size: 16px;
            text-align: left;
        }
        .sens-label { color: #ff007c; font-weight: 700; text-transform: uppercase; }
        .sens-value { color: #00f0ff; font-family: monospace; font-weight: bold; font-size: 17px; }

        .btn-close {
            width: 100%;
            background: #12071f;
            color: #fff;
            border: 1px solid #421b66;
            padding: 13px;
            border-radius: 25px;
            font-weight: 700;
            cursor: pointer;
            margin-top: 18px;
            text-transform: uppercase;
        }
    </style>
</head>
<body>

    <!-- CABECERA PRINCIPAL -->
    <div class="header-aniversario">
        <div class="badge-9">9th</div>
        <h1>SENSI PROFESIONAL ANIVERSARIO</h1>
    </div>

    <!-- ==========================================
       PASO 1: LOGIN DE REQUERIMIENTO ID
    ========================================== -->
    <div id="pantalla-id">
        <h2 style="color: #ffaa00; margin-top:0; font-size:18px; text-transform:uppercase;">Verificación de Jugador</h2>
        <p style="color: #b0a1cf; font-size:14px;">Ingresa tu ID para vincular los parámetros de calibración:</p>
        
        <input type="number" id="inputPlayerID" class="input-id" placeholder="EJ: 284719482" oninput="if(this.value.length > 12) this.value = this.value.slice(0, 12);">
        
        <button class="btn-pro" onclick="procesarVerificacion()">Verificar ID</button>
    </div>

    <!-- ==========================================
       PASO 2: GENERADOR DE SENSIBILIDAD
    ========================================== -->
    <div id="pantalla-sensi">
        <div class="panel-container">
            <div class="opcion-grupo">
                <label>Dispositivo Actual:</label>
                <select id="selectDispositivo">
                    <option value="android">Android (Gama Baja / Media / Alta)</option>
                    <option value="ios">iOS (iPhone / iPad)</option>
                    <option value="emulador">PC (Emulador BlueStacks)</option>
                </select>
            </div>

            <div class="opcion-grupo">
                <label>Configuración de DPI:</label>
                <select id="selectDpi">
                    <option value="si">Activo (Recomendar DPI Pro)</option>
                    <option value="no">No DPI (Dejar de fábrica)</option>
                </select>
            </div>

            <div class="opcion-grupo">
                <label>Modo de Precisión Meta:</label>
                <div class="modos-grid">
                    <div id="btn-alta" class="btn-modo seleccionado" onclick="cambiarModo('alta')">⚡ Alta Sensibilidad (Full Rojo)</div>
                    <div id="btn-precision" class="btn-modo" onclick="cambiarModo('precision')">🎯 Alta Precisión (Mejor Control)</div>
                    <div id="btn-baja" class="btn-modo" onclick="cambiarModo('baja')">📉 Sensibilidad Baja (Más Estable)</div>
                </div>
            </div>

            <button class="btn-pro" onclick="generarConfig()">Generar Sensi Profesional</button>
        </div>
    </div>

    <!-- ==========================================
       VENTANA FLOTANTE 1: ÉXITO DEL REGALO
    ========================================== -->
    <div id="modalRegalo" class="modal">
        <div class="modal-content">
            <div class="icono-regalo">🎁</div>
            <div class="txt-exito">¡VERIFICADO CON ÉXITO!</div>
            <div class="txt-mensaje-regalo">
                Te ha llegado 5 toke y un maquillaje de aniversario requerido prime
            </div>
            <button class="btn-pro" onclick="irAlPanelSensi()">Entrar a poner Sensi</button>
        </div>
    </div>

    <!-- ==========================================
       VENTANA FLOTANTE 2: RESULTADOS DE SENSI
    ========================================== -->
    <div id="resultadoModal" class="modal">
        <div class="modal-content">
            <div class="modal-title" id="txtModoTitulo" style="color: #fff;">REGISTRO DE AJUSTES</div>
            
            <div class="sens-row"><span class="sens-label">General:</span><span id="vGen" class="sens-value">0%</span></div>
            <div class="sens-row"><span class="sens-label">Punto Rojo:</span><span id="vMira1" class="sens-value">0%</span></div>
            <div class="sens-row"><span class="sens-label">Mira X2:</span><span id="vMira2" class="sens-value">0%</span></div>
            <div class="sens-row"><span class="sens-label">Mira X4:</span><span id="vMira4" class="sens-value">0%</span></div>
            <div class="sens-row"><span class="sens-label">Mira Franco:</span><span id="vFranco" class="sens-value">0%</span></div>
            <div class="sens-row"><span class="sens-label">Cámara 360°:</span><span id="vCamara" class="sens-value">0%</span></div>
            
            <!-- Fila del DPI -->
            <div class="sens-row" id="filaDpi"><span class="sens-label">DPI Recom:</span><span id="vDpi" class="sens-value">0</span></div>
            
            <div class="sens-row"><span class="sens-label">Botón de Disparo:</span><span id="vBoton" class="sens-value">0%</span></div>

            <button class="btn-close" onclick="cerrarModal()">Aplicar a Free Fire</button>
        </div>
    </div>

    <script src="sens.js"></script>
</body>
</html>
