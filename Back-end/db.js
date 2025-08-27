const { Sequelize } = require('sequelize');

const database = new Sequelize('Simulador', 'sa', '1234567', {
  dialect: 'mssql',
  host: 'localhost',
  port: 1433
});

async function connectToDatabase() {
  try {
    await database.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

connectToDatabase();

module.exports = database;
