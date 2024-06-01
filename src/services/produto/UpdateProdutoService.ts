import { IProdutoUpdate } from "../../interfaces/IProduto";
const Produto = require("../../models/Produto");

class UpdateProdutoService {
  async execute({ id, nome, disponivel, valor, imgURL }: IProdutoUpdate) {
    const updateProduto = await Produto.findOneAndUpdate(
      { _id: id },
      {
        nome: nome,
        disponivel: disponivel,
        valor: valor,
        imgURL: imgURL,
      }
    );
    return updateProduto;
  }
}

export { UpdateProdutoService };
