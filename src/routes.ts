import { Router, Request, Response } from "express";
import ListProdutosController from "./controllers/produto/ListProdutosController";
import CreateProdutoController from "./controllers/produto/CreateProdutoController";
import UpdateProdutoController from "./controllers/produto/UpdateProdutoController";
import DeleteProdutoController from "./controllers/produto/DeleteProdutoController";
// import { CreateUserController } from "./controllers/user/CreateUserController";
// import { ListUserController } from "./controllers/user/ListUserController";
// import { DeleteUserController } from "./controllers/user/DeleteUserController";

const router = Router();

router.get("/hello", async (req: Request, res: Response) => {
  res.send({ msg: "hello word!!" });
});

// PRODUTO
router.get("/produtos", async (req: Request, res: Response) => {
  return new ListProdutosController().handle(res);
});

router.post("/produto", async (req: Request, res: Response) => {
  return new CreateProdutoController().handle(req, res);
});

router.put("/produto", async (req: Request, res: Response) => {
  return new UpdateProdutoController().handle(req, res);
});

router.delete("/produto", async (req: Request, res: Response) => {
  return new DeleteProdutoController().handle(req, res);
});

// USER
// router.get("/user", async (req: Request, res: Response) => {
//   return new ListUserController().handle(res);
// });

// router.post("/user", async (req: Request, res: Response) => {
//   return new CreateUserController().handle(req, res);
// });

// router.delete("/user", async (req: Request, res: Response) => {
//   return new DeleteUserController().handle(req, res);
// });

export default router;
