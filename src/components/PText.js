import React from 'react';
import styled from 'styled-components';
import './PText.css';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.3 em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;


const PText = ({ children }) => {
  const textStyle = {
    color: 'black;',
    fontSize: '16px',
    // Add any other desired styles here
  };

  return (
    <PStyle className="para"> {/* Use the PStyle component */}
      <p style={textStyle}>{children}</p>
    </PStyle>
  );
};

export default PText;