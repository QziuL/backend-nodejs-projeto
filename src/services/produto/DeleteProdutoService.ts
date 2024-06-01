const Produto = require("../../models/Produto");

class DeleteProdutoService {
  async execute(id: String) {
    const produtoDeletado = await Produto.findByIdAndDelete(id);
    return produtoDeletado;
  }
}

export { DeleteProdutoService };
