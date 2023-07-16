import styled from "styled-components";

export const $ImageCard = styled.div`
  position: relative;

  img {
    border-radius: 10px;
    width: 200px;
    height: 300px;
  }

  div:last-child {
    margin-top: 1rem;
  }
`;

export const $Overlay = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 200px;
  height: 300px;
  transition: 0.5s ease;
  opacity: 0;
  background-color: var(--mainColor);

  &:hover {
    opacity: 100;
  }

  @media (max-width: 600px) {
    margin: auto;
    top: -39px;
  }
`;

export const $Link = styled.a`
  border: 2px solid var(--mainColor);
  background-color: var(--mainColor);
  color: white;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    background-color: white;
    color: var(--mainColor);
  }
`;

export const $Title = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 100;
  color: var(--text);
  font-size: 30px;
  transform: translate(-50%, -50%);
  text-align: center;
`;