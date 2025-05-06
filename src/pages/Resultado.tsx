import { useEffect } from "react";
import { useCalculoFgts } from "../context/CalculoFgtsContext";
import { useNavigate } from "react-router-dom";

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

    return (
      <div style={{ padding: '2rem' }}>
        <h1>Resultado</h1>
        <p><strong>Nome</strong> {calculoFgts.nome}</p>
        <p><strong>Telefone</strong> {calculoFgts.telefone}</p>
        <p><strong>Saldo do FGTS</strong> {calculoFgts.saldo.toFixed(2)}</p>
        <p><strong>Mês de aniversário</strong> {calculoFgts.mes}</p>
        <p><strong>Valor do saque</strong> {calculoFgts.saque.toFixed(2)}</p>
      </div>
    );
  }

  
  export default Resultado;