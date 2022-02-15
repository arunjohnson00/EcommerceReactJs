
import Header from '../Header/Header';
import CarouselSlider from '../Carousel/CarouselSlider';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import HomeSearch from '../Search/HomeSearch';

import { useSelector, useDispatch} from 'react-redux';
function App() {
  const ProductValue=useSelector((proDetails)=>{
    return proDetails;
 
      });
      
  return (
    
    <div className="App">

      
      <Header/>
      
      <CarouselSlider/>
{ProductValue.search===''?<Body/>:<HomeSearch/>}

      


      <Footer/>
   
    </div>
  );
}

export default App;
