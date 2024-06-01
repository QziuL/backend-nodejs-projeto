import { Request, Response } from "express";
import { DeleteProdutoService } from "../../services/produto/DeleteProdutoService";

export default class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.query as { id: string };

      if (!id) {
        throw new Error("ID vazio ou nulo...");
      }

      const produto = await new DeleteProdutoService().execute(id);

      if (!produto) {
        throw new Error("Produto não encontrado, verifique o ID !!");
      }

      res.status(200).json(produto);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ AZEDOU: error.message });
      }
    }
  }
}

// export { DeleteProdutoController };
