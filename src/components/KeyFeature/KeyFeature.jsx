import React from 'react'
import styled from 'styled-components'
import KeyFeatureRepeatDiv from './KeyFeatureRepeatDiv'

const StyleKeyFeature = styled.div`
    width: 100%;
    height: 80vh;
    font-size:0.9rem;
`

const StyleKeyFeatureContent = styled.div`
    width: fit-content;
`   

const StyleRespeactdiv = styled.div`
    height:50vh;
    padding:1rem;
    gap:10px;

    @media (max-width: 768px) {
    /* Add styles for screen sizes smaller than 768px */
    display: flex;
    flex-direction: column;
  }
`

const KeyFeatureRepeactData = [
    {
        title:"Modular",
        para:"Composed in a pseudo-Latin language which more or less corresponds.",
        read:"Read More >",
        classType:"ri-riding-fill"
    },
    {
        title:"Responsive",
        para:"Composed in a pseudo-Latin language which more or less corresponds.",
        read:"Read More >",
        classType:"ri-subway-wifi-fill"
    },
    {
        title:"Customizable",
        para:"Composed in a pseudo-Latin language which more or less corresponds.",
        read:"Read More >",
        classType:"ri-takeaway-fill"
    },
    {
        title:"Scalable",
        para:"Composed in a pseudo-Latin language which more or less corresponds.",
        read:"Read More >",
        classType:"ri-motorbike-fill"
    },

]

function KeyFeature() {
  return (
    <StyleKeyFeature className='text-white p-5'>
    <StyleKeyFeatureContent className='d-flex flex-column ml-3'>
        <h3>Key Features</h3>
        <p style={{opacity:"0.5"}}>Start working with <span className='text-primary'>Landrick</span> that can provide everything you need to generate <br /> awareness, drive traffic, connect.</p>
    </StyleKeyFeatureContent>

    <StyleRespeactdiv className='d-flex justify-content-between '>
    {KeyFeatureRepeactData && KeyFeatureRepeactData.map((elem,index)=>{

        return <KeyFeatureRepeatDiv key={index} title={elem.title} para={elem.para} read={elem.read} classType={elem.classType} />
    })}
       
    </StyleRespeactdiv>

    </StyleKeyFeature>
  )
}

export default KeyFeature