import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Ruta para obtener todos los zapatos
router.get('/', (req, res) => {
  try {
    // Leer el archivo de zapatos de manera sincrónica
    const shoesData = fs.readFileSync(path.resolve('data', 'shoes.json'), 'utf-8');
    const shoes = JSON.parse(shoesData); // Convertir el contenido a un array de objetos
    res.json(shoes); // Devolver los zapatos como respuesta
  } catch (error) {
    res.status(500).json({ message: 'Error al cargar los zapatos.' });
  }
});

export default router;
