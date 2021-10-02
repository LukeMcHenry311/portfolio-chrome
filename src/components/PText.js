import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.3 em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
