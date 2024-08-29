// Actualizar fecha y hora
function actualizarFechaHora() {
    const ahora = new Date();
    document.getElementById('datetime').textContent = ahora.toLocaleString('es-ES');
}

setInterval(actualizarFechaHora, 1000);

// Modal de administrador
const botonAdmin = document.getElementById("adminBtn");
const modalAdmin = document.getElementById("adminModal");
const botonCerrar = document.getElementsByClassName("close")[0];

botonAdmin.onclick = function() {
    modalAdmin.style.display = "block";
}

botonCerrar.onclick = function() {
    modalAdmin.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAdmin) {
        modalAdmin.style.display = "none";
    }
}

// Inicio de sesión de administrador (esto es una simulación, reemplazar con autenticación real)
document.getElementById("adminLogin").addEventListener("click", function() {
    const usuario = document.getElementById("adminUsername").value;
    const contraseña = document.getElementById("adminPassword").value;
    if(usuario === "admin" && contraseña === "password") {
        alert("Inicio de sesión exitoso!");
        // Redirigir a la página de administrador o realizar acciones de administrador
    } else {
        alert("Credenciales inválidas");
    }
});

// Reconocimiento facial y lector QR
const video = document.getElementById('video');
const botonCapturar = document.getElementById('captureBtn');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => console.error(err));

botonCapturar.addEventListener('click', () => {
    // Aquí normalmente capturarías la imagen y la enviarías a una API de reconocimiento facial
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    // Simulación de reconocimiento facial
    setTimeout(() => {
        alert("Rostro capturado y reconocido! (Esto es una simulación)");
    }, 1000);
});

// Lector de código QR
const lectorCodigo = new ZXing.BrowserQRCodeReader();
lectorCodigo.decodeFromVideoDevice(null, 'video', (resultado, err) => {
    if (resultado) {
        alert("Código QR escaneado: " + resultado.text);
        // Procesar el código QR escaneado
    }
    if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err);
    }
});

// Envío de número de empleado
document.getElementById("submitEmpNumber").addEventListener("click", function() {
    const numeroEmpleado = document.getElementById("empNumber").value;
    if(numeroEmpleado) {
        alert("Número de empleado enviado: " + numeroEmpleado);
        // Procesar el número de empleado
    } else {
        alert("Por favor, ingrese un número de empleado");
    }
});

// Tarjeta de empleado (esto es una simulación, reemplazar con datos reales del empleado)
const datosEmpleado = {
    nombre: "Juan Pérez",
    cargo: "Desarrollador",
    codigo: "EMP001"
};

document.getElementById("empName").textContent += datosEmpleado.nombre;
document.getElementById("empPosition").textContent += datosEmpleado.cargo;
document.getElementById("empCode").textContent += datosEmpleado.codigo;

// Generar código QR
new QRCode(document.getElementById("empQRCode"), datosEmpleado.codigo);