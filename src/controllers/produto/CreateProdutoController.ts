import { Request, Response } from "express";
import { CreateProdutoService } from "../../services/produto/CreateProdutoService";
import { IProdutoCreate } from "../../interfaces/IProduto";

export default class CreateProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { nome, disponivel, valor, imgURL } = req.body as IProdutoCreate;
      const produto = await new CreateProdutoService().execute({
        nome,
        disponivel,
        valor,
        imgURL,
      });

      res.status(201).json(produto);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ AZEDOU: error.message });
      }
    }
  }
}
