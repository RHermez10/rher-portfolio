import styled from "styled-components";

export const $ProjectWrapper = styled.section`
background-color: var(--mainColor);
  padding: 5rem 0rem;
  h1 {
    text-align: center;
    color: var(--third-color);
    padding-bottom: 7rem;
    font-size: 30px;
  }
`;

export const $Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10rem;
`;