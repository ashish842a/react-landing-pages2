import React from 'react';
import styled from 'styled-components';
import KeyFeatureicon from './KeyFeatureicon';

const StyleRespeactdiv = styled.div`
  height: 100%;
  width: 22%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding:10px 0;

  &:hover {
    transform: translateY(-20px); /* Fixed the typo and added transform property */
    transition:3s cubic-bezier(0.19, 1, 0.22, 1)
  }

  @media (max-width: 768px) {
    /* Add styles for screen sizes smaller than 768px */
 
    width: 100%;
   
  }
`;

function KeyFeatureRepeatDiv(props) {
  return (
    <StyleRespeactdiv className="d-flex flex-column justify-content-center">
      <KeyFeatureicon classType={props.classType} />
      <div className="container mt-4">
        <h6>{props.title}</h6>
        <p style={{opacity:"0.5"}}>{props.para}</p>
        <a href=".." style={{opacity:"0.8"}}>{props.read}</a>
      </div>
    </StyleRespeactdiv>
  );
}

export default KeyFeatureRepeatDiv;
