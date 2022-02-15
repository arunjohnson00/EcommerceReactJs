import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function CartCounter() {
    const ProductValue=useSelector((proDetails)=>{
        return proDetails;
     
          });

  return (
    <div className='CartCount'>{ProductValue.ProductToCart.map(Cartitem=>{
        return [Cartitem[0],Cartitem]
    }).filter(val => {
        return val[0]
    }).length}</div>
  )
}

export default CartCounter