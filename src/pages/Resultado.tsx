import { useEffect } from "react";
import { useCalculoFgts } from "../context/CalculoFgtsContext";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/formatters";
import logo from '../assets/logo.png';
import { Subtitle, Box, Cifrao, Column, CopyColumn1, CopyColumn2, CopyRow, FinalValue, Result, Row, StructureBox, BoldText, Logo } from "./styles";

function Resultado() {
  const { calculoFgts } = useCalculoFgts();
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if(!calculoFgts) {
      navigate('/');
    }
  }, [calculoFgts]); 
  
  if(!calculoFgts) {
    return <p>Redirecionando...</p>
  }

  const valorFormatado = formatCurrency(calculoFgts.saque.toFixed(2)).formatted.replace(/^R\$\s?/, '');
  
    return (
      <div style={{ padding: '2rem' }}>
        <StructureBox>
          <Logo src={logo} alt='Smile Co.' />
          <CopyRow>
            <CopyColumn1>
              <h1>Olá, {calculoFgts.nome}!</h1>
            </CopyColumn1>

            <CopyColumn2>
              <h2>Saque Aniversário</h2>
              <p><strong>Insira seus dados</strong> e verifique o quanto você poderá receber!</p>
            </CopyColumn2>
          </CopyRow>

          <Box>
            <Row>
              <Column>
                <Result>
                  <span>
                    <Subtitle>Você pode receber até</Subtitle><br /> 
                      <Cifrao>
                        R$ 
                      </Cifrao>
                    <FinalValue>
                      {valorFormatado}
                    </FinalValue>
                  </span>
                </Result>
              </Column>

              <Column>
                <span><BoldText>Esta simulação traz valores aproximados.</BoldText> Para calcular o valor exato, <BoldText>entre em contato com o Smile.Co a consultar seu saldo no app do FGTS.</BoldText></span>
              </Column>
            </Row>
          </Box>
        </StructureBox>
      </div>
    );
  }

  
  export default Resultado;