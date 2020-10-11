import React from 'react';
import Product from './Components/Products'
import './App.css';

function App() {
  // const Data=useSelector((state)=>state.Data)
  return (
    <div className="App" style={{backgroundColor:"black" , color:"coral"}}>
      <h2>  Shopping Basket </h2>
      <h5>Dear Customers! If you have thinking about to buy our product so please click on product.</h5>
      <Product />
    </div>
  );
}

export default App;
