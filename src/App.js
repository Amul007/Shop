import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/Shop-context';

const App = () => (
   <div className="App">
      <ShopContextProvider>
         <Router>
            <Navbar />
            <Routes>
               <Route path='/' Component={Shop} />
               <Route path='/cart' Component={Cart} />
            </Routes>
         </Router>
      </ShopContextProvider>
   </div>

);

export default App;
