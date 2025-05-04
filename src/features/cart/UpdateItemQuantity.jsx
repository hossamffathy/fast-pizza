import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  deleteItem
} from "../cart/cartSlice";

export default function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mr-10 flex gap-4 items-center">
      <button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        className="bg-yellow-400 hover:bg-yellow-300 rounded-full w-10 h-10 font-semibold"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        className="bg-yellow-400 hover:bg-yellow-300 rounded-full w-10 h-10 font-semibold"
      >
        +
      </button>
    </div>
  );
}
