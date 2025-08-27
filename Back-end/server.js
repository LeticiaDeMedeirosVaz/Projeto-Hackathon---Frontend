const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router.js');
const database = require('./db.js');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

database.sync({ force: false })
  .then(() => {
    console.log("Modelos sincronizados com o banco de dados.");
  })
  .catch(err => {
    console.error("Erro ao sincronizar modelos:", err);
  });

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});