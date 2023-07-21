import styled from "styled-components";

export const $FormWrapper = styled.section`
  width: 70%;
  margin: auto;
  display: flex;
  padding: 12rem 0rem;
  gap: 7rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 3rem;
  }

  h1 {
    color: var(--thirdColor);
    font-family: "Sora", sans-serif;
  }

  h3 {
    font-family: "Sora", sans-serif;
    font-size: 40px;
    margin-top: 25px;
    color: var(--mainColor);
  }

  textarea {
    width: 100%;
    resize: none;
  }
`;

export const $Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  width: 100%;
  flex: 1;
  text-align: left;
`;

export const $MailIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  cursor: pointer;
  margin-top: 7px;
  text-decoration: none;
  color: var(--mainColor)
`;

export const $SendButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 3px solid var(--mainColor);
  margin-top: 5px;
  background-color: var(--mainColor);
  color: var(--text);
  font-family: "Sora", sans-serif;
  font-size: 17px;

  &:hover {
    transition: 0.5s;
    isolation: isolate;
    color: var(--mainColor);
    background-color: white;
  }
`;