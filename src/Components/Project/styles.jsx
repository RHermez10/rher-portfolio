import styled from "styled-components";

export const $ProjectContent = styled.div`
  display: flex;
  gap: 10rem;
  padding: 0rem 2rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }

  img {
    border-radius: 3px;
    height: 400px;
  }
`;

export const $InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    margin-top: 30px;
  }
`;

export const $Title = styled.h4`
  color: var(--text);
  text-transform: uppercase;
  font-style: italic;
  font-size: 30px;
`;

export const $Text = styled.p`
  color: var(--text);
  max-width: 550px;
  font-size: 22px;
`;

export const $Link = styled.a`
  text-decoration: none;
  color: black;
  background-color: white;
  padding: 10px;
  border: none;
  font-size: 15px;
  &:hover {
    background-color: var(--third-color);
  }
`;
