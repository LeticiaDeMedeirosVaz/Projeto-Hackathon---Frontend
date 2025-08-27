const express = require('express');
const app = express();
const PORT = 3000;

// Dados simulados 
const mockProdutos = [
  { ProdutoID: 1, Nome: 'Empréstimo Consignado', TaxaAnual: 24.96, PrazoMeses: 48 },
  { ProdutoID: 2, Nome: 'Empréstimo Pessoal', TaxaAnual: 31.43, PrazoMeses: 48 },
  { ProdutoID: 3, Nome: 'Empréstimo com Garantia de Imóvel', TaxaAnual: 12.00, PrazoMeses: 240 },
  { ProdutoID: 4, Nome: 'Penhor Caixa Tradicional', TaxaAnual: 29.40, PrazoMeses: 6 },
  { ProdutoID: 5, Nome: 'Penhor Caixa Parcelado', TaxaAnual: 55.90, PrazoMeses: 12 },
  { ProdutoID: 6, Nome: 'Antecipação Saque FGTS', TaxaAnual: 17.00, PrazoMeses: 60 },
];

app.get('/List', (req, res) => {
  console.log('Requisição GET recebida para /List. Retornando dados simulados.');
  return res.json(mockProdutos);
});


app.listen(PORT, () => {
  console.log(`Servidor mock rodando na porta ${PORT}`);
});