import express from 'express';
import locationRoutes from './routes/LocationRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors({
    origin: `http://localhost:${PORT}`,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Servir les fichiers HTML et assets statiques
// a voir si on garde ou pas
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation des routes
app.use('/api', locationRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});