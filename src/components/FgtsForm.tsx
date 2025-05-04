import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { calcularSaqueAniversario } from '../utils/fgts';
import { useCalculoFgts } from '../context/CalculoFgtsContext';

function FGTSForm() {
  const navigate = useNavigate();
  const { setCalculoFgts } = useCalculoFgts(); 

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [saldo, setSaldo] = useState('');
  const [mes, setMes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const saldoNumber = parseFloat(saldo);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label><br />
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>

      <div>
        <label>Telefone:</label><br />
        <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
      </div>

      <div>
        <label>Saldo do FGTS:</label><br />
        <input type="number" value={saldo} onChange={(e) => setSaldo(e.target.value)} required />
      </div>

      <div>
        <label>Mês de aniversário:</label><br />
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
      </div>

      <br />
      <button type="submit">Simular</button>
    </form>
  );
}

export default FGTSForm;
