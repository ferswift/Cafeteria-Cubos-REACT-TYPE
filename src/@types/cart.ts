export interface ICartProduct {
  id: string;
  idProduto: string | number;
  nome: string;
  imagem: string;
  preco: number;
  vegano: boolean;
  quantidade: string | number;
  observacao: string;
}
