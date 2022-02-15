import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import Utilities from '../../Utilities/Utilities';
import HomeSearch from '../Search/HomeSearch';
import { useSelector} from 'react-redux';

const Shop = () => {
  const ProductValue=useSelector((proDetails)=>{
    return proDetails;
 
      });
  return (
    <div>
          <Utilities/>
       <Header/>

       <div className='row mt-5'>
       <h1 className="mb-5 d-flex justify-content-center mt-5"> Shop</h1>

       </div>
       {ProductValue.search===''?<Body/>:<HomeSearch/>}
      <Footer/>


    </div>
  )
}

export default Shop