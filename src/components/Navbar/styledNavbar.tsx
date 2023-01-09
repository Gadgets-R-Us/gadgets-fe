import styled from "styled-components";

export const StyledNavbar = styled.section`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 100%;

  .Logo {
    height: 2rem;
    width: 2rem;
  }

  .AppInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
