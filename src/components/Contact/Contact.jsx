import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons/Button'

const StyleContact = styled.div`
    width:100%;
    height: 40vh;
    background-color:rgb(31 45 61);
`

const StyleContactContent = styled.div`
    width: 50%;
    height: 100%;
    padding: 3rem;
`

function Contact() {
  return (
    <StyleContact className='text-white'>
    <StyleContactContent className='container d-flex flex-column align-items-center justify-content-center'>
        <p style={{textAlign:"center",fontSize:"0.9rem"}}>Start working with <span className='text-primary'>Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
        <Button text={"Contact Us"}/>
    </StyleContactContent>
    </StyleContact>
  )
}

export default Contact