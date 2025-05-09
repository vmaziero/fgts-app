import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { calcularSaqueAniversario } from '../../utils/fgts';
import { useCalculoFgts } from '../../context/CalculoFgtsContext';
import { useMask } from "../../hooks/useMask";
import { formatCurrency, formatPhone } from "../../utils/formatters";
import { validaTelefone } from '../../services/validaTelefone';
import {
  Form,
  Row,
  FormGroup,
  ButtonSubmit,
  ButtonWrapper
} from './FgtsForm.styles';

function FGTSForm() {
  const navigate = useNavigate();
  const { setCalculoFgts } = useCalculoFgts(); 

  const [nome, setNome] = useState('');
  const [mes, setMes] = useState('');

  const {
    value: telefone,
    raw: telefoneRaw,
    onChange: setTelefone
  } = useMask(formatPhone);

  const { 
    value: currency, 
    raw: currencyRaw, 
    onChange: setCurrency 
  } = useMask(formatCurrency);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currencyNumber = parseFloat(currencyRaw.replace(/(\d)(\d{2})$/, "$1.$2"));

    const internationalNumber = "+55" + telefoneRaw;

    // Valida o telefone antes de continuar com o submit
    const numeroValido = await validaTelefone(internationalNumber);
    if (!numeroValido) {
      alert('Telefone inválido.');
      return; // Impede o submit caso o telefone seja inválido
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
      <Row>
        <FormGroup>
          <label htmlFor="nome">Qual seu nome?</label><br />
          <input 
            id="nome"
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="ex.: Guilherme Neves"
            required />
        </FormGroup>

        <FormGroup>
          <label htmlFor="telefone">Qual seu telefone?</label><br />
          <input 
            id="telefone"
            type="tel" 
            value={telefone} 
            onChange={setTelefone} 
            placeholder="ex.: (21) 98765-9087"
            required />
        </FormGroup>
      </Row>

      <Row>
        <FormGroup>
          <label htmlFor="saldo">Qual seu saldo?</label><br />
          <input
            id="saldo"
            type="text"
            value={currency}
            onChange={setCurrency}
            placeholder="ex.: R$ 5.000,00"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="mes">Qual seu mês de aniversário?</label><br />
          <select id="mes" value={mes} onChange={(e) => setMes(e.target.value)} required>
            <option value="">Selecione</option>
            {meses}
          </select>
        </FormGroup>
      </Row>

      <ButtonWrapper>
        <ButtonSubmit type="submit">Ver Proposta</ButtonSubmit>
      </ButtonWrapper>

    </Form>
  );
}

export default FGTSForm;