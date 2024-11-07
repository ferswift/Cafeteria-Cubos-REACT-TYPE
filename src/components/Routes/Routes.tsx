import { Home } from "../../pages/Home/Home";
import { PageNotFound } from "../../pages/Error/NotFound";
import { Product } from "../../pages/Product/Product";

import { createBrowserRouter } from "react-router-dom";
import { LayoutDefault } from "../../pages/Layout/LayoutDefault";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDefault />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      // Nested Routes - indentificador único - dynamic routes
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
