import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import CartOverview from "../cart/CartOverview"
function Menu() {
  const { data } = useLoaderData();
const cart=useSelector(state=>state.cart.cart)
const cartNotempty = cart.length > 0;

  return (
    <div>
      <div className="">
        {data.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
      {cartNotempty && <CartOverview/> }
  
    </div>
  );
}

export async function loader() {
  const API_URL = "https://react-fast-pizza-api.jonas.io/api/menu";
  const res = await fetch(API_URL);
if (!res.ok) throw new Error("faild in connection")
  const data = await res.json();
  return data;
}

export default Menu;
