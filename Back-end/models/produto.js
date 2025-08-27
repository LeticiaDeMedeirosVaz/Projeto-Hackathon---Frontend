const { Sequelize } = require('sequelize');
const database = require('../db');

class Produto extends Sequelize.Model {}

Produto.init({
    ProdutoID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        
        allowNull: false,
        primaryKey: true,
        field: 'ProdutoID'
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'Nome'
    },
    TaxaAnual: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        field: 'TaxaAnual'
    },
    PrazoMeses: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'PrazoMeses'
    }
}, {
    sequelize: database,
    modelName: 'Produtos',
    tableName: 'Produtos',
    timestamps: false
});

module.exports = Produto;