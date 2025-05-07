import FGTSForm from '../components/form/FgtsForm';
import logo from '../assets/logo.png';
import {
  Box,
  StructureBox,
  CopyRow,
  CopyColumn1,
  CopyColumn2,
  Logo
} from './styles';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <StructureBox>
        <Logo src={logo} alt='Smile Co.' />
        <CopyRow>
          <CopyColumn1>
            <h1>Use uma grana que já é sua e saia do aperto.</h1>
          </CopyColumn1>
          <CopyColumn2>
            <h2>Saque Aniversário</h2>
            <p><strong>Insira seus dados</strong> e verifique o quanto você poderá receber!</p>
          </CopyColumn2>
        </CopyRow>
        <Box>
          <FGTSForm />
        </Box>  
      </StructureBox>
    </div>
  );
}

export default Home;
