import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import UpdateItemQuantity from "../cart/UpdateItemQuantity"
import DeleteButton from "../cart/DeleteButton"
function MenuItem({ pizza }) {
  const cart=useSelector((state)=>state.cart.cart)
 
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  function formatCurrancy(value) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'Eur',
    }).format(value);
  }



 const currentQuantity=cart.find(item=>item.pizzaId==id)?.quantity ?? 0;
  

const isInCart= currentQuantity > 0


  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
   
   <li className={`md:w-[900px] m-auto flex border-b-2 border-gray-200 p-2  `}>
   <div className='flex flex-1'>
   <img
        className={`w-24 ${soldOut ? 'opacity-60 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="ml-4">
        <p className="font-semibold">{name}</p>
        <p className="text-sm font-light capitalize italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-6 text-sm uppercase">
          {!soldOut ? (
            <p>{formatCurrancy(unitPrice)}</p>
          ) : (
            <p className="font-semibold text-gray-400">Sold out</p>
          )}
        </div>
      </div>

   </div>
  <div className='mt-auto '>
  {isInCart && <div className="flex  items-center ml-auto mt-auto  " ><UpdateItemQuantity pizzaId={id} quantity={currentQuantity} /> <DeleteButton id={id}/></div>  }
      {!soldOut && !isInCart ?  ( 
      <button  
      onClick={handleAddToCart}
      className=" ml-auto mt-auto self-end rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold uppercase transition hover:bg-yellow-300"
    >
      Add to cart
    </button>
    
      ) : (
        ''
      )}
  </div>

     
    </li>
  );
}

export default MenuItem;
