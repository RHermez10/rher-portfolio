import styled from "styled-components";

export const $ProjectWrapper = styled.section`
  padding: 15rem 0rem 8rem 0rem;
  h1 {
    color: var(--thirdColor);
    padding-bottom: 4rem;
  }
`;

export const $Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 1110px) {
    flex-wrap: wrap;
    gap: 5rem;
    width: 500px;
    margin: auto;
  }

  @media (max-width: 600px) {
    width: 0;
  }
`;