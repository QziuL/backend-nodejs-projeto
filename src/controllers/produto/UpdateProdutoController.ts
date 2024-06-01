import { Request, Response } from "express";
import { UpdateProdutoService } from "../../services/produto/UpdateProdutoService";
import { IProdutoUpdate } from "../../interfaces/IProduto";

export default class UpdateProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { id, nome, disponivel, valor, imgURL } = req.body
        .data as IProdutoUpdate;

      if (!id) {
        throw new Error("Esqueceu o ID ?");
      }

      const updateProduto = await new UpdateProdutoService().execute({
        id,
        nome,
        disponivel,
        valor,
        imgURL,
      });

      if (!updateProduto) {
        throw new Error("Produto nao encontrado, verifique o ID !!");
      }

      res.status(200).json({
        msg: "Produto atualizado com sucesso !!",
        produto: updateProduto,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ AZEDOU: error.message });
      }
    }
  }
}
