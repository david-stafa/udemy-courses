import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import RoolLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductItem from "./pages/ProductItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoolLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        // path: "", - same as index:true - it should be the main route
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
