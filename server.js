import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import compression from 'compression';
import helmet from 'helmet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de seguridad y optimización
app.use(helmet({
    contentSecurityPolicy: false, // Deshabilitar CSP temporalmente si hay problemas con recursos externos
}));
app.use(compression()); // Comprimir respuestas

// Servir archivos estáticos desde la carpeta dist (donde Vite construye la app)
app.use(express.static(join(__dirname, 'dist')));

// Manejar todas las rutas para que funcione el enrutamiento de React
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});