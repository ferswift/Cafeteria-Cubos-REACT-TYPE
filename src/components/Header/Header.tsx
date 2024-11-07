import { useState } from "react";
import logoImage from "../../assets/logo.svg";
import ToteImage from "../../assets/Tote.svg";
import { Cart } from "../Cart/Cart";

export function Header() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  function closeCart() {
    setOpenCart(false);
  }

  return (
    <header className="header">
      <div className="container">
        <a href="./index.html">
          <img src={logoImage} alt="logo cubospresso" />
        </a>
        <button
          onClick={() => setOpenCart(!openCart)}
          className="link__quantity"
        >
          <img src={ToteImage} alt="Carrinho" />
          <span className="badge__quantity">1</span>
        </button>
      </div>
      {openCart && <Cart closeCart={closeCart} />}
    </header>
  );
}
