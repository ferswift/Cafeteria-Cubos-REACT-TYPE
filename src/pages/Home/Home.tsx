import { IProduct } from "../../@types/product";
import { getProducts } from "../../Api/axios";
import PlantImage from "../../assets/Plant.png";
import Cow from "../../assets/Cow.png";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [produtos, setProdutos] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await getProducts();
        setProdutos(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();

    // fetch("../../db.json")
    //   .then((response) => response.json())
    //   .then((data) => setProdutos(data.produtos));
  }, []);

  return (
    <main>
      <section className="slogan">
        <div className="container">
          <h1 className={style["slogan__title"]}>
            Fragrância e sabor elevado ao cubo
          </h1>
          <p className="slogan__text">
            Explore nossa variedade de blends exclusivos e saboreie a perfeição
            em cada gole.
          </p>
        </div>
      </section>
      <section className={style["products"]}>
        <div className="container">
          <h2 className={style["products__title"]}>Clássicos</h2>
          <div className={style["products__list"]}>
            {produtos
              .filter((item) => item.categoria === "classicos")
              .map((produto) => {
                return (
                  <Link
                    key={produto.id}
                    to={`/product/${produto.id}`}
                    className={style["products__list--item"]}
                  >
                    <img src={`../${produto.imagem}`} alt="" />
                    <h3 className={style["products__list--price"]}>
                      R$ 0,00 <span>R$ 0,00</span>
                    </h3>
                    <h4 className={style["products__list--name"]}>
                      {produto.nome}
                    </h4>
                    {produto.vegano ? (
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
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      <section className={style["products"]}>
        <div className="container">
          <h2 className={style["products__title"]}>Gelados</h2>
          <div className={style["products__list"]}>
            {produtos
              .filter((item) => item.categoria === "gelados")
              .map((produto) => {
                return (
                  <Link
                    key={produto.id}
                    to={`/product/${produto.id}`}
                    className={style["products__list--item"]}
                  >
                    <img src={`../${produto.imagem}`} alt="" />
                    <h3 className={style["products__list--price"]}>
                      R$ 0,00 <span>R$ 0,00</span>
                    </h3>
                    <h4 className={style["products__list--name"]}>
                      {produto.nome}
                    </h4>
                    <div className="product_tag">
                      <img src={PlantImage} alt="planta" />
                      <span>Vegano</span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
