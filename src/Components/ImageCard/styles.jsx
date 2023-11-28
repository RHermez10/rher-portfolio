import styled from "styled-components";

export const $ImageCard = styled.div`
display: flex;
gap: 12rem;
  img {
border-radius: 5px;
    width: 300px;
    height: 300px;
  }

  div:last-child {
    margin-top: 1rem;
  }
`;

export const $Title = styled.h4`
    margin-top: -22px;
  color: var(--text);
  text-transform: uppercase;
  font-style: italic;
  font-size: 30px;

`;

export const $Text = styled.p`
color: white;
max-width: 500px;
font-size: 22px;

`

export const $InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;


`

