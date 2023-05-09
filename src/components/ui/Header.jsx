import styled from 'styled-components';

const Header = () => {
  return (
    <StContainer>
      <StTitle>MY TASKS</StTitle>
    </StContainer>
  );
};
export default Header;

const StContainer = styled.div`
  font-family: 'Poppins';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1007px;
  margin: auto;
`;

const StTitle = styled.h1`
  color: #353535;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
`;
