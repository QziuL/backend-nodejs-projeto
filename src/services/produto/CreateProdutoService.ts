import { IProdutoCreate } from "../../interfaces/IProduto";
const Produto = require("../../models/Produto");

class CreateProdutoService {
  async execute({ nome, disponivel, valor, imgURL }: IProdutoCreate) {
    const createProduto = await Produto.create({
      nome,
      disponivel,
      valor,
      imgURL,
    });
    return createProduto;
  }
}

export { CreateProdutoService };
