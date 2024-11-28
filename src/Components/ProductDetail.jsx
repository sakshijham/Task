import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = ({ posts }) => {
    const dispatch = useDispatch()
  const { productId } = useParams();
  const product = posts?.find((p) => p.id === parseInt(productId));

  if (!product) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-8">
     
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-contain rounded-lg shadow-lg"
        />
      </div>

     
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {product.title}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>
        <span className="text-2xl font-bold text-blue-600 mb-6 block">
          ${product.price}
        </span>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition" onClick={()=>dispatch(addToCart({title:product.title,image:product.image,price:product.price}))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
