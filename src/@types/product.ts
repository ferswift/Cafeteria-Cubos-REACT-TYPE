export interface IProduct {
  id: string | number;
  nome: string;
  imagem: string;
  descricao: string;
  preco: {
    de: number;
    por: number;
  };
  vegano: boolean;
  categoria: string;
}
