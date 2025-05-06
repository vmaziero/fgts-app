import { HTMLFormMethod, useNavigate } from 'react-router-dom';
import { FormEventHandler, useState } from 'react';
import { calcularSaqueAniversario } from '../../utils/fgts';
import { useCalculoFgts } from '../../context/CalculoFgtsContext';
import { validaTelefone } from '../../services/validaTelefone';
import {
  Form,
  FormRow,
  FormGroup,
  ButtonSubmit,
  ButtonWrapper
} from './FgtsForm.styles';

function FGTSForm() {
  const navigate = useNavigate();
  const { setCalculoFgts } = useCalculoFgts(); 

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [saldo, setSaldo] = useState('');
  const [mes, setMes] = useState('');

  const meses = [
    'Janeiro', 
    'Fevereiro', 
    'Março', 
    'Abril',
    'Maio', 
    'Junho', 
    'Julho', 
    'Agosto',
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ].map((mes, idx) => (
    <option key={idx} value={mes}>{mes}</option>
  ));

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaldo(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const saldoNumber = parseFloat(saldo);

    const internationalNumber = "+55" + telefone.replace(/\D/g, '');

    const numeroValido = await validaTelefone(internationalNumber);
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
          <input type="tel" value={telefone} onChange={handlePhoneChange} required />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <label>Qual seu saldo?</label><br />
          <input value={saldo} onChange={handleCurrencyChange} required />
        </FormGroup>

        <FormGroup>
          <label>Qual seu mês de aniversário?</label><br />
          <select value={mes} onChange={(e) => setMes(e.target.value)} required>
            <option value="">Selecione</option>
            {meses}
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
