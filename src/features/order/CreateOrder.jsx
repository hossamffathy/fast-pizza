import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import Loader from '../../ui/Loader';
import LocationButton from './LocationButton';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
 
  const address=useSelector((state)=>state.user.location)

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice=cart.reduce((acc,cur)=>acc+cur.totalPrice,0)
  function formatCurrency(value){
    return new Intl.NumberFormat("en",{
      style:"currency",
      currency:"EUR"
    }).format(value)
  }

  const [withPriority, setWithPriority] = useState(false);
  const data = useActionData();
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="my-4 text-xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="post">
        <div className="mb-6 grid grid-cols-3 items-center gap-4">
          <label className="">First Name</label>
          <input
            className="col-span-2 w-full rounded-full p-3 focus:outline-yellow-400"
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="mb-6 grid grid-cols-3 items-center gap-4">
          <label>Phone number</label>
            <input
              className="col-span-2 w-full rounded-full p-3 focus:outline-yellow-400"
              type="tel"
              name="phone"
              required
            />
        </div>
        <div className="relative mb-6 grid grid-cols-3 items-center gap-4">
          <label>Address</label>
        
            <input
            className=" w-full col-span-2 rounded-full p-3 focus:outline-yellow-400"
              type="text"
              name="address"
              required
              value={ address ? `${address.city},${address.country}` : ""}
            ></input>
            <LocationButton/>
          </div>
        
        <div className='flex items-center'>
          <input className="w-6 h-6"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className='font-semibold ml-4'  htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <input  type="hidden" name="cart" value={JSON.stringify(cart)}></input>
        <div>
          <button className='uppercase mt-12 text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 py-4 px-4 rounded-full' type="submit">Order now from {formatCurrency(totalPrice)}</button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  async function newOrder(order) {
    const res = await fetch('https://react-fast-pizza-api.jonas.io/api/order', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await res.json();
    return data;
  }
  const orderNew = await newOrder(order);
  return redirect(`/order/${orderNew.id}`);
}

export default CreateOrder;
