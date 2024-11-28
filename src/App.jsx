import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Pages from './Components/About'
import Shop from './Components/Shop'
import { Provider } from 'react-redux'
import store from './redux/store';
import CartPage from './Components/CartPage'
import ProductDetail from './Components/ProductDetail'
import { useState,useEffect } from 'react'
import axios from 'axios';
import 'flowbite';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute'




function App() {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetch();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
      
    

        <Routes>
          
          <Route element={<ProtectedRoute/>}>
          <Route path='/' element={<Home posts={posts} />} />
          <Route path='/shop' element={<Shop posts={posts}/>} />
          <Route path='/page' element={<Pages />} />
        
          <Route path='/cart' element={<CartPage />} />
          <Route path='/products/:productId' element={<ProductDetail posts={posts}/>}/>
           </Route>

          <Route path='/login' element={<Login/>}/>

        </Routes>
       
      </Router>
      
    </Provider>
  )
}

export default App
