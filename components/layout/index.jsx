import React from 'react';

import { Container, Wrapper } from './styles';

function layout({ children }) {
  return (
    <Container>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

export default layout;