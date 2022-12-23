import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  width: 100%;
  background: white;
  padding: 8rem 0;
`;
export const NewsletterWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-family: 'Graphik', sans-serif;
    font-weight: 500;
    font-size: 35px;
    color: #232323;
    margin-bottom: 3.5rem;
  }
  @media (max-width: 560px) {
    width: 90%;
  }
`;
export const InputGroup = styled.form`
  width: 60%;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  display: flex;
  align-items: center;
  height: 65px;
  input {
    font-family: 'Graphik', sans-serif;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: none;
    padding: 1rem 0.5rem 1rem 1.5rem;
    font-size: 1.4rem;
    font-weight: 300;
    color: black;
    outline: none;
    &::placeholder {
      font-size: 1.2rem;
      font-weight: 300;
      color: #777374;
    }
  }
  button {
    background: transparent;
    border: none;
    padding: 0;
    svg {
      width: 80px;
      margin-top: 3px;
    }
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 560px) {
    input {
      &::placeholder {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 375px) {
    height: 45px;
    input {
      &::placeholder {
        font-size: 0.8rem;
      }
    }
    button {
      svg {
        width: 50px;
      }
    }
  }
`;
