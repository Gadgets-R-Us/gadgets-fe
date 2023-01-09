import styled from "styled-components";

export const StyledCategoryWrapper = styled.section`
  display: grid;
  flex-direction: column;
  width: 90vw;
  margin-left: 5vw;
  padding-top: 8vh;

  .Subheader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3vh;
  }

  .Items {
    display: flex;
    flex-direction: column;
  }
`;
