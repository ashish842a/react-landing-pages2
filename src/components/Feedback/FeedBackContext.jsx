import React from 'react';
import styled from 'styled-components';

const StyledFeedbackContext = styled.div`
  /* Add your custom styles for the feedback context */
  color: white;
  margin-top: 4rem; /* Adjust top margin as needed */
  height: 50%; /* You may want to specify a fixed height or adjust as needed */
`;

function FeedBackContext(props) {
//   const isLandrickPresent = props.title.includes("Landrick");

  return (
    <StyledFeedbackContext className={`col-sm-6`}>
      <h4 style={{ fontSize: "0.9rem" }}>
        {/* {isLandrickPresent
          ? props.title.replace('Landrick', <span style={{ color: 'blue' }}>Landrick</span>)
          : props.title} */}
          {props.title}
      </h4>
      <p style={{ opacity: "0.6" }}>{props.para}</p>
    </StyledFeedbackContext>
  );
}

export default FeedBackContext;
