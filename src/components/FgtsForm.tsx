import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { calcularSaqueAniversario } from '../utils/fgts';
import { useCalculoFgts } from '../context/CalculoFgtsContext';
import { validaTelefone } from '../services/validaTelefone';

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  flex: 1 1 100%;

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

const ButtonSubmit = styled.button`
  margin-top: 1rem;
  padding: 15px 30px;
  font-size: 1rem;
  cursor: pointer;
  background: #FFC300;
  color: #fff;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;


function FGTSForm() {
  const navigate = useNavigate();
  const { setCalculoFgts } = useCalculoFgts(); 

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [saldo, setSaldo] = useState('');
  const [mes, setMes] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const saldoNumber = parseFloat(saldo);

    const numeroValido = await validaTelefone(telefone);
    if(!numeroValido) {
      alert('Telefone inválido.');
      return;
    }

    const saque = calcularSaqueAniversario(saldoNumber);

    setCalculoFgts({
        nome,
        telefone,
        saldo: saldoNumber,
        mes,
        saque
    });

    navigate('/resultado');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormGroup>
          <label>Qual seu nome?</label><br />
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </FormGroup>

        <FormGroup>
          <label>Qual seu telefone?</label><br />
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label>Qual seu saldo?</label><br />
          <input type="number" value={saldo} onChange={(e) => setSaldo(e.target.value)} required />
        </FormGroup>

        <FormGroup>
          <label>Qual seu mês de aniversário?</label><br />
          <select value={mes} onChange={(e) => setMes(e.target.value)} required>
            <option value="">Selecione</option>
            {[
              'Janeiro', 'Fevereiro', 'Março', 'Abril',
              'Maio', 'Junho', 'Julho', 'Agosto',
              'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ].map((mes, idx) => (
              <option key={idx} value={mes}>{mes}</option>
            ))}
          </select>
        </FormGroup>
      </FormRow>

      <ButtonWrapper>
        <ButtonSubmit type="submit">Ver Proposta</ButtonSubmit>
      </ButtonWrapper>

    </Form>
  );
}

export default FGTSForm;
