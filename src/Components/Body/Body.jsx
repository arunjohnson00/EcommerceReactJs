import React,{useState}  from 'react'
import ProSlider from './ProSlider';
import ElectronicSlider from './ElectronicSlider';
import JewelerySlider from './JewelerySlider'
import MensSlider from './MensSlider';
import WomensSlider from './WomensSlider';
import Utilities from '../../Utilities/Utilities';

function Body() {


  return (
    <div>
      <Utilities/>
     <ProSlider/>
     <ElectronicSlider />
     <JewelerySlider/>
     <MensSlider/>
     <WomensSlider/>
    </div>
  )
}

export default Body