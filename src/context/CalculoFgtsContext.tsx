import { createContext, useContext, useState, ReactNode } from 'react';

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
