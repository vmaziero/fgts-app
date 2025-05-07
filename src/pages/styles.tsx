import styled from "styled-components";

export const Box = styled.div`
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1 1 100%;
  align-items: center;

  @media (min-width: 768px) {
    flex: 1 1 45%;
  }

  label {
    display: block;
    font-weight: bold;
    color: #404040;
  }

  input, 
  select {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    box-sizing: border-box;
  }
`;

export const FinalValue = styled.span`
  font-size: 3rem;
  font-weight: 600; 
  color: #168590;
  `;

  export const Result = styled.div`
    height: auto;
    text-align: center;
  `;

  export const Cifrao = styled.span`
    font-size: 1.4rem;
    margin-right: 10px;
  `;

  export const Subtitle = styled.span`
    color: #168590;
    font-weight: bold;
    font-size: 1.3rem;
  `;

  export const BoldText = styled.span`
    font-weight: bold;
    color: #168590;
  `;

  export const Logo = styled.img`
    width: 120px;
    height: auto;
  `;
