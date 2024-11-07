import logoFooterImage from "../../assets/logo-02.svg";

export function Footer() {
  return (
    <footer className="footer">
      <section className="container">
        <img src={logoFooterImage} alt="logo cubospresso" />
        <div className="footer__list">
          <div className="footer__list--item">
            <h3>Classicos</h3>
            <ul>
              <li>Espresso</li>
              <li>Americano</li>
              <li>Cappuccino</li>
              <li>Latte</li>
              <li>Macchiato</li>
              <li>Mocha</li>
              <li>Irish Coffee</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <h3>Gelados</h3>
            <ul>
              <li>Cold Brew</li>
              <li>Frappuccino</li>
              <li>Laranja e tônica</li>
              <li>Milk shake</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <h3>Veganos</h3>
            <ul>
              <li>Espresso</li>
              <li>Americano</li>
              <li>Cold Brew</li>
              <li>Irish Coffee</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
