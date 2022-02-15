import React  from 'react'
import { useSelector } from 'react-redux';
import {AiFillCloseCircle} from "react-icons/ai";

function Cart() {


    const ProductValue=useSelector((proDetails)=>{
        return proDetails;
     
          });

    /* console.log([...new Map(ProductValue.ProductToCart.map(Cartitem=>{
            return [Cartitem[0],Cartitem]
        })).values()])*/

        //const dispatch=useDispatch();  
  return (
    <div>{
        [...new Map(ProductValue.ProductToCart.map(Cartitem=>{
            return [Cartitem[0],Cartitem]
        })).values()].map(function(ProName,key){
         return  <li key={key} className="d-flex justify-content-between align-items-center"><img src={ProName[2]} alt={ProName[0]} className="ImgCart"/> <div>{ProName[0]}</div> 
         <div className="d-flex"> <div><b>₹ {ProName[1]} </b></div><div><b>X {ProductValue.ProductToCart.map(Cartitemq=>{
            return [Cartitemq[0],Cartitemq]
        }).filter(item => item[0] === ProName[0]).length} - <AiFillCloseCircle/> </b></div></div></li> 
        })
        
        }
    
    

  
    </div>
  )
}

export default Cart