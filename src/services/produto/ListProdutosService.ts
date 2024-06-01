const Produto = require("../../models/Produto");

class ListProdutosService {
  async execute() {
    const produtos = await Produto.find().sort({ createdAt: -1 });
    return produtos;
  }
}

export { ListProdutosService };
