import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type CalculoFgts = {
  nome: string;
  telefone: string;
  saldo: number;
  mes: string;
  saque: number;
};

type CalculoFgtsContextType = {
  calculoFgts: CalculoFgts | null;
  setCalculoFgts: (data: CalculoFgts) => void;
};

const CalculoFgtsContext = createContext<CalculoFgtsContextType | undefined>(undefined);

export function CalculoFgtsProvider({ children }: { children: ReactNode }) {
  const [calculoFgts, setCalculoFgts] = useState<CalculoFgts | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!children) {
      navigate('./');
    }
  }, [children, navigate]);

  if (!children) {
    return null;
  }
  

  return (
    <CalculoFgtsContext.Provider value={{ calculoFgts, setCalculoFgts }}>
      {children}
    </CalculoFgtsContext.Provider>
  );
}

export function useCalculoFgts() {
  const context = useContext(CalculoFgtsContext);

  if (!context) {
    throw new Error('useSimulacao deve ser usado dentro de um SimulacaoProvider');
  }
  return context;
}
