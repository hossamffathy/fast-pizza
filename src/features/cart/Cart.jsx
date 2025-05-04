import { Link, useLoaderData, useNavigation } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {clear} from "./cartSlice"

function Cart() {
  const name=useSelector(state=>state.user.username)
  const cart = useSelector(state=>state.cart.cart);
 
const dispatch=useDispatch()
if (cart.length==0) return <div>
        <Link className="text-blue-500 hover:underline text-sm" to="/menu">&larr; Back to menu</Link>

  <p>Your cart is still empty. Start adding some pizzas :)</p>
  </div>
  return (
    <div className="md:w-[900px] mx-4 max-w-3xl md:m-auto mt-6">
      <Link className="text-blue-500 block hover:underline text-sm mt-6 " to="/menu">&larr; Back to menu</Link>

      <h2 className="font-bold mt-4 text-xl">Your cart, {name}</h2>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
      <div className="mt-8">
        <Link className="text-sm  font-bold bg-yellow-400 uppercase hover:bg-yellow-300 rounded-full py-4 px-4 " to="/order/new">Order pizzas</Link>
        <button onClick={()=>dispatch(clear())} className=" text-sm font-bold ml-4 rounded-full border-2 border-stone-300 py-4 px-4 hover:bg-stone-300 text-stone-400 uppercase">Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
