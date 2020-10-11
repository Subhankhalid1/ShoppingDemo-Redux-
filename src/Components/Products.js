
import React from 'react'
import { useSelector } from "react-redux"

import { state, Add } from './../Reducers/StoreReducer'


function Product() {
    const Product = useSelector((state) => state)

    // return <div>

    //     {Product.map((product, key) => {

    //         return <div id={key}>
    //             {product.counter}
    //             {/* <span

    //                 style={{
    //                     backgroundImage: `url(${product.imageUrl})`
    //                 }}
    //             /> */}
    //             {/* <button onClick={() => state.dispatch(Add(product))}>Add</button> */}
    //         </div>
    //     })}
    // </div>

    return<div>
        {Product.map((items,key)=>{
            return<div  key={key} style={{backgroundColor:"black", minWidth:"400px"}}>
               <h2 style={{color:"aquamarine"}}> {items.title}</h2> 
                <h4 style={{color:"white"}}>{items.description}</h4> 
                
                <img src={items.imageUrl} width={300} alt="shoe"/> <br/>
               <br/>
                <p  style={{color:"red"}}>{items.price} </p> 
                <br/>
                <hr/>
                {/* <button onClick={() => state.dispatch(Add(product))}>Add</button> */}
                </div>
        })} 
      
    </div>
}

export default Product;