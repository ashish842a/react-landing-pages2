import React from 'react';
import styled from 'styled-components';
import FeedBackContext from './FeedBackContext';

const StyleFeedBackDiv = styled.div`
  width: 100%;
  /* height: 60vh; */
  padding: 0 7rem;
  font-size: 0.7rem;
  background-color:rgb(31 45 61);
`;

const FeedBackDetails = [
  {
    title: "How our Landrick work ?",
    para:
      "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.",
  },
  {
    title: "What is the main process open account ?",
    para:
      "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact",
  },
  {
    title: "How to make unlimited data entry ?",
    para:
      "Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.",
  },
  {
    title: "Is Landrick safer to use with my account ?",
    para:
      "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.",
  },
];

function Feedback() {
  return (
    <StyleFeedBackDiv>
      {FeedBackDetails.reduce((rows, feedback, index) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(
          <FeedBackContext key={index} title={feedback.title} para={feedback.para} />
        );
        return rows;
      }, []).map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row}
        </div>
      ))}
    </StyleFeedBackDiv>
  );
}

export default Feedback;
