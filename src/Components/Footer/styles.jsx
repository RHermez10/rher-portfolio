import styled from "styled-components";

export const $FooterWrapper = styled.div`
  background-color: var(--mainColor);
  color: var(--text);
  font-family: "Roboto Flex", sans-serif;
  text-align: center;
  padding: 1rem;

  svg {
    margin-bottom: -2px;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
`;

export const $SocialMediaContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 1rem;

  a {
    opacity: 80%;
    color: var(--text);
  }

  a:hover {
    opacity: 100%;
  }
`;