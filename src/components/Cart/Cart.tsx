import closeImage from "../../assets/X.svg";
import deleteImage from "../../assets/Trash.svg";
import plantImage from "../../assets/Plant.png";
import Cow from "../../assets/Cow.png";
import plusImage from "../../assets/Plus.svg";
import minusImage from "../../assets/Minus.svg";
import { useState, useEffect } from "react";

import style from "../Cart/style.module.css";
import formatCoffeePrice from "../../utils/FormatPrice";
import { ICartProduct } from "../../@types/cart";
import { deleteCartItemById, getCart, putCart } from "../../Api/axios";

interface ICartProps {
  closeCart: () => void;
}

let frete = 0;
let subtotal = 0;
let total = 0;

export function Cart({ closeCart }: Readonly<ICartProps>) {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  async function loadProductCart() {
    try {
      const response = await getCart();
      console.log(response);
      setCart(response);
      calcSubTotal(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProductCart();
  }, []);

  async function deleteAllProductsFromCart(id?: string) {
    try {
      if (id) {
        await deleteCartItemById(id);
      } else {
        for (const item of cart) {
          await deleteCartItemById(item.id);
        }
      }
      loadProductCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateQuantityItemCart(product: ICartProduct, value: number) {
    const currentProduct = { ...product };
    currentProduct.quantidade = Number(currentProduct.quantidade) + value;
    if (currentProduct.quantidade < 1) {
      return;
    }
    await putCart(currentProduct.id, currentProduct);

    loadProductCart();
  }

  function calcSubTotal(currentCart: ICartProduct[]) {
    subtotal = 0;
    total = 0;
    frete = 0;
    for (const item of currentCart) {
      subtotal = Number(item.quantidade) * item.preco;
    }
    total = subtotal + frete;
  }

  return (
    <div className={style.cart}>
      <section className={style.cart__header}>
        <h3 className={style.cart__title}>Seu carrinho</h3>
        <button onClick={() => closeCart()} className={style.cart__close}>
          <img src={closeImage} alt="fechar carrinho" />
        </button>
      </section>
      <section className={style.cart__body}>
        <div className={style.cart__info}>
          <h4 className={style["cart__quantityItems"]}>
            {cart.length === 1 ? `${cart.length} item` : `${cart.length} items`}
          </h4>
          <button
            onClick={() => deleteAllProductsFromCart()}
            className={style["cart__deleteAll"]}
          >
            Excluir Tudo
          </button>
        </div>
        <div className={style["cart__products"]}>
          {cart.map((product) => {
            return (
              <div key={product.id} className={style["cart__product"]}>
                <img
                  src={`../${product.imagem}`}
                  alt=""
                  className={style["cart__productImage"]}
                />

                <div className={style["cart__productInfo"]}>
                  <div className={style["cart__productRow"]}>
                    <div className={style["cart__productColumn"]}>
                      <h2 className={style["cart__productName"]}>
                        {product.nome}
                      </h2>

                      {product.vegano ? (
                        <div className="product__tag">
                          <img src={plantImage} alt="planta" />
                          <span>Vegano</span>
                        </div>
                      ) : (
                        <div className="product__tag">
                          <img src={Cow} alt="Vaca" />
                          <span>Contém Lactose</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => deleteAllProductsFromCart(product.id)}
                      className={style["cart__productDelete"]}
                    >
                      <img src={deleteImage} alt="Deletar produto" />
                    </button>
                  </div>

                  <div className={style["cart__productRow"]}>
                    <h3 className={style["cart__productPrice"]}>
                      {formatCoffeePrice(
                        product.preco * Number(product.quantidade)
                      )}
                    </h3>

                    <section className={style["product__quantity"]}>
                      <button
                        onClick={() => updateQuantityItemCart(product, -1)}
                        type="button"
                        className={style["product__quantityPlus"]}
                      >
                        <img src={minusImage} alt="menos um" />
                      </button>

                      <input
                        type="text"
                        readOnly
                        className={style["product__quantityInput"]}
                        value={product.quantidade}
                      />
                      <button
                        onClick={() => updateQuantityItemCart(product, +1)}
                        type="button"
                        className={style["product__quantityMinus"]}
                      >
                        <img src={plusImage} alt="mais um" />
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className={style["cart__footer"]}>
        <div className={style["cart__footerRow cart__footerSubtotal"]}>
          <h3 className={style["cart__footerTitle"]}>Subtotal</h3>
          <h3 className={style["cart__footerPrice"]}>
            {formatCoffeePrice(subtotal)}
          </h3>
        </div>
        <div className={style["cart__footerRow cart__footerDelivery"]}>
          <h3 className={style["cart__footerTitle"]}>Entrega</h3>
          <h3 className={style["cart__footerPrice"]}>
            {formatCoffeePrice(frete)}
          </h3>
        </div>
        <div className={style["cart__footerRow cart__footerTotal"]}>
          <h3 className={style["cart__footerTitle"]}>Total</h3>
          <h3 className={style["cart__footerPrice"]}>
            {formatCoffeePrice(total)}
          </h3>
        </div>
        <div className={style["cart__footerRow cart__footerBuy"]}>
          <button type="button" className={style["cart__buy"]}>
            Finalizar compra
          </button>
        </div>
      </section>
    </div>
  );
}
