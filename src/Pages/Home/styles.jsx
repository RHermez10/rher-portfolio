import styled, { keyframes } from "styled-components";

export const $Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 5rem;
  text-align: center;
  background-color: var(--mainColor);
  color: var(--text);
  height: 100vh;
  padding: 0 2rem;

  h1 {
        margin-top: -25px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 60px;
  }

   @media (max-width: 600px) {

    h1{
          font-size: 40px;
    }
  }
`;

const test = keyframes`
 to {
    background-position: 200% center;
  }
`


export const $Animation = styled.h3`

 text-transform: uppercase;
  // background-image: linear-gradient(
  //   -225deg,
  //   #c14aff 0%, #9502cf 29%, #8600ff 67%, #3f0af7 100%
  // );

  background-image: linear-gradient(
    -225deg, #00ffa1 0%, #0ded9a 29%, #02a065 67%, #027d61 100%
  );
  background-size: 200% auto;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;

  animation: ${test} 8s infinite;
  
  margin-bottom: 40px;
          font-style: italic;

  @media (max-width: 600px) {
     font-size: 25px;
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