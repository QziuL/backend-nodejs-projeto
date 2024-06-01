export interface IProdutoCreate {
  nome: String;
  disponivel: Boolean;
  valor: Number;
  imgURL: String;
}

export interface IProdutoUpdate extends IProdutoCreate {
  id: String | null;
}
