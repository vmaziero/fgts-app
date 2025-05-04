import { useCalculoFgts } from "../context/CalculoFgtsContext";

function Resultado() {
  const { calculoFgts } = useCalculoFgts();

  if(!calculoFgts) {
    return <p>Preencha o formulário com as informações solicitadas para visualizar o valor que poderá ser retirado.</p>
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