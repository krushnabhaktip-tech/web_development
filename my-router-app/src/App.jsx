import React from "react";
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from "./Home.jsx";
import CartPage from "./Cart.jsx";
import PageNotFound from "./PageNotFound.jsx";
import FirstPage from "./FirstPage.jsx";

function App(){
    return( 
      <BrowserRouter>
      <nav>
        <Link to ="/home">Home</Link> " "
        <Link to ="/cart">Cart</Link>
         
        </nav>

        <Routes>
          <Route path ="/" element={<FirstPage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/Cart" element ={<CartPage />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    );
}
export default App