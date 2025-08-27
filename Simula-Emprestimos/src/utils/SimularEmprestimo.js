export function simularEmprestimo(produto, valorEmprestimo, prazoMeses) {
  
const taxaMensal = produto["TaxaAnual"] / 100 / 12;

  const parcelaMensal =
    (valorEmprestimo * taxaMensal) /
    (1 - Math.pow(1 + taxaMensal, -prazoMeses));

  let saldoDevedor = valorEmprestimo;
  const memoriaCalculo = [];

  for (let mes = 1; mes <= prazoMeses; mes++) {
    const juros = saldoDevedor * taxaMensal;
    const amortizacao = parcelaMensal - juros;
    saldoDevedor -= amortizacao;

    memoriaCalculo.push({
      mes: mes,
      parcela: parcelaMensal,
      juros: juros,
      amortizacao: amortizacao,
      saldoDevedor: saldoDevedor,
    });
  }


  return {
    nome: produto["Nome"],
    taxaMensal: Number(taxaMensal * 100).toFixed(2) + " %",
    valorTotalComJuros: Number(parcelaMensal * prazoMeses).toFixed(2),
    parcelaMensal: Number(parcelaMensal).toFixed(2),
    valorEmprestimo: Number(valorEmprestimo),
    prazoMeses: Number(prazoMeses),
    memoriaCalculo: memoriaCalculo,
  };
}