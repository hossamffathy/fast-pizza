import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);
  const quantity = cart
    .map((item) => item.quantity)
    .reduce((acc, cur) => {
      const quantity = acc + cur;
      return quantity;
    });

const totalPrice=cart.map(item=>item.totalPrice).reduce((acc,cur)=>{
  const totalPrice=acc+cur;
  return totalPrice
})

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}


  return (
    <div className='bg-stone-800 flex justify-between p-4 text-stone-300 font-semibold uppercase'>
      <p>
        <span className='mr-6'>{quantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
     <Link to="/cart">OPEN CART &rarr; </Link>
    </div>
  );
}

export default CartOverview;
