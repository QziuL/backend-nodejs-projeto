import { Response } from "express";
import { ListProdutosService } from "../../services/produto/ListProdutosService";

export default class ListProdutosController {
  async handle(res: Response) {
    try {
      const produtos = await new ListProdutosService().execute();
      return res.status(200).json(produtos);
      // produtos.length
      //   ? res.status(200).json(produtos)
      //   : res.json({ msg: "Puxa vida, estamos sem produtos..." });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
}

// export { ListProdutosController };
