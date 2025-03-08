const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de seguridad y optimización
app.use(helmet({
    contentSecurityPolicy: false, // Deshabilitar CSP temporalmente si hay problemas con recursos externos
}));
app.use(compression()); // Comprimir respuestas

// Servir archivos estáticos desde la carpeta dist (donde Vite construye la app)
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las rutas para que funcione el enrutamiento de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});