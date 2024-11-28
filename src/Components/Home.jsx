import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Footer from './Footer';

const Home = ({ posts }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Carousel />
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {posts?.map((e) => (
              <div
                key={e.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
              >
              
                <img
                  className="w-full h-48 object-contain mx-auto"
                  src={e.image}
                  alt={e.title}
                />

              
                <div className="p-4 flex flex-col flex-grow">
                  <Link to={`/products/${e.id}`}>
                    <div className="font-semibold text-lg mb-2 ">
                      {e.title}
                    </div>
                  </Link>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {e.description}
                  </p>

                
                  <div className="mt-auto flex justify-between items-center">
                    <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      ${e.price}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(addToCart({ title: e.title, image: e.image, price: e.price }))
                      }
                      className="bg-yellow-800 text-white text-sm font-semibold px-3 py-1 mx-3 rounded-full hover:bg-yellow-800"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
