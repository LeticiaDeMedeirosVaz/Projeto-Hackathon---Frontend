
const ModelProduto = require('../models/produto');

exports.List = async (req, res) => {
    try {
        const produtos = await ModelProduto.findAll();
        return res.json(produtos);
    } catch (erro) {
        console.error('Erro detalhado ao buscar produtos:', erro.message);
        return res.status(500).json({
            "erro": "Erro ao buscar produtos",
            "detalhe": erro.message
        });
    }

};


exports.Create = async (req, res) => {
    try {
        const produtos = await ModelProduto.create({
            ProdutoID: req.body.ProdutoID,
            Nome: req.body.Nome,
            TaxaAnual: req.body.TaxaAnual,
            PrazoMeses: req.body.PrazoMeses
        });
        return res.json(produtos);
    } catch (erro) {
        res.status(500).json({ error: "Erro ao criar produto de empréstimo" });
    }
};


exports.Update = async (req, res) => {
    try {
        const prod = await ModelProduto.findByPk(req.body.ProdutoID);
        if (prod) {
            prod.Nome = req.body.Nome;
            prod.TaxaAnual = req.body.TaxaAnual;
            prod.PrazoMeses = req.body.PrazoMeses;
            await prod.save();
        }
        return res.json(prod);
    } catch (erro) {
        res.status(500).json({ error: "Erro ao atualizar" });
    }
};


exports.GetOne = async (req, res) => {
    try {
        const prod = await ModelProduto.findByPk(req.body.ProdutoID);
        return res.json(prod);
    } catch (erro) {
        return console.error("Erro no GetOne: ", erro);
    }
};


exports.Delete = async (req, res) => {
    try {
        const prod = await ModelProduto.findByPk(req.body.ProdutoID);
        await prod.destroy();
        return res.json(prod);
    } catch (erro) {
        res.status(500).json({ error: "Erro ao deletar produtos" });
    }
};