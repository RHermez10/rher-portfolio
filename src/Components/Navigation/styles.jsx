import styled from "styled-components";

export const $Header = styled.header`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: var(--mainColor);
  color: var(--text);
  cursor: pointer;
`;

export const $Logo = styled.h3`
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-size: 40px;
`;

export const $Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  @media (max-width: 1024px) {
    display: ${({ open }) => !open && "none"};
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    width: 100%;
    height: 100vh;
    background-color: var(--mainColor);
  }
`;

export const $NavLink = styled.a`
  font-family: "Roboto Flex", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: var(--text);
  text-decoration: none;
  padding: 0.5rem;
  transition: 0.3s;
  &:hover {
    background-color: var(--secondaryColor);
    color: var(--mainColor);
  }
`;

export const $Button = styled.button`
  visibility: hidden;
  background: transparent;
  border: none;
  color: white;
  @media (max-width: 1024px) {
    visibility: visible;
    z-index: 1;
  }
`;