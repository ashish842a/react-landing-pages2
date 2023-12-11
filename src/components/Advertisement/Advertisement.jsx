import React from 'react';
import styled from 'styled-components';
import AddDetails from './AddDetails';

const StyleAdvertisement = styled.div`
    width:100%;
    height:65px;
    border-top: 1px solid #ffffff2b;
    border-bottom: 1px solid #ffffff2b;
    /* background-color: #fff; */
`

const StyleDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   

`

const AddDetailsData = [
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/amazon.b99a7cc44be45747096d49c9cb2ffe77.svg"
  },
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/google.fc295ce963de13e6f58e4934f288298f.svg"
  },
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/lenovo.b0f22f8b71ec4c51e6a8e2b10a85b998.svg"
  },
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/paypal.2a7be383aae46294cfc76c258d7f3de8.svg"
  },
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/shopify.a3ea771201c81cd264d5a55f469adc96.svg"
  },
  {
    imgUrl:"http://landrick.react-dark.themesbrand.com/static/media/shopify.a3ea771201c81cd264d5a55f469adc96.svg"
  },
]

function Advertisement() {
  return (
    <StyleAdvertisement>
        <StyleDetails className="container text-white p-4" style={{width:"100%",height:"100%"}}>

        {AddDetailsData && AddDetailsData.map((elem,index)=>{
            return <AddDetails key={index} imgUrl={elem.imgUrl}/>
        })}
            
          
        </StyleDetails>
    </StyleAdvertisement>
  )
}

export default Advertisement