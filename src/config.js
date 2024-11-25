const { Pool } = require("pg");

// Configuración de la base de datos
const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "proyecto-final", 
  password: "Esss20622413", 
  port: 5432,
});

module.exports = pool;
