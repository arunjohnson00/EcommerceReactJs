import React from 'react'
import Utilities from '../../Utilities/Utilities';
import { useSelector, useDispatch} from 'react-redux';
import { FiShoppingCart,FiHeart} from "react-icons/fi";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeSearch from '../Search/HomeSearch'

const Category = (props) => {
  
    const ProductValue=useSelector((proDetails)=>{
        return proDetails;
     
          });
          const dispatch=useDispatch();

          
  return (
    <div >
        
      <Utilities/>
              <Header/>
      <div className="container pt-5">
        <h1 className="pt-5">{
        props.Cat
}</h1>
    <div className="row justify-content-around align-items-stretch align-content-around mt-5" >
{ProductValue.search!==''?<HomeSearch/>:null}

{ProductValue.productDetails.filter((filterData) =>{
        return filterData.category === props.Cat;
    }).map(
    (ProductData, i) => {
    return <div className="product-card mb-5" key={i} style={{width:'280px'}}>
   
    <div className="product-tumb">
    <img src={ProductData.image} alt=""/>
    </div>
    <div className="product-details">
    <span className="product-catagory">{ProductData.category}</span>
    <h4><a href="">{ProductData.title.substring(0, 30)}</a></h4>
    <p>{ProductData.description.substring(0, 100)}</p>
    <div className="product-bottom-details">
    <div className="product-price"><small></small> ₹ {ProductData.price}</div>
    
    <div className="product-links d-flex justify-content-around align-self-center align-items-center">
                <FiHeart/>
                <a  onClick={()=>{dispatch({type:'cart',productCart:[ProductData.title,ProductData.price,ProductData.image]})}}> <FiShoppingCart/></a>
            </div>
        </div>
    </div>
  
</div>

})
    
    
    
    }


    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Category