document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto
    
    const usuario = document.getElementById('usuario').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    let valid = true;

    // Resetear mensajes de error
    document.getElementById('usuarioError').textContent = '';
    document.getElementById('contrasenaError').textContent = '';

    // Validación de usuario
    if (usuario === '') {
        document.getElementById('usuarioError').textContent = 'Ingresa tu usuario';
        valid = false;
    }

    // Validación de contraseña
    if (contrasena === '') {
        document.getElementById('contrasenaError').textContent = 'Ingresa tu contraseña';
        valid = false;
    }

    // Redirección si es válido
    if (valid) {
        window.location.href = 'products.html';
    }
});