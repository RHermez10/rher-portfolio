import styled from "styled-components";

export const $Wrapper = styled.div`
  text-align: center;
  background-color: var(--mainColor);
  color: var(--text);
  height: 100vh;
  padding: 0 2rem;

  > div {
    padding-top: 16rem;
  }

  h1 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 40px;
    font-style: italic;
  }
`;

export const $Animation = styled.div`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 35px;
  margin-top: 20px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    span {
      white-space: pre-line;
    }
  }
`;

export const $Button = styled.a`
  border: none;
  padding: 20px 25px;
  border-radius: 5px;
  margin-top: 3rem;
  transition: 0.4s;
  cursor: pointer;
  font-family: "Sora",sans-serif;
  font-size: 13px;
  background-color: white;
  text-decoration: none;
  color: var(--mainColor);

  &:hover {
    background-color: var(--mainColor);
    color: var(--text);
    border: 3px solid white;
  }
`;