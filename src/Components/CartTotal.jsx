import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal } from '../redux/cartSlice';

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, dispatch]);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 lg:mt-0">
      <h1 className="text-xl font-bold mb-4">Cart Summary</h1>
      <div className="space-y-3">
        <h3 className="text-gray-700">
          <span className="font-semibold">Subtotal:</span> ${total}
        </h3>
        <h3 className="text-gray-700">
          <span className="font-semibold">Shipping:</span> Free Shipping
        </h3>
        <h3 className="text-gray-800 text-lg">
          <span className="font-bold">Total:</span> ${total}
        </h3>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;
