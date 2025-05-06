import styled from "styled-components";

export const FormBox = styled.div`
  background: #fff;
  padding: 2rem;
  color: #000;
  border-radius: 10px;
`;

export const StructureBox = styled.div`
  width: 90%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

export const CopyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  align-items: center;
`;

export const CopyColumn1 = styled.div`
  flex: 1 1 100%;

  @media (min-width: 768px) {
    flex: 1 1 55%;
  }
`;

export const CopyColumn2 = styled.div`
  flex: 1 1 100%;

  @media (min-width: 768px) {
    flex: 1 1 35%;
  }
`;