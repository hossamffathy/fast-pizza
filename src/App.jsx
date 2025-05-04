import {
  createBrowserRouter,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/Cart/Cart";
import Order from "./features/order/Order";
import Applayout from "./ui/AppLayout";
import CreateOrder from "./features/order/CreateOrder";
import { loader } from "./features/menu/Menu";
import Error from "./ui/Error";
import  {action} from "./features/order/CreateOrder"
import { getOrder } from "./features/order/Order";
export default function App() {
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          
          path: "/menu",
          loader,
          element: <Menu />,
        },
        {
         
          path: "/cart",
          element: <Cart />,
        },
        {
          action:action,
          path: "/order/new",
          element: <CreateOrder />,
        },
        {
          path: "/order/:id",
          element: <Order />,
          loader:getOrder
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
