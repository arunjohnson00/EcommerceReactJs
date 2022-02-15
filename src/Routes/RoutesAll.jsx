import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../Components/Home/Home';
import Shop from '../Components/Shop/Shop';
import SearchView from '../Components/Search/SearchView'
import Category from '../Components/Category/Category';


const RoutesAll = () => {


  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/search" element={<SearchView />} />
  
 
    <Route path="/electronics" element={<Category Cat='electronics'/>} />
    <Route path="/jewelery" element={<Category Cat='jewelery'/>} />
    <Route path="/men's%20clothing" element={<Category Cat="men's clothing"/>} />
    <Route path="/men's%20clothing" element={<Category Cat="women's clothing"/>} />
  </Routes>
   </BrowserRouter>
  )
}

export default RoutesAll