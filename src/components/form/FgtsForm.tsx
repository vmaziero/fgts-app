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
import InputMask from '../inputMask/InputMask';

function FGTSForm() {
  const navigate = useNavigate();
  const { setCalculoFgts } = useCalculoFgts(); 

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [currency, setCurrency] = useState('');
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

  // const [currency, setCurrency] = useState<string>("");

  const handleCurrencyChange: (maskedValue: string) => void = (maskedValue) => {
    setCurrency(maskedValue);
  };

  const currencyPrefix = "R$ ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let currencyString = (currency.replace(/\D/g, ""));
    currencyString = (currencyString.replace(/(\d)(\d{2})$/, "$1.$2"));
    const currencyNumber = parseFloat(currencyString);

    const internationalNumber = "+55" + telefone.replace(/\D/g, '');

    const numeroValido = await validaTelefone(internationalNumber);
    if(!numeroValido) {
      alert('Telefone inválido.');
      return;
    }

    const saque = calcularSaqueAniversario(currencyNumber);

    setCalculoFgts({
        nome,
        telefone,
        saldo: currencyNumber,
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
          <InputMask
            prefix={currencyPrefix}
            mask="currency"
            value={currency}
            onValueChange={handleCurrencyChange}
            placeholder="ex.: R$ 5.000,00"
          />
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
