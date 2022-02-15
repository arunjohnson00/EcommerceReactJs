
import {  useDispatch } from 'react-redux';
import axios from 'axios';
import {useEffect, useState} from 'react'


const Utilities = () => {

    const[productData,setProductData]=useState([]);
    const dispatch=useDispatch();

axios.get('Json/Products.json')
  .then(function (response) {
    // handle success
     setProductData(response.data)
     dispatch({
     type:'ProductData',
     productData:productData
    })
  
  })


useEffect(()=>{

  console.log("clear")
},[productData])


 

   
  return (
    <div></div>
  )
}

export default Utilities