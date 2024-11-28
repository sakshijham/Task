import React from 'react';
import Footer from './Footer';


const Pages = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
    
      <header className="bg-gray-900 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover our journey, values, and the quality products we bring to your doorstep.
        </p>
      </header>

     
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to our online store! Our mission is to provide premium-quality products at
            competitive prices, tailored to your needs. Whether you're looking for trendy apparel,
            elegant jewelry, or the latest electronics, we have you covered. We take pride in our
            commitment to excellent customer service and ensuring your satisfaction with every
            purchase.
          </p>
        </div>
      </section>

      
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                alt="Men's Clothing"
                className="mx-auto mb-4 rounded-full w-24 h-24"
              />
              <h3 className="text-xl font-bold mb-2">Men's Clothing</h3>
              <p className="text-gray-600">
                Discover a variety of stylish and comfortable clothing for men. Perfect for any
                occasion!
              </p>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
                alt="Women's Clothing"
                className="mx-auto mb-4 rounded-full w-24 h-24"
              />
              <h3 className="text-xl font-bold mb-2">Women's Clothing</h3>
              <p className="text-gray-600">
                Explore our range of elegant and trendy clothing for women, crafted to suit every
                style.
              </p>
            </div>

           
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                alt="Jewelry"
                className="mx-auto mb-4 rounded-full w-24 h-24"
              />
              <h3 className="text-xl font-bold mb-2">Jewelry</h3>
              <p className="text-gray-600">
                Enhance your look with our exquisite collection of fine jewelry for every occasion.
              </p>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-transform">
              <img
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="Electronics"
                className="mx-auto mb-4 rounded-full w-24 h-24"
              />
              <h3 className="text-xl font-bold mb-2">Electronics</h3>
              <p className="text-gray-600">
                Upgrade your lifestyle with the latest gadgets and electronics from top brands.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We believe in offering the best products that bring joy, style, and functionality to
            your life. With our extensive collection, we're dedicated to ensuring you find exactly
            what you need, when you need it.
          </p>
        </div>
      </section>

     
      
      <Footer/>
    </div>
  );
};

export default Pages;
