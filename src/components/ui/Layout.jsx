import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;
