import React from "react";
import { FiShoppingCart,FiHeart} from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import './BodyStyle.css';
import 'swiper/css';


function MensSlider() {
    const ProductValue=useSelector((proDetails)=>{
        return proDetails;
     
          });
          const dispatch=useDispatch();
  return (
    <div className="container mt-5 mb-5">
    <h1  className="mb-5 d-flex justify-content-center"> Men's Clothing</h1>
 
    <Swiper
       spaceBetween={50}
       slidesPerView={4}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
       breakpoints={{
         100: {
             slidesPerView: 1,
             spaceBetween: 0,
           },
         200: {
             slidesPerView: 1,
             spaceBetween: 0,
           },
         300: {
             slidesPerView: 1,
             spaceBetween: 0,
           },
         400: {
             slidesPerView: 1,
             spaceBetween: 0,
           },
         500: {
             slidesPerView: 1,
             spaceBetween: 0,
           },
         640: {
           slidesPerView: 2,
           spaceBetween: 10,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 10,
         },
         1024: {
           slidesPerView: 4,
           spaceBetween: 20,
         },
       }}
     >
 
 {ProductValue.productDetails.filter((filterData) =>{
        return filterData.category === "men's clothing";
    }).map(
     
     
     (ProductData, i) => {
     return <SwiperSlide key={i}>
     <div className="product-card">
     <div className="badge">Hot</div>
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
                 <a href=""><FiHeart/></a>
                 <a  onClick={()=>{dispatch({type:'cart',productCart:[ProductData.title,ProductData.price,ProductData.image]})}}> <FiShoppingCart/></a>
             </div>
         </div>
     </div>
 </div>
 </SwiperSlide>
 })
     
     
     
     }
  
        
 
     </Swiper>
 
 
 
 
 
 </div>
  )
}

export default MensSlider