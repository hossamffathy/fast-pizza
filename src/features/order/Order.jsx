// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { calcMinutesLeft } from '../utils/helpers';
import { useSelector } from 'react-redux';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { data } = useLoaderData();
  const car = useSelector((state) => state.cart.cart);
  console.log(data);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = data;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  function formatDate(value) {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(value));
  }
  function formatCurrency(value) {
    return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  }

  return (
    <div className="m-auto mt-10 max-w-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold"> Order #{id} Status</h2>

        <div>
          {priority && (
            <span className="text-m rounded-full bg-red-500 px-2 py-1 font-semibold uppercase  text-white">
              Priority
            </span>
          )}
          <span className="ml-2 rounded-full bg-green-400 px-2 py-1 font-semibold uppercase text-white">
            {status} order
          </span>
        </div>
      </div>

      <div className="my-10 flex justify-between bg-stone-200 p-6">
        <p className="font-semibold ">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-400">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <div>
        <ul className="border-b">
          {cart.map((item) => (
            <li className="border-t border-stone-200 py-2">
              <div className="flex justify-between">
                <p className="text-sm">
                  <span className="text-sm font-semibold">
                    {item.quantity}x
                  </span>{' '}
                  {item.name}{' '}
                </p>
                <p className="text-sm font-semibold">
                  {formatCurrency(item.unitPrice)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 bg-stone-300 p-4">
          <p className="mb-2 text-sm">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
          <p className=" font-semibold">
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
      </div>
      <button className="ml-auto mt-10 block rounded-full bg-yellow-400 p-4 px-6 text-sm  font-semibold uppercase hover:bg-yellow-300">
        make priority
      </button>
    </div>
  );
}
async function getOrder({ params }) {
  const res = await fetch(
    `https://react-fast-pizza-api.jonas.io/api/order/${params.id}`
  );
  const data = await res.json();
  return data;
}

export { getOrder };
export default Order;
