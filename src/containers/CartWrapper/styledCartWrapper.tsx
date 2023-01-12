import styled from "styled-components";

export const StyledCartWrapper = styled.section`
  margin-top: 8vh;
  width: 90vw;
  margin-left: 5vw;
  border: red solid 3px;

  .Header {
    border-bottom: solid 1px red;
    margin: 0% 5%;
    padding: 0% 2%;
  }

  .CartSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid 1px red;
    margin: 0% 5%;
    padding: 0% 2%;
  }

  .Checkout {
    margin-top: 2vh;
  }
`;
