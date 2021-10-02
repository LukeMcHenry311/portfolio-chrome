import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8 rem;
  line-height: 1.3 rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  // eslint-disable-next-line react/destructuring-assignment
  console.log(children);
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}
