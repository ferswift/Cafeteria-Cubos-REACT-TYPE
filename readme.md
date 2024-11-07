# Projeto: Catálogo Online de Café - CuboEspresso (Criando uma aplicação React)

**Nome do Aluno**: [Insira seu nome aqui]

## Objetivo

Este projeto consiste em criar uma aplicação com ReactJS, o objetivo é componentizar a aplicação e usar css module.

## Layout

O design completo do projeto está disponível no arquivo `Desafio-Continuado-m3.fig` (Figma) ou `Desafio-Continuado-m3.penpot` (Penpot), que pode ser encontrado no repositório.

## Instruções para Entrega

1. Faça um fork deste repositório.
2. Clone o repositório para sua máquina local.
3. Implemente o projeto conforme as orientações abaixo.
4. Abra um Pull Request (PR) para enviar sua solução final.
5. Adicione seu nome completo na descrição da PR.

## Boas Práticas

- Faça commits regulares (sugerimos ao final de cada parte da página).
- Após terminar, não se esqueça de atualizar seu repositório remoto (`git push`).
- Mantenha seu código limpo e bem organizado.
- Use nomes semânticos e descritivos para variáveis e funções.
- Encapsule lógicas repetidas em funções reutilizáveis.
- Utilize `try` e `catch` para capturar possíveis erros.
- Armazene os preços dos produtos em centavos.

## Importante

O HTML e o CSS da aplicação já estão prontos, além de alguns componentes básicos. Sua tarefa é componentizar a aplicação e fazer suas funcionalidades e na estilização usar css modules.

<details>
<summary>
PARTE I - Após a aula de ES6 e Introdução a React e Fundamentos React:
</summary>

1. Dividir o código existente em componentes 
2. Dividir a estilização existente em arquivos separados por componentes usando `css modules`
3. Ajustando as importações do css e as chamadas no `className`
</details>
<details>
<summary>
PARTE II - Após a aula de Gerenciando Estado:
</summary>

1. Na Home, criar estado para gerenciar os produtos por categoria, usando `useState`. O estado deve ser um array de objetos JavaScript representando os produtos com os seguintes campos: `id`, `nome`, `imagem`, `descricao`, `preco` (em centavos), `vegano`, e `categoria`.
```js
[
  {
    id: "7",
    nome: "Mocha",
    imagem: "./image/product-07.png",
    descricao: "Uma descrição completa do produto.",
    preco: {
      de: 1000,
      por: 800,
    },
    vegano: false,
    categoria: "clássicos",
  },
]
```
2. Na Home, listar os produtos do estado usando o `map`.
```tsx
  <a href={`/product/1`} className="products__list--item">
    <img src="/product-02.png" alt="" />
    <h3 className="products__list--price">R$ 0,00 <span>R$ 0,00</span></h3>
    <h4 className="products__list--name">Americano</h4>
    <div className="product__tag">
      <img src={PlantImage} alt="planta" />
      <span>Vegano</span>
    </div>
  </a>
```
3. Na Home, adicionar links em cada produto que redirecionam para a página `/product`, passando o `ID` do produto como parâmetro na URL (exemplo: `/product/123`).
```tsx
<a href={`/product/123`} className="products__list--item">
</a>
```

4. Na página de Produto, obter o `ID` do produto usando o código abaixo e exibir todos os dados daquele produto, os dados podem ser buscado do estado:

```js
import { useParams } from 'react-router-dom';
const { id } = useParams();
console.log('ID do produto:', idProduto);
```

5. No carrinho, criar estado para gerenciar os produtos no Carrinho usando `useState`
```js
[
  {
    "id": "6b9f",
    "idProduto": "4",
    "nome": "Café com leite",
    "imagem": "./image/product-04.png",
    "preco": 1000,
    "vegano": false,
    "quantidade": "3",
    "observacao": ""
  }
]
```
6. No carrinho, listar os produtos do Carrinho usando o `map`.
```tsx
<div className="cart__product">
  <img
    src="/product-01.png"
    alt=""
    className="cart__productImage"
  />

  <div className="cart__productInfo">
    <div className="cart__productRow">
      <div className="cart__productColumn">
        <h2 className="cart__productName">Café Espresso</h2>

        <div className="product__tag">
          <img src={plantImage} alt="vegano" />
          <span>Vegano</span>
        </div>
      </div>

      <button className="cart__productDelete">
        <img src={deleteImage} alt="Deletar produto" />
      </button>
    </div>

    <div className="cart__productRow">
      <h3 className="cart__productPrice">R$ 10,00</h3>

      <section className="product__quantity">
        <button type="button" className="product__quantityMinus">
          <img src={plusImage} alt="mais um" />
        </button>
        <input type="text" readOnly  className="product__quantityInput" value={1} />
        <button type="button" className="product__quantityPlus">
          <img src={minusImage} alt="menos um" />
        </button>
      </section>
    </div>
  </div>
</div>
```
</details>

<details>
<summary>
PARTE III - Após a aula de Ciclo de Vida do Componente e Eventos e Formulários:
</summary>

1. Na página de Produto, implementar a funcionalidade do botão Comprar:

- Adicionar o produto ao carrinho considerando a quantidade e as observações fornecidas pelo usuário.

- Implementar a funcionalidade de alterar a quantidade de produtos diretamente no campo de quantidade, garantindo que o valor mínimo seja 1.

- Criar um estado sendo array de objetos para armazenar os produtos no carrinho, adicionando os campos quantidade e observacao ao objeto do produto.

```js
const produtosNoCarrinho = [
  {
    id: "6b9f",
    idProduto: "4",
    nome: "Café com Leite",
    imagem: "./image/product-04.png",
    preco: 1000,
    vegano: false,
    quantidade: 3,
    observacao: "",
  },
];
```

2. Implementar a funcionalidade de abrir e fechar o carrinho ao clicar no ícone de `X.svg`.  

   
</details>

<details>
<summary>
PARTE IV - Após a aula de Rotas:
</summary>

1. Configurar as rotas
2. Criar Rota para Home em `/`
3. Criar Rota para Produto em `/product/:id`
</details>

<details>
<summary>
PARTE V - Após a aula de Integração com Backend:
</summary>
1. Na raiz do projeto, há um arquivo `db.json`. Use o JSON Server para gerar uma API fake.

```json
{
  "produtos": [
    {
      "id": "1",
      "nome": "Espresso",
      "imagem": "./image/product-01.png",
      "descricao": "Imagine um café espresso como um abraço acolhedor em uma xícara...",
      "preco": {
        "de": 800,
        "por": 600
      },
      "vegano": true,
      "categoria": "classicos"
    }
  ],
  "carrinho": [
    {
      "id": "6b9f",
      "idProduto": "4",
      "nome": "Café com leite",
      "imagem": "./image/product-04.png",
      "preco": 1000,
      "vegano": false,
      "quantidade": "3",
      "observacao": ""
    }
  ]
}
```
### Deixe sua FAKE API Rodando para que os endpoints funcionem

```bash
# Instalar JSON Server globalmente
npm install -g json-server

# Executar o servidor
npx json-server db.json

# Para rodar em uma porta específica
npx json-server db.json --port 3333
```

### Endpoints:

- `/produtos`
  - `GET`: pegar a lista de produtos
- `/produtos/[id] `(trocar `[id]` pelo id do produto)
  - `GET` => pegar os dados de um produto específico
- `/carrinho`
  - `GET`: pegar a lista de produtos no carrinho
  - `POST`: cadastrar um item no carrinho
- `/carrinho/[id]` (trocar `[id]` pelo id do item)
  - `DELETE`: deletar um item do carrinho
  - `PUT`: alterar os dados do item no carrinho



2. Fazer a integração com a API para substituir o array de produtos e o array de produtos no carrinho:
  - Home
    - Obtenha a listagem de produtos no endopoint `GET /produtos`
  - Produto
    - Obtenha os dados do produto específico no endpoint `GET /produtos[id]`
    - Ao clicar em comprar, o produto deve ser adicionado no carrinho, use o endpoint `POST /carrinho`
- carrinho:
  - Obtenha a listagem de produtos do carrinho no endpoint `GET /carrinho`
  - Delete um produto do carrinho usando o endpoint `DELETE /carrinho/[id]`
  - Altere a quantidade de um produto do carrinho `PUT /carrinho/[id]`
  - Exclua todos os itens do carrinho usando o endpoint `DELETE /carrinho/[id]`. Dica você pode usar um foreach para deletar todos.
  - Calcule o subtotal, frete e valor total usando o endpoint `GET /carrinho`

</details>

<details>
<summary>
PARTE VI - (opcional) Após a aula de Deploy de Aplicações Frontend, Debug e Upload de Arquivos e Prop Drilling e API de Contexto:
</summary>
1. Criar um Hook para gerenciar os estados de Carrinho
2. Fazer o deploy da aplicação usando netlify

</details>

