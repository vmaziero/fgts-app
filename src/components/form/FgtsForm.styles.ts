import styled from "styled-components";

export const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  flex: 1 1 100%;

  @media (min-width: 768px) {
    flex: 1 1 45%;
  }

  label {
    font-weight: bold;
    color: #404040;
    line-height: 2rem;
  }

  input, 
  select {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 1rem;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  background: #FFC300;
  color: #fff;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;