import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart); // 1.cart from store 2.cart from createSlice
  const [menuOpen, setMenuOpen] = useState(false);
  const userDetail = localStorage.getItem("UserDetail");

  const handleLogout = () => {
    localStorage.removeItem("UserDetail");
    navigate("/login");
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between container mx-auto">
      
      <div className="flex items-center ">
        <div className="text-2xl font-bold mr-20 ">
          <Link>Logo</Link>
        </div>

      
        <div className="hidden md:flex space-x-8 ">
          {userDetail && <Link to="/" className="hover:text-gray-400">Home</Link>}
          {userDetail && <Link to="/shop" className="hover:text-gray-400">Shop</Link>}
          {userDetail && <Link to="/page" className="hover:text-gray-400">About Us</Link>}
        </div>
        </div>

      
        <div className="flex space-x-4 items-center ">
          {userDetail ? (
            <Link to="/login" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="hover:text-gray-400">
              <FaUser />
            </Link>
          )}
          <Link to="/cart" className="relative">
            {userDetail && (
              <div className="relative">
                <FaShoppingCart className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
            )}
          </Link>
        </div>

     
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FaBars />
          </button>
        </div>
      </nav>

      
      {userDetail && (
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-800 p-4`}>
          <Link to="/" className="block text-white py-2 hover:text-gray-400">Home</Link>
          <Link to="/shop" className="block text-white py-2 hover:text-gray-400">Shop</Link>
          <Link to="/page" className="block text-white py-2 hover:text-gray-400">About Us</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
