import styled from "styled-components";

export const $AboutWrapper = styled.section`
  text-align: center;
  margin: auto;
  width: 70%;
  padding: 20rem 0rem 16rem 0rem;
  P{
    font-family: "Didact Gothic", sans-serif;
    font-size: 25px;
  }
  h1 {
        font-size: 30px;
    padding-bottom: 16px;
    font-family: "Sora", sans-serif;
  }

    @media (max-width: 1024px) {
        padding: 9rem 0rem 14rem 0rem;

        P{
             font-size: 22px;
        }
  }
`;