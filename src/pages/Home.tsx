import FGTSForm from '../components/FgtsForm';
import styled from 'styled-components';

const FormBox = styled.div`
  background: #fff;
  padding: 2rem;
  color: #000;
  border-radius: 10px;
`;

const StructureBox = styled.div`
  width: 90%;
  max-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
`;

const CopyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  align-items: center;
`;

const CopyColumn1 = styled.div`
  flex: 1 1 100%;

  @media (min-width: 768px) {
    flex: 1 1 55%;
  }
`;

const CopyColumn2 = styled.div`
  flex: 1 1 100%;

  @media (min-width: 768px) {
    flex: 1 1 35%;
  }
`;

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <StructureBox>
        <CopyRow>
          <CopyColumn1>
            <h1>Use uma grana que já é sua e saia do aperto.</h1>
          </CopyColumn1>
          <CopyColumn2>
            <h2>Saque Aniversário</h2>
            <p><strong>Insira seus dados</strong> e verifique o quanto você poderá receber!</p>
          </CopyColumn2>
        </CopyRow>
        <FormBox>
          <FGTSForm />
        </FormBox>  
      </StructureBox>
    </div>
  );
}

export default Home;
