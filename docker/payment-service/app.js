const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

// Conectar ao banco de dados PostgreSQL
const client = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

client.connect()
  .then(() => console.log("Conectado ao banco de dados PostgreSQL"))
  .catch(err => console.error("Erro ao conectar ao banco de dados", err));

// Definir uma rota simples para o serviço
app.get('/', (req, res) => {
  res.send('Payment Service is Running');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Payment Service running at http://localhost:${port}`);
});
