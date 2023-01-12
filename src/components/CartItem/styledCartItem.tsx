import styled from "styled-components";

export const StyledCartItem = styled.section`
  width: 90%;
  margin-bottom: 2vh;
  margin-left: 5%;
  border: solid 1px pink;

  .CartItemInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .CartItemDetails {
    /* border: solid 1px purple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  }

  .CartItemImage {
    height: 7rem;
    width: 7rem;
  }

  .CartItemValues {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0% 5%;
    padding: 0% 2%;
  }
`;
