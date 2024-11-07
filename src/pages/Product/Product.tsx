import PlantImage from "../../assets/Plant.png";
import Cow from "../../assets/Cow.png";
import MinusImage from "../../assets/Minus.svg";
import PlusImage from "../../assets/Plus.svg";
import style from "./style.module.css";
import { useParams } from "react-router-dom";
import {
  getCartById,
  getProductById,
  postCart,
  putCart,
} from "../../Api/axios";
import { useEffect, useState } from "react";
import { IProduct } from "../../@types/product";
import formatCoffeePrice from "../../utils/FormatPrice";

export function Product() {
  const [inputQuantity, setInputQuantity] = useState<string>("1");
  const [inputObservation, setInputObservation] = useState<string>("");

  const { id } = useParams<{ id: string }>();
  // console.log("ID do produto:", id);

  const idProduct = id as string;
  const [product, setProduct] = useState<IProduct>({
    id: "",
    nome: "",
    descricao: "",
    imagem: "",
    preco: {
      de: 0,
      por: 0,
    },
    vegano: false,
    categoria: "",
  });

  useEffect(() => {
    async function loadProductById() {
      try {
        const response = await getProductById(idProduct);
        setProduct(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadProductById();
  }, [idProduct]);

  function updateInputQuantityProduct(value: number) {
    const newValueInput = parseInt(inputQuantity) + value;
    if (newValueInput < 1) {
      return;
    }
    setInputQuantity(String(newValueInput));
  }

  async function updateCartProduct() {
    const productCart = await getCartById(idProduct);
    console.log(productCart);

    if (productCart) {
      productCart.quantidade += parseInt(inputQuantity);
      await putCart(productCart.id, productCart);
    } else {
      const newProduct = {
        id: idProduct,
        idProduto: idProduct,
        nome: product.nome,
        imagem: product.imagem,
        preco: product.preco.por,
        vegano: product.vegano,
        quantidade: Number(inputQuantity),
        observacao: inputObservation,
      };
      const response = await postCart(newProduct);
      console.log(response);
    }
  }

  return (
    <main>
      <div className={`${style["product__container"]} container`}>
        <a href="/" className={style["product__link"]}>
          Voltar para o início
        </a>
        <section className={style["product"]}>
          <div className={style["product__container--image"]}>
            <img
              src={`../../public/${product.imagem}`}
              className={style["product__image"]}
              alt="produto 1"
            />
          </div>
          <div className={style["product__data"]}>
            <h1 className={style["product__title"]}>{product.nome}</h1>
            <h2 className={style["product__price"]}>
              {formatCoffeePrice(product.preco.por)}
            </h2>
            {product.vegano ? (
              <div className="product__tag">
                <img src={PlantImage} alt="planta" />
                <span>Vegano</span>
              </div>
            ) : (
              <div className="product__tag">
                <img src={Cow} alt="Vaca" />
                <span>Contém Lactose</span>
              </div>
            )}
            <p className={style["product__description"]}>{product.descricao}</p>
            <form>
              <section className={style["product__observation"]}>
                <label htmlFor="observation">Observações sobre o pedido</label>
                <textarea
                  value={inputObservation}
                  onChange={(e) => setInputObservation(e.target.value)}
                  rows={3}
                  name="observation"
                  id="observation"
                  placeholder="Digite suas observações. Ex.: Enviar açúcar"
                ></textarea>
              </section>
              <div className={style["product__buy"]}>
                <section className={style["product__quantity"]}>
                  <button
                    onClick={() => updateInputQuantityProduct(-1)}
                    type="button"
                    className={style["product__quantity--minus"]}
                  >
                    <img src={MinusImage} alt="mais um" />
                  </button>
                  <input
                    onChange={() => {}}
                    type="text"
                    className={style["product__quantity--input"]}
                    value={inputQuantity}
                  />
                  <button
                    onClick={() => updateInputQuantityProduct(+1)}
                    type="button"
                    className={style["product__quantity--plus"]}
                  >
                    <img src={PlusImage} alt="menos um" />
                  </button>
                </section>
                <button
                  type="button"
                  onClick={() => updateCartProduct()}
                  className={style["product__button"]}
                >
                  Comprar
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
