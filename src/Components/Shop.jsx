import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import PriceSlider from './PriceSlider';
import { CgCloseO } from "react-icons/cg";
import Footer from './Footer';

const Shop = ({ posts }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handlePriceFilter = (minPrice) => {
    const filtered = posts.filter((post) => post.price >= minPrice);
    setFilteredPosts(filtered);
  };

  const clearData = () => {
    setQuery('');
  };

  return (
    <>
      <div className="flex h-screen font-sans">
        <div className="w-1/4 bg-gray-100 p-4">
          <SideBar posts={posts} setData={setFilteredPosts} />
          <div className="mt-4">
            <PriceSlider minPrice={0} maxPrice={1000} onApply={handlePriceFilter} />
          </div>
        </div>

        <div className="flex-1 flex flex-col p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Here"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="w-full p-2 border border-gray-300 rounded pr-10"
            />
            <CgCloseO
              onClick={clearData}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
              size={30}
            />
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredPosts
                ?.filter((post) => post.title.toLowerCase().includes(query))
                .map((e) => (
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
                        <div className="font-semibold text-lg mb-2">
                          {e.title}
                        </div>
                      </Link>
                      <p className="text-gray-600 text-sm line-clamp-3">{e.description}</p>

                    
                      <div className="mt-auto flex justify-between items-center">
                        <span className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full">
                          ${e.price}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(addToCart({id:e.id, title: e.title, image: e.image, price: e.price ,quantity:1}))
                          }
                          className="bg-yellow-800 text-white text-sm font-semibold px-3 py-1 mx-3 rounded-full hover:bg-yellow-700"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Shop;
