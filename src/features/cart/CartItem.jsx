import DeleteButton from './DeleteButton';
import UpdateItemQuantity from './UpdateItemQuantity';
function CartItem({ item }) {
  function formatCurrency(value) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'Eur',
    }).format(value);
  }
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="mt-4 divided-stone-200 flex list-none border-b-2 py-3 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="ml-auto flex items-center text-sm font-bold">
      <div>
        <p className='mr-4'>{formatCurrency(totalPrice)}</p>
      </div>
        {' '}
        <UpdateItemQuantity quantity={quantity} pizzaId={pizzaId} />
        <DeleteButton id={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
