import styled from "styled-components";

export const $ProjectWrapper = styled.section`
background-color: var(--mainColor);
padding: 10px 10px 60px 10px;
  h1 {
    text-align: center;
    color: var(--third-color);
    padding-bottom: 5rem;
        margin-top: 6rem;
    font-size: 30px;
  }
`;

export const $Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
`;