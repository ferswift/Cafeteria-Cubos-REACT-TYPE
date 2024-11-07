import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/global.css";
// import { Product } from './pages/Product.tsx'
// import { Home } from "./pages/Home/Home.tsx";
// import { Header } from "./components/Header/Header.tsx";
// import { Footer } from "./components/Footer/Footer.tsx";

import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />

    {/* <Product /> */}
    {/* <Home /> */}
    {/* <Footer /> */}
  </StrictMode>
);
