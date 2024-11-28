import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removefromCart } from '../redux/cartSlice';
import CartTotal from './CartTotal';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
          
            <div className="flex-grow overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="py-4 px-4 text-left w-2/5">Product</th>
                    <th className="py-4 px-4 text-center w-1/5">Quantity</th>
                    <th className="py-4 px-4 text-right w-1/5">Price</th>
                    <th className="py-4 px-4 text-center w-1/5">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-4 flex items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-contain rounded-lg mr-4"
                        />
                        <div>
                          <h4 className="text-lg font-semibold">{item.title}</h4>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">1</td> {/* Replace '1' with actual quantity */}
                      <td className="py-4 px-4 text-right text-gray-600">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => dispatch(removefromCart(index))}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
            <div className="lg:w-1/3">
              <CartTotal />
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg mt-10">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
